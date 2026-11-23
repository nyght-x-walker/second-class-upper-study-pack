(function () {
  "use strict";

  const A = window.StudyApp;
  const { $, $$, esc } = A;
  let noteSaveTimer = null;
  let searchTimer = null;
  let morningTimer = null;
  let gradeTimer = null;

  function openSection(id) {
    const section = A.sectionById.get(id);
    if (!section) return;
    A.state.selectedCourse = section.courseCode;
    A.state.uiOpenSection = id;
    A.saveState();
    A.switchView("courses");
    setTimeout(() => {
      const accordion = document.getElementById(`section-${A.safeId(id)}`);
      if (accordion) {
        accordion.open = true;
        accordion.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  }

  function selectCourse(code) {
    const course = A.courseByCode.get(code);
    if (!course) return;
    A.state.selectedCourse = code;
    A.state.uiOpenSection = course.sections[0] ? course.sections[0].id : null;
    A.saveState();
    A.switchView("courses");
  }

  function updateGradeComputed() {
    $$("[data-required-cell]").forEach(cell => {
      const course = A.courseByCode.get(cell.dataset.requiredCell);
      if (course) cell.innerHTML = A.requiredExamHtml(course);
    });
    const summary = $("#gpaSummary");
    if (summary) summary.innerHTML = A.gpaSummaryHtml();
  }

  function updateGradeFromInput(target) {
    const field = target.dataset.gradeField;
    const code = target.dataset.course;
    if (!field || !code) return;
    const entry = A.state.grade[code] || (A.state.grade[code] = { target: 75 });
    if (field === "ca") {
      entry.ca = target.value === "" ? "" : A.clamp(Number(target.value), 0, 100);
    } else if (field === "target") {
      entry.target = Number(target.value) || 75;
    }
    A.saveState();
    clearTimeout(gradeTimer);
    gradeTimer = setTimeout(updateGradeComputed, 80);
  }

  function openPrint(url) {
    const win = window.open(url, "_blank");
    if (!win) location.href = url;
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(A.state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `study-pack-backup-${A.todayISO()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    A.toast("Backup downloaded.");
  }

  async function handleImportFile(file) {
    try {
      const text = await file.text();
      const saved = JSON.parse(text);
      if (!saved || typeof saved !== "object") throw new Error("Invalid backup");
      const base = A.freshState();
      const next = {
        ...base,
        ...saved,
        settings: { ...base.settings, ...(saved.settings || {}) }
      };
      next.settings.hiddenCourses = Array.isArray(next.settings.hiddenCourses) ? next.settings.hiddenCourses : [];
      next.sessions = Array.isArray(next.sessions) ? next.sessions : [];
      next.papers = Array.isArray(next.papers) ? next.papers : [];
      next.errors = Array.isArray(next.errors) ? next.errors : [];
      A.replaceState(next);
      A.applyTheme();
      A.updateHeader();
      A.renderAll();
      A.toast("Backup imported.");
    } catch (err) {
      console.error(err);
      A.toast("Could not import that file.");
    }
  }

  function handleClick(event) {
    if (event.target.classList.contains("modal-backdrop")) {
      if ($("#modalRoot .timer-digits")) A.closeTimer();
      else A.closeModal();
      return;
    }

    const tab = event.target.closest("#tabs button[data-view]");
    if (tab) {
      A.switchView(tab.dataset.view);
      return;
    }

    const el = event.target.closest("[data-action]");
    if (!el) return;
    const action = el.dataset.action;

    switch (action) {
      case "toggle-answer": {
        const answer = document.getElementById(el.dataset.target);
        if (!answer) return;
        const nowHidden = answer.classList.toggle("hidden");
        el.textContent = nowHidden ? "Show answer" : "Hide answer";
        return;
      }
      case "grade-question": {
        const qid = el.dataset.qid;
        const grade = el.dataset.grade;
        A.state.qGrades[qid] = grade;
        if (grade === "again") {
          const sectionId = qid.split("::q")[0];
          if (A.sectionById.has(sectionId)) A.scheduleReview(sectionId, 1);
        }
        A.saveState();
        const block = el.closest(".q-block");
        if (block) block.querySelectorAll("[data-grade]").forEach(button => button.classList.remove("again", "good"));
        el.classList.add(grade);
        A.toast(grade === "again" ? "Flagged. Review it tomorrow." : "Marked as understood.");
        return;
      }
      case "confidence": {
        const id = el.dataset.section;
        const value = Number(el.dataset.value);
        A.state.confidence[id] = value;
        if (value <= 2) A.scheduleReview(id, 1);
        else if (!A.state.reviews[id]) A.scheduleReview(id, 3);
        A.saveState();
        const group = el.closest(".confidence");
        if (group) group.querySelectorAll(".conf-btn").forEach(button => button.classList.toggle("active", button === el));
        A.toast(`Confidence: ${A.confidenceLabel(value)}${value <= 2 ? " · review tomorrow" : ""}`);
        return;
      }
      case "complete-section": {
        A.markComplete(el.dataset.section);
        A.toast("Section completed. First review in 2 days.");
        A.renderAll();
        return;
      }
      case "schedule-review":
        A.scheduleReview(el.dataset.section, 2);
        A.toast("Review scheduled in 2 days.");
        A.renderAll();
        return;
      case "reviewed": {
        const days = A.advanceReview(el.dataset.section);
        A.toast(`Reviewed. Next in ${days} days.`);
        A.renderAll();
        return;
      }
      case "open-section":
        openSection(el.dataset.section);
        return;
      case "select-course":
        selectCourse(el.dataset.course);
        return;
      case "open-timer":
        A.openTimer({
          minutes: Number(el.dataset.minutes) || 50,
          courseCode: el.dataset.course || null,
          sectionId: el.dataset.section || null,
          title: el.dataset.title || undefined
        });
        return;
      case "open-last-recap": {
        const last = A.lastRecap();
        if (!last) {
          A.toast("No 3-2-1 recap saved yet.");
          return;
        }
        const [date, recap] = last;
        A.openModal(
          `3-2-1 recap · ${A.formatDate(date)}`,
          `<div class="stack">
            <div><h4>Course A — 3 ideas</h4><p class="small" style="white-space:pre-wrap">${esc(recap.a || "—")}</p></div>
            <div><h4>Course B — 3 ideas</h4><p class="small" style="white-space:pre-wrap">${esc(recap.b || "—")}</p></div>
            <div><h4>2 questions</h4><p class="small" style="white-space:pre-wrap">${esc(recap.q || "—")}</p></div>
            <div><h4>1 diagram / formula</h4><p class="small" style="white-space:pre-wrap">${esc(recap.diagram || "—")}</p></div>
          </div>`,
          "Your last saved night recap"
        );
        return;
      }
      case "goto-settings":
        A.switchView("settings");
        return;
      case "goto-progress":
        A.switchView("progress");
        return;
      case "goto-triage":
        A.switchView("triage");
        return;
      case "goto-today":
        A.switchView("today");
        return;
      case "set-mode": {
        const mode = el.dataset.mode;
        if (!["auto", "full", "hybrid", "emergency"].includes(mode)) return;
        A.state.settings.mode = mode;
        A.saveState();
        A.updateHeader();
        A.renderAll();
        A.toast(`Mode: ${mode === "auto" ? "Auto" : A.modeLabel(A.effectiveMode())}`);
        return;
      }
      case "cycle-mode": {
        const modes = ["auto", "full", "hybrid", "emergency"];
        const index = modes.indexOf(A.state.settings.mode);
        A.state.settings.mode = modes[(index + 1) % modes.length];
        A.saveState();
        A.updateHeader();
        A.renderAll();
        A.toast(`Mode: ${A.modeLabel(A.effectiveMode())}`);
        return;
      }
      case "toggle-theme":
        A.state.settings.theme = A.state.settings.theme === "light" ? "dark" : "light";
        A.saveState();
        A.applyTheme();
        A.renderSettings();
        A.toast(`Theme: ${A.state.settings.theme}`);
        return;
      case "open-print":
        openPrint(A.printUrl());
        return;
      case "open-timetable-print":
        openPrint(A.timetablePrintUrl());
        return;
      case "export":
        exportData();
        return;
      case "import":
        if ($("#importFile")) $("#importFile").click();
        else A.toast("Open Settings first, then import.");
        return;
      case "reset":
        if (!window.confirm("Reset all progress, notes and settings? This cannot be undone.")) return;
        A.replaceState(A.freshState());
        A.applyTheme();
        A.updateHeader();
        A.renderAll();
        A.toast("All study data reset.");
        return;
      case "delete-paper":
        A.state.papers = (A.state.papers || []).filter(paper => paper.id !== el.dataset.id);
        A.saveState();
        A.renderTriage();
        A.toast("Past paper removed.");
        return;
      case "delete-error":
        A.state.errors = (A.state.errors || []).filter(error => error.id !== el.dataset.id);
        A.saveState();
        A.renderReview();
        A.toast("Error removed.");
        return;
      case "close-modal":
        A.closeModal();
        return;
      case "timer-close":
        A.closeTimer();
        return;
      case "timer-toggle":
        A.timerToggle();
        return;
      case "timer-restart":
        A.timerRestart();
        return;
      case "timer-log-close":
        A.timerLogClose();
        return;
      default:
        return;
    }
  }

  function handleSubmit(event) {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    const type = form.dataset.form;
    const fd = new FormData(form);
    const s = A.state;
    const today = A.todayISO();

    if (type === "morning") {
      s.morning[today] = String(fd.get("text") || "").trim();
      A.saveState();
      A.toast("Morning recall saved.");
      A.renderToday();
      A.renderReview();
      return;
    }

    if (type === "recap") {
      s.recap[today] = {
        a: String(fd.get("a") || "").trim(),
        b: String(fd.get("b") || "").trim(),
        q: String(fd.get("q") || "").trim(),
        diagram: String(fd.get("diagram") || "").trim()
      };
      A.saveState();
      A.toast("3-2-1 recap saved.");
      A.renderToday();
      return;
    }

    if (type === "paper") {
      const course = String(fd.get("course") || "");
      if (!course) {
        A.toast("No course available for a past paper.");
        return;
      }
      const scoreRaw = String(fd.get("score") || "");
      s.papers.push({
        id: A.uid(),
        date: today,
        course,
        year: String(fd.get("year") || "").trim(),
        score: scoreRaw === "" ? null : Number(scoreRaw),
        weak: String(fd.get("weak") || "").trim(),
        notes: String(fd.get("notes") || "").trim(),
        ts: Date.now()
      });
      A.saveState();
      A.toast("Past paper logged.");
      A.renderTriage();
      return;
    }

    if (type === "error") {
      const mistake = String(fd.get("error") || "").trim();
      const fix = String(fd.get("fix") || "").trim();
      if (!mistake) {
        A.toast("Write what went wrong first.");
        return;
      }
      s.errors.push({
        id: A.uid(),
        date: today,
        course: String(fd.get("course") || ""),
        topic: String(fd.get("topic") || "").trim(),
        error: mistake,
        fix,
        ts: Date.now()
      });
      A.saveState();
      A.toast("Error logged.");
      A.renderReview();
      return;
    }

    if (type === "settings") {
      const mode = String(fd.get("mode") || "auto");
      const theme = String(fd.get("theme") || "dark");
      s.settings = {
        ...s.settings,
        examDate: String(fd.get("examDate") || "") || null,
        targetGpa: A.clamp(Number(fd.get("targetGpa")) || 3.5, 0, 4),
        startDate: String(fd.get("startDate") || "") || s.settings.startDate,
        mode: ["auto", "full", "hybrid", "emergency"].includes(mode) ? mode : "auto",
        theme: theme === "light" ? "light" : "dark"
      };
      A.saveState();
      A.applyTheme();
      A.updateHeader();
      A.renderAll();
      A.toast("Settings saved.");
      return;
    }

    if (type === "exam-date") {
      s.settings.examDate = String(fd.get("examDate") || "") || null;
      A.saveState();
      A.updateHeader();
      A.renderAll();
      A.toast(s.settings.examDate ? `Exam date set. ${A.modeLabel(A.effectiveMode())} is active.` : "Exam date cleared.");
    }
  }

  function handleInput(event) {
    const target = event.target;

    if (target.matches("[data-note]")) {
      A.state.notes[target.dataset.note] = target.value;
      clearTimeout(noteSaveTimer);
      noteSaveTimer = setTimeout(() => A.saveState(), 300);
      return;
    }

    if (target.id === "courseSearch") {
      A.state.courseQuery = target.value;
      const pos = target.selectionStart;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        if (A.state.lastView !== "courses") return;
        A.renderCourses();
        const input = $("#courseSearch");
        if (input) {
          input.focus();
          input.setSelectionRange(pos, pos);
        }
      }, 130);
      return;
    }

    if (target.id === "morningText") {
      A.state.morning[A.todayISO()] = target.value;
      clearTimeout(morningTimer);
      morningTimer = setTimeout(() => A.saveState(), 300);
      return;
    }

    if (target.matches("[data-grade-field]")) {
      updateGradeFromInput(target);
    }
  }

  function handleChange(event) {
    const target = event.target;

    if (target.matches('[data-action="choose-section"]')) {
      const code = target.dataset.course;
      const id = target.value;
      if (!code || !id) return;
      A.state.choices[`${A.todayISO()}::${code}`] = id;
      A.saveState();
      A.renderToday();
      return;
    }

    if (target.matches("[data-course-hidden]")) {
      const code = target.dataset.course;
      const list = A.state.settings.hiddenCourses || [];
      A.state.settings.hiddenCourses = target.checked
        ? Array.from(new Set([...list, code]))
        : list.filter(item => item !== code);
      A.saveState();
      A.renderAll();
      A.toast(target.checked ? `${code} hidden.` : `${code} restored.`);
      return;
    }

    if (target.matches("[data-grade-field]")) {
      updateGradeFromInput(target);
      return;
    }

    if (target.id === "importFile" && target.files && target.files[0]) {
      handleImportFile(target.files[0]);
      target.value = "";
    }
  }

  function handleKeydown(event) {
    if (event.key !== "Escape") return;
    if ($("#modalRoot .timer-digits")) A.closeTimer();
    else A.closeModal();
  }

  function initialize() {
    A.applyTheme();
    A.renderAll();
    A.switchView(A.state.lastView || "today");
    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);
    document.addEventListener("input", handleInput);
    document.addEventListener("change", handleChange);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("beforeunload", () => A.saveState());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
