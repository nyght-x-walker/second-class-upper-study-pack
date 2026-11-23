(function () {
  "use strict";

  const App = (window.StudyApp = {});
  const DATA = window.STUDY_DATA || {};
  const META = DATA.meta || {};
  const STORAGE_KEY = "uenrStudyPack.v1";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = value =>
    String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  const safeId = value => String(value).replace(/[^a-zA-Z0-9_-]/g, "-");
  const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const pad = n => String(n).padStart(2, "0");
  const todayISO = () => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  const parseISO = iso => new Date(`${iso}T00:00:00`);
  const addDays = (iso, n) => {
    const d = parseISO(iso);
    d.setDate(d.getDate() + n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  const diffDays = (fromIso, toIso) => Math.round((parseISO(toIso) - parseISO(fromIso)) / 86400000);
  const formatDate = iso => {
    if (!iso) return "—";
    const d = parseISO(iso);
    return Number.isNaN(d.getTime())
      ? iso
      : d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });
  };
  const formatLongDate = iso => {
    if (!iso) return "";
    const d = parseISO(iso);
    return Number.isNaN(d.getTime())
      ? iso
      : d.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  };
  const formatMinutes = mins => {
    const m = Math.max(0, Math.round(Number(mins) || 0));
    if (m < 60) return `${m} min`;
    return `${Math.floor(m / 60)}h ${m % 60}m`;
  };
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  function freshState() {
    return {
      settings: {
        examDate: null,
        mode: "auto",
        theme: "dark",
        targetGpa: 3.5,
        startDate: META.startDate || todayISO(),
        hiddenCourses: []
      },
      completed: {},
      confidence: {},
      reviews: {},
      notes: {},
      recap: {},
      morning: {},
      sessions: [],
      qGrades: {},
      choices: {},
      grade: {},
      papers: [],
      errors: [],
      selectedCourse: null,
      lastView: "today"
    };
  }

  function loadState() {
    const base = freshState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);
      const merged = {
        ...base,
        ...saved,
        settings: { ...base.settings, ...(saved.settings || {}) }
      };
      merged.settings.hiddenCourses = Array.isArray(merged.settings.hiddenCourses) ? merged.settings.hiddenCourses : [];
      merged.sessions = Array.isArray(merged.sessions) ? merged.sessions : [];
      merged.papers = Array.isArray(merged.papers) ? merged.papers : [];
      merged.errors = Array.isArray(merged.errors) ? merged.errors : [];
      merged.completed = merged.completed || {};
      merged.confidence = merged.confidence || {};
      merged.reviews = merged.reviews || {};
      merged.notes = merged.notes || {};
      merged.recap = merged.recap || {};
      merged.morning = merged.morning || {};
      merged.qGrades = merged.qGrades || {};
      merged.choices = merged.choices || {};
      merged.grade = merged.grade || {};
      return merged;
    } catch (err) {
      console.warn("Could not load saved study data", err);
      return base;
    }
  }

  let state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn("Could not save study data", err);
    }
  }

  // Normalise course data once.
  const courseByCode = new Map();
  const sectionById = new Map();

  (DATA.courses || []).forEach(course => {
    course.code = course.code || "BIOL";
    course.title = course.title || course.code;
    course.short = course.short || course.title;
    course.kind = course.kind || "theory";
    course.color = course.color || "#2dd4bf";
    course.credits = Number(course.credits) || 2;
    course.status = course.status || "provisional";
    course.assessment = course.assessment || {
      ca: course.kind === "practical" ? 60 : 40,
      exam: course.kind === "practical" ? 40 : 60
    };
    course.bridge = course.bridge || {};
    course.sections = (course.sections || []).map((section, index) => {
      const normalised = {
        ...section,
        id: `${course.code}::${index}`,
        courseCode: course.code,
        courseTitle: course.title,
        courseColor: course.color,
        courseKind: course.kind,
        sectionIndex: index,
        priority: section.priority || "support",
        mustKnow: section.mustKnow || [],
        terms: section.terms || [],
        diagrams: section.diagrams || [],
        questions: (section.questions || []).map(q => {
          if (Array.isArray(q)) return { q: q[0] || "", a: q[1] || "", type: q[2] || "Question" };
          if (typeof q === "string") return { q, a: "", type: "Question" };
          return { q: q.q || "", a: q.a || "", type: q.type || "Question" };
        })
      };
      sectionById.set(normalised.id, normalised);
      return normalised;
    });
    courseByCode.set(course.code, course);
  });

  const scheduledCodes = [];
  (DATA.timetable || []).forEach(day => {
    (day.slots || []).forEach(slot => {
      if (!scheduledCodes.includes(slot.course)) scheduledCodes.push(slot.course);
    });
  });
  const orderedCourses = [
    ...scheduledCodes.map(code => courseByCode.get(code)).filter(Boolean),
    ...(DATA.courses || []).filter(c => !scheduledCodes.includes(c.code))
  ];
  const allSections = orderedCourses.flatMap(c => c.sections);

  function isHidden(code) {
    return (state.settings.hiddenCourses || []).includes(code);
  }
  function visibleCourses() {
    return orderedCourses.filter(c => !isHidden(c.code));
  }
  function courseOf(section) {
    return courseByCode.get(section.courseCode);
  }
  function nextSection(course) {
    if (!course || !course.sections.length) return null;
    const unfinished = course.sections.find(s => !state.completed[s.id]);
    if (unfinished) return unfinished;
    return course.sections.slice().sort((a, b) => (state.confidence[a.id] || 0) - (state.confidence[b.id] || 0))[0];
  }
  function choiceKey(course) {
    return `${todayISO()}::${course.code}`;
  }
  function chosenSection(course) {
    const chosen = state.choices[choiceKey(course)];
    if (chosen && course.sections.some(s => s.id === chosen)) return sectionById.get(chosen);
    return nextSection(course);
  }
  function progressOf(course) {
    const total = course.sections.length;
    const done = course.sections.filter(s => state.completed[s.id]).length;
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }
  function avgConfidence(course) {
    const values = course.sections.map(s => Number(state.confidence[s.id]) || 0).filter(Boolean);
    return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  }
  function confidenceLabel(value) {
    return ({ 0: "Unrated", 1: "Lost", 2: "Shaky", 3: "Okay", 4: "Good", 5: "Strong" })[Number(value) || 0];
  }
  function priorityBadge(priority) {
    const map = {
      core: ["Core", "badge-core"],
      support: ["Support", "badge-support"],
      optional: ["Optional", "badge-optional"]
    };
    const item = map[priority] || map.support;
    return `<span class="badge ${item[1]}">${item[0]}</span>`;
  }
  function statusBadge(course) {
    const map = {
      full: ["Full materials", "badge-core"],
      partial: ["Partial materials", "badge-support"],
      provisional: ["Provisional", "badge-provisional"]
    };
    const item = map[course.status] || map.provisional;
    return `<span class="badge ${item[1]}">${item[0]}</span>`;
  }
  function kindBadge(kind) {
    if (kind === "practical") return `<span class="badge badge-practical">Practical</span>`;
    if (kind === "skills") return `<span class="badge">Skills</span>`;
    return `<span class="badge">Theory</span>`;
  }
  function todaySchedule() {
    return (DATA.timetable || []).find(d => Number(d.dayIndex) === new Date().getDay()) || null;
  }
  function lastRecap() {
    return Object.entries(state.recap || {})
      .filter(([, value]) => value && (value.a || value.b || value.q || value.diagram))
      .sort((a, b) => b[0].localeCompare(a[0]))[0] || null;
  }
  function studyDates() {
    const dates = new Set();
    (state.sessions || []).forEach(s => s.date && dates.add(s.date));
    Object.keys(state.recap || {}).forEach(d => dates.add(d));
    Object.keys(state.morning || {}).forEach(d => {
      if (String(state.morning[d] || "").trim()) dates.add(d);
    });
    return dates;
  }
  function studyStreak() {
    const dates = studyDates();
    if (!dates.size) return 0;
    let cursor = dates.has(todayISO()) ? todayISO() : addDays(todayISO(), -1);
    let count = 0;
    while (dates.has(cursor)) {
      count += 1;
      cursor = addDays(cursor, -1);
    }
    return count;
  }
  function totalStudyMinutes() {
    return (state.sessions || []).reduce((sum, session) => sum + (Number(session.minutes) || 0), 0);
  }
  function dueReviews() {
    const today = todayISO();
    return Object.entries(state.reviews || {})
      .filter(([id, review]) => review && review.next && review.next <= today && sectionById.has(id))
      .map(([id, review]) => ({ section: sectionById.get(id), review }))
      .sort((a, b) => a.review.next.localeCompare(b.review.next));
  }
  function upcomingReviews(days = 7) {
    const today = todayISO();
    const limit = addDays(today, days);
    return Object.entries(state.reviews || {})
      .filter(([id, review]) => review && review.next && review.next > today && review.next <= limit && sectionById.has(id))
      .map(([id, review]) => ({ section: sectionById.get(id), review }))
      .sort((a, b) => a.review.next.localeCompare(b.review.next));
  }
  function reviewIntervals() {
    return [2, 7, 21, 45];
  }
  function scheduleReview(id, days = 2) {
    const today = todayISO();
    const existing = state.reviews[id] || { stage: 0, last: null };
    state.reviews[id] = { ...existing, last: today, next: addDays(today, days) };
    saveState();
  }
  function advanceReview(id) {
    const intervals = reviewIntervals();
    const existing = state.reviews[id] || { stage: 0, last: null, next: null };
    const nextStage = Math.min((Number(existing.stage) || 0) + 1, intervals.length - 1);
    const today = todayISO();
    state.reviews[id] = {
      stage: nextStage,
      last: today,
      next: addDays(today, intervals[nextStage])
    };
    saveState();
    return intervals[nextStage];
  }
  function markComplete(id) {
    state.completed[id] = true;
    if (!state.reviews[id]) {
      scheduleReview(id, 2);
    } else {
      saveState();
    }
  }
  function gradePoint(mark) {
    const scale = DATA.gradeScale || [];
    const found = scale.find(g => Number(mark) >= Number(g.min));
    return found ? Number(found.point) : 0;
  }
  function effectiveMode() {
    if (state.settings.mode !== "auto") return state.settings.mode;
    if (!state.settings.examDate) return "full";
    const days = diffDays(todayISO(), state.settings.examDate);
    if (days <= 10) return "emergency";
    if (days <= 21) return "hybrid";
    return "full";
  }
  function modeLabel(mode) {
    return ({ full: "Full syllabus", hybrid: "Hybrid", emergency: "Emergency triage" })[mode] || "Full syllabus";
  }
  function examDays() {
    if (!state.settings.examDate) return null;
    return diffDays(todayISO(), state.settings.examDate);
  }
  function examCountdownText() {
    const days = examDays();
    if (days == null) return "Set exam date";
    if (days < 0) return "Exam passed";
    if (days === 0) return "Exam today";
    return `${days} day${days === 1 ? "" : "s"} to exam`;
  }
  function printUrl() {
    return location.pathname.includes("/dist/") ? "Study_Pack_Print.html" : "print.html";
  }
  function timetablePrintUrl() {
    return location.pathname.includes("/dist/") ? "Study_Pack_Timetable.html" : "timetable.html";
  }
  function gradeEntry(code) {
    const entry = state.grade[code] || {};
    return {
      ca: entry.ca === "" || entry.ca == null ? "" : Number(entry.ca),
      target: Number(entry.target || 75)
    };
  }
  function requiredExam(course) {
    const entry = gradeEntry(course.code);
    if (entry.ca === "" || Number.isNaN(entry.ca)) return null;
    const caWeight = Number(course.assessment.ca) / 100;
    const examWeight = Number(course.assessment.exam) / 100;
    if (!examWeight) return null;
    return (entry.target - entry.ca * caWeight) / examWeight;
  }
  function requiredExamHtml(course) {
    const required = requiredExam(course);
    if (required == null) return `<span class="muted small">Enter CA</span>`;
    if (required > 100) return `<span class="badge badge-danger">Not reachable</span>`;
    if (required <= 0) return `<span class="badge badge-done">Secured</span>`;
    return `<strong>${Math.ceil(required)}%</strong>`;
  }
  function projectedGpa() {
    let credits = 0;
    let points = 0;
    visibleCourses().forEach(course => {
      const target = gradeEntry(course.code).target;
      credits += course.credits;
      points += gradePoint(target) * course.credits;
    });
    return { gpa: credits ? points / credits : 0, credits };
  }
  function modeNotice() {
    const mode = effectiveMode();
    if (mode === "emergency") {
      return `<div class="notice notice-danger"><strong>Emergency triage.</strong> Core sections, past-paper questions and CA only. Do not start new optional content.</div>`;
    }
    if (mode === "hybrid") {
      return `<div class="notice"><strong>Hybrid mode.</strong> Core sections for every course, one timed past paper per course, then weak spots.</div>`;
    }
    return `<div class="notice notice-accent"><strong>Full syllabus.</strong> Core first, then support and optional detail. Build the must-know sheets as you go.</div>`;
  }

  // ---------- header and navigation ----------

  function updateHeader() {
    const label = $("#semesterLabel");
    if (label) label.textContent = META.subtitle || "BSc Biological Science";
    const countdown = $("#examCountdown");
    if (countdown) {
      countdown.textContent = examCountdownText();
      countdown.title = state.settings.examDate
        ? `Exam date: ${formatDate(state.settings.examDate)}`
        : "Open Settings to set your exam date";
    }
    const badge = $("#modeBadge");
    if (badge) {
      const mode = effectiveMode();
      badge.textContent = modeLabel(mode);
      badge.className = `pill mode-${mode}`;
      badge.title = state.settings.mode === "auto"
        ? `Automatic mode based on your exam date (${modeLabel(mode)})`
        : `Manual mode: ${modeLabel(mode)}`;
    }
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.settings.theme === "light" ? "light" : "dark";
  }

  function switchView(name) {
    const valid = ["today", "timetable", "courses", "review", "triage", "progress", "settings"];
    const view = valid.includes(name) ? name : "today";
    state.lastView = view;
    $$(".view").forEach(section => section.classList.toggle("active", section.id === `view-${view}`));
    $$("#tabs button").forEach(button => button.classList.toggle("active", button.dataset.view === view));
    renderView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderView(name) {
    if (typeof App[`render${name.charAt(0).toUpperCase()}${name.slice(1)}`] === "function") {
      App[`render${name.charAt(0).toUpperCase()}${name.slice(1)}`]();
    }
  }

  function renderAll() {
    updateHeader();
    applyTheme();
    ["Today", "Timetable", "Courses", "Review", "Triage", "Progress", "Settings"].forEach(name => {
      if (typeof App[`render${name}`] === "function") App[`render${name}`]();
    });
  }

  function renderCurrent() {
    updateHeader();
    renderView(state.lastView || "today");
  }

  // ---------- shared components ----------

  function confidenceButtons(section) {
    const current = Number(state.confidence[section.id]) || 0;
    return `<div class="confidence" aria-label="Confidence for ${esc(section.title)}">
      <span class="tiny muted">Confidence</span>
      ${[1, 2, 3, 4, 5].map(n => `<button type="button" class="conf-btn ${current === n ? "active" : ""}" data-action="confidence" data-section="${esc(section.id)}" data-value="${n}" title="${confidenceLabel(n)}">${n}</button>`).join("")}
    </div>`;
  }

  function questionBlock(section, question, index) {
    const qid = `${section.id}::q${index}`;
    const answerId = `ans-${safeId(qid)}`;
    const qGrade = state.qGrades[qid] || "";
    return `<div class="q-block">
      <div class="q-text">${esc(question.q)}<span class="q-type">${esc(question.type)}</span></div>
      <div class="q-controls">
        <button type="button" class="btn btn-sm answer-toggle" data-action="toggle-answer" data-target="${esc(answerId)}">Show answer</button>
        <button type="button" class="grade-btn ${qGrade === "again" ? "again" : ""}" data-action="grade-question" data-qid="${esc(qid)}" data-grade="again">Again</button>
        <button type="button" class="grade-btn ${qGrade === "good" ? "good" : ""}" data-action="grade-question" data-qid="${esc(qid)}" data-grade="good">Got it</button>
      </div>
      <div class="q-answer hidden" id="${esc(answerId)}">${esc(question.a || "No model answer supplied. Write your own answer, then check the source.")}</div>
    </div>`;
  }

  function sectionBody(section, course) {
    const completed = !!state.completed[section.id];
    const bridgeIn = section.bridgeIn || (course.bridge && course.bridge.in) || "";
    const bridgeOut = section.bridgeOut || (course.bridge && course.bridge.out) || "";
    const linkQuestion = section.linkQuestion || (course.bridge && course.bridge.linkQuestion) || "";
    return `<div class="stack">
      <div class="row">
        ${priorityBadge(section.priority)}
        ${section.provisional ? `<span class="badge badge-provisional">Provisional</span>` : ""}
        ${completed ? `<span class="badge badge-done">Completed</span>` : ""}
        <span class="tiny muted">${esc(section.unit || "")}${section.source ? ` · ${esc(section.source)}` : ""}</span>
      </div>
      <div>
        <h4 class="mb-1">Must know</h4>
        <ul class="must-list">${(section.mustKnow || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>
      </div>
      ${(section.terms || []).length ? `<div>
        <h4 class="mb-1">Key terms</h4>
        <div class="term-chips">${section.terms.map(term => `<span class="term-chip">${esc(term)}</span>`).join("")}</div>
      </div>` : ""}
      ${(section.diagrams || []).length ? `<div>
        <h4 class="mb-1">Diagrams to draw</h4>
        <ul class="must-list">${section.diagrams.map(item => `<li>${esc(item)}</li>`).join("")}</ul>
      </div>` : ""}
      <div>
        <h4 class="mb-1">Test yourself</h4>
        <div>${(section.questions || []).map((q, i) => questionBlock(section, q, i)).join("")}</div>
      </div>
      ${section.trap ? `<div class="notice"><strong>Exam trap:</strong> ${esc(section.trap)}</div>` : ""}
      <div class="bridge-grid">
        <div class="bridge-box"><span class="label">Bridge in</span>${esc(bridgeIn)}</div>
        <div class="bridge-box"><span class="label">Bridge out</span>${esc(bridgeOut)}</div>
      </div>
      ${linkQuestion ? `<div class="link-question"><span class="label">Link question · theory ↔ practical</span>${esc(linkQuestion)}</div>` : ""}
      <div class="field">
        <label>Your notes for this section</label>
        <textarea data-note="${esc(section.id)}" placeholder="Write the answer you would give in the exam. Keep it to five lines.">${esc(state.notes[section.id] || "")}</textarea>
      </div>
      <div class="row spread">
        ${confidenceButtons(section)}
        <div class="row">
          <button type="button" class="btn btn-sm" data-action="open-timer" data-course="${esc(course.code)}" data-section="${esc(section.id)}">50-min timer</button>
          <button type="button" class="btn btn-sm" data-action="schedule-review" data-section="${esc(section.id)}">Review +2d</button>
          <button type="button" class="btn btn-primary btn-sm" data-action="complete-section" data-section="${esc(section.id)}" ${completed ? "disabled" : ""}>${completed ? "Completed" : "Mark complete"}</button>
        </div>
      </div>
    </div>`;
  }

  function sessionCard(course, section, slot) {
    if (!section) {
      return `<div class="empty"><strong>No section loaded for ${esc(course.code)}</strong>Add sections in the course data file.</div>`;
    }
    const completed = !!state.completed[section.id];
    const options = course.sections
      .map((s, i) => `<option value="${esc(s.id)}" ${s.id === section.id ? "selected" : ""}>${i + 1}. ${esc(s.title)}</option>`)
      .join("");
    return `<article class="session-card" style="--course-color:${esc(course.color)}">
      <div class="session-head">
        <div>
          <div class="session-meta">
            <span class="course-dot" style="background:${esc(course.color)}"></span>
            <strong>${esc(course.code)}</strong>
            ${kindBadge(course.kind)}
            <span class="pill pill-muted">${esc(slot.time || "")}</span>
            ${completed ? `<span class="badge badge-done">Completed</span>` : ""}
          </div>
          <h3 class="session-title">${esc(section.title)}</h3>
          <div class="small muted">${esc(section.unit || "")}${section.source ? ` · ${esc(section.source)}` : ""}</div>
        </div>
        <div class="card-actions">${priorityBadge(section.priority)}${section.provisional ? `<span class="badge badge-provisional">Provisional</span>` : ""}</div>
      </div>
      <div class="session-body stack">
        <div class="row spread">
          <label class="small muted" style="flex:1;min-width:220px">Choose tonight's section
            <select class="input" data-action="choose-section" data-course="${esc(course.code)}">${options}</select>
          </label>
          <button type="button" class="btn btn-sm" data-action="open-section" data-section="${esc(section.id)}">Open full card</button>
        </div>
        ${sectionBody(section, course)}
      </div>
    </article>`;
  }

  Object.defineProperty(App, "state", {
    get() { return state; },
    set(value) { state = value; },
    enumerable: true
  });

  Object.assign(App, {
    DATA, META, STORAGE_KEY,
    $, $$, esc, safeId, uid, pad, todayISO, parseISO, addDays, diffDays,
    formatDate, formatLongDate, formatMinutes, clamp,
    freshState, loadState, saveState,
    replaceState(next) { state = next; saveState(); },
    courseByCode, sectionById, orderedCourses, allSections,
    isHidden, visibleCourses, courseOf, nextSection, chosenSection, progressOf,
    avgConfidence, confidenceLabel, priorityBadge, statusBadge, kindBadge,
    todaySchedule, lastRecap, studyDates, studyStreak, totalStudyMinutes,
    dueReviews, upcomingReviews, reviewIntervals, scheduleReview, advanceReview,
    markComplete, gradePoint, effectiveMode, modeLabel, examDays,
    examCountdownText, printUrl, timetablePrintUrl, gradeEntry, requiredExam,
    requiredExamHtml, projectedGpa, modeNotice,
    updateHeader, applyTheme, switchView, renderView, renderAll, renderCurrent,
    confidenceButtons, questionBlock, sectionBody, sessionCard
  });
})();
