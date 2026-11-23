(function () {
  "use strict";

  const A = window.StudyApp;
  const {
    DATA, META, esc, formatDate, formatMinutes, todayISO,
    dueReviews, upcomingReviews, confidenceLabel, examDays, modeLabel,
    effectiveMode, requiredExamHtml, projectedGpa, gradeEntry, gradePoint,
    priorityBadge, isHidden, progressOf, avgConfidence
  } = A;

  function state() {
    return A.state;
  }

  // ---------- Review ----------

  function renderReview() {
    const root = A.$("#view-review");
    if (!root) return;
    const s = state();
    const due = dueReviews();
    const upcoming = upcomingReviews(7);
    const today = todayISO();
    const morningEntries = Object.entries(s.morning || {})
      .filter(([, text]) => String(text || "").trim())
      .sort((a, b) => b[0].localeCompare(a[0]))
      .slice(0, 5);

    root.innerHTML = `
      <div class="page-head">
        <div>
          <div class="eyebrow">Spaced repetition</div>
          <h2 id="review-heading">Review queue</h2>
          <p>Review at +2, +7, +21 and +45 days. When you miss a question, log the error and review it sooner.</p>
        </div>
        <button class="btn btn-primary btn-sm" data-action="open-timer" data-minutes="30" data-title="Sunday 30-minute review">Start 30-min review</button>
      </div>
      <div class="stat-grid">
        <div class="stat"><div class="value">${due.length}</div><div class="label">Due now</div></div>
        <div class="stat"><div class="value">${due.filter(item => item.review.next < today).length}</div><div class="label">Overdue</div></div>
        <div class="stat"><div class="value">${upcoming.length}</div><div class="label">Next 7 days</div></div>
        <div class="stat"><div class="value">${Object.keys(s.reviews || {}).length}</div><div class="label">Scheduled</div></div>
      </div>
      <div class="card mt-2">
        <div class="card-head">
          <div><h3>Due now</h3><p class="card-sub">Closed book first. Answer the section questions before you open the model answers.</p></div>
        </div>
        ${due.length ? `<div class="stack">${due.map(({ section, review }) => `<div class="triage-item">
          <div class="triage-rank">${review.next < today ? "!" : "•"}</div>
          <div class="body">
            <strong>${esc(section.courseCode)} · ${esc(section.title)}</strong>
            <p>${review.next < today ? `Overdue since ${formatDate(review.next)}` : "Due today"} · confidence ${confidenceLabel(s.confidence[section.id])} · stage ${(Number(review.stage) || 0) + 1}</p>
          </div>
          <div class="row">
            <button class="btn btn-sm" data-action="open-section" data-section="${esc(section.id)}">Open</button>
            <button class="btn btn-primary btn-sm" data-action="reviewed" data-section="${esc(section.id)}">Reviewed</button>
          </div>
        </div>`).join("")}</div>` : `<div class="empty"><strong>No reviews due</strong>Complete a section tonight and it will return in 2 days.</div>`}
      </div>
      <div class="grid grid-2 mt-2">
        <div class="card">
          <div class="card-head"><div><h3>Next 7 days</h3><p class="card-sub">Glance once, then forget it until the date.</p></div></div>
          ${upcoming.length ? `<div class="stack">${upcoming.map(({ section, review }) => `<div class="row spread"><span class="small"><strong>${esc(section.courseCode)}</strong> · ${esc(section.title)}</span><span class="badge">${formatDate(review.next)}</span></div>`).join("")}</div>` : `<p class="small muted">Nothing scheduled in the next 7 days.</p>`}
        </div>
        <div class="card">
          <h3>Weekly 30-minute review</h3>
          <ul class="checklist mt-1">
            <li><strong>5 min:</strong> brain-dump each course from the week.</li>
            <li><strong>10 min:</strong> read the error log and redo the missed questions.</li>
            <li><strong>10 min:</strong> one mixed past-paper section under time.</li>
            <li><strong>5 min:</strong> choose next week's three weakest sections.</li>
          </ul>
          <div class="notice mt-2"><strong>Sunday 19:30–20:00.</strong> Do this before the 20:00 ecology block.</div>
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-head"><div><h3>Error log</h3><p class="card-sub">Every error is a future exam question. Log the fix, not just the mistake.</p></div></div>
        <form data-form="error">
          <div class="form-grid">
            <div class="field"><label>Course</label><select name="course">${A.orderedCourses.map(c => `<option value="${esc(c.code)}">${esc(c.code)} — ${esc(c.short || c.title)}</option>`).join("")}</select></div>
            <div class="field"><label>Topic or section</label><input name="topic" placeholder="e.g. Unit 3, Krebs cycle"></div>
            <div class="field full"><label>What went wrong?</label><textarea name="error" placeholder="I confused..."></textarea></div>
            <div class="field full"><label>Correct answer / fix</label><textarea name="fix" placeholder="The correct explanation is..."></textarea></div>
          </div>
          <button class="btn btn-primary btn-sm mt-1" type="submit">Add to error log</button>
        </form>
        <div class="mt-2">
          ${(s.errors || []).slice().sort((a, b) => (b.ts || 0) - (a.ts || 0)).map(error => `<div class="card" style="padding:13px;margin-top:8px">
            <div class="row spread"><strong>${esc(error.course)} · ${esc(error.topic || "Topic")}</strong><div class="row"><span class="tiny muted">${formatDate(error.date)}</span><button class="btn btn-sm btn-danger" data-action="delete-error" data-id="${esc(error.id)}">Delete</button></div></div>
            <p class="small mt-1"><span class="muted">Mistake:</span> ${esc(error.error)}</p>
            <p class="small"><span class="muted">Fix:</span> ${esc(error.fix)}</p>
          </div>`).join("") || `<p class="small muted">No errors logged yet.</p>`}
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-head"><div><h3>Recent morning recalls</h3><p class="card-sub">Your own words, before notes. This is retrieval practice.</p></div></div>
        ${morningEntries.length ? `<div class="stack">${morningEntries.map(([date, text]) => `<div><div class="row spread"><strong class="small">${formatDate(date)}</strong></div><p class="small muted" style="white-space:pre-wrap">${esc(text)}</p></div>`).join("")}</div>` : `<p class="small muted">No morning recall saved yet.</p>`}
      </div>
    `;
  }

  // ---------- Triage ----------

  function triagePlan() {
    const days = examDays();
    if (days == null || days > 28) {
      return { key: "fourWeeks", label: "Four-week plan", plan: (DATA.triage || {}).plans?.fourWeeks || [] };
    }
    if (days > 13) {
      return { key: "twoWeeks", label: "Two-week plan", plan: (DATA.triage || {}).plans?.twoWeeks || [] };
    }
    return { key: "oneWeek", label: "One-week emergency plan", plan: (DATA.triage || {}).plans?.oneWeek || [] };
  }

  function triageQueue() {
    const s = state();
    const today = todayISO();
    return A.visibleCourses().flatMap(course => course.sections.map(section => {
      const confidence = Number(s.confidence[section.id]) || 3;
      const priorityWeight = section.priority === "core" ? 3 : section.priority === "support" ? 2 : 1;
      const review = s.reviews[section.id];
      const due = review && review.next && review.next <= today ? 2 : 0;
      const done = s.completed[section.id] ? 4 : 0;
      const provisionalPenalty = section.provisional ? 0 : 0.4;
      const score = priorityWeight * (6 - confidence) + due + provisionalPenalty - done;
      return { section, course, confidence, due: !!due, score };
    })).filter(item => !s.completed[item.section.id] || item.due)
      .sort((a, b) => b.score - a.score);
  }

  function renderTriage() {
    const root = A.$("#view-triage");
    if (!root) return;
    const s = state();
    const days = examDays();
    const plan = triagePlan();
    const queue = triageQueue();
    const papers = (s.papers || []).slice().sort((a, b) => (b.ts || 0) - (a.ts || 0));
    const modes = ["auto", "full", "hybrid", "emergency"];

    root.innerHTML = `
      <div class="page-head">
        <div>
          <div class="eyebrow">Exam triage</div>
          <h2 id="triage-heading">Protect the degree</h2>
          <p>Full syllabus until the exam is close. Then reduce to core sections, past-paper questions and CA. Never start new optional content in the last 10 days.</p>
        </div>
        <span class="pill mode-${effectiveMode()}">${modeLabel(effectiveMode())}</span>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <div class="card-head"><div><h3>Exam date</h3><p class="card-sub">Set it once. The app switches Full → Hybrid → Emergency automatically.</p></div></div>
          <form data-form="exam-date" class="row">
            <input class="input" style="flex:1;min-width:170px" type="date" name="examDate" value="${esc(s.settings.examDate || "")}">
            <button class="btn btn-primary btn-sm" type="submit">Save</button>
          </form>
          <p class="small muted mt-1">${days == null ? "No exam date set; mode stays Full." : days < 0 ? "That date has passed." : `${days} day${days === 1 ? "" : "s"} left.`}</p>
        </div>
        <div class="card">
          <div class="card-head"><div><h3>Mode</h3><p class="card-sub">Auto reacts to the exam date. Manual overrides it.</p></div></div>
          <div class="row">
            ${modes.map(mode => `<button type="button" class="btn btn-sm ${s.settings.mode === mode ? "btn-primary" : ""}" data-action="set-mode" data-mode="${mode}">${mode === "auto" ? "Auto" : modeLabel(mode)}</button>`).join("")}
          </div>
          <p class="small muted mt-1">${modeLabel(effectiveMode())} is active now.</p>
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-head">
          <div><h3>${esc(plan.label)}</h3><p class="card-sub">${days == null ? "Default plan until you set an exam date." : "Selected from the time you have left."}</p></div>
          <span class="badge">${esc(plan.key)}</span>
        </div>
        <ul class="checklist">${plan.plan.map(item => `<li>${esc(item)}</li>`).join("")}</ul>
      </div>
      <div class="card mt-2">
        <div class="card-head">
          <div><h3>Today's triage queue</h3><p class="card-sub">Core + low confidence + due reviews + past-paper signal. Start at the top.</p></div>
          <span class="badge">Top ${Math.min(queue.length, 12)}</span>
        </div>
        ${queue.length ? `<div>${queue.slice(0, 12).map((item, index) => `<div class="triage-item">
          <div class="triage-rank">${index + 1}</div>
          <div class="body">
            <strong>${esc(item.course.code)} · ${esc(item.section.title)}</strong>
            <p>${priorityBadge(item.section.priority)} confidence ${confidenceLabel(item.confidence)}${item.due ? " · review due" : ""}${item.section.provisional ? " · provisional" : ""}</p>
          </div>
          <div class="row">
            <button class="btn btn-sm" data-action="open-section" data-section="${esc(item.section.id)}">Open</button>
            <button class="btn btn-sm btn-primary" data-action="open-timer" data-course="${esc(item.course.code)}" data-section="${esc(item.section.id)}">50 min</button>
          </div>
        </div>`).join("")}</div>` : `<div class="empty"><strong>Queue clear</strong>Either everything is complete, or the course list is empty.</div>`}
      </div>
      <div class="card mt-2">
        <div class="card-head">
          <div><h3>The must-know 20%</h3><p class="card-sub">For each course, the core sections that unlock the most past-paper questions.</p></div>
        </div>
        <div class="grid grid-2">
          ${A.visibleCourses().map(course => {
            const core = course.sections.filter(section => section.priority === "core").slice(0, 3);
            return `<div class="card" style="padding:14px">
              <div class="row spread"><strong>${esc(course.code)}</strong><span class="badge">${core.length} core</span></div>
              <div class="stack mt-1">${core.map(section => `<button type="button" class="course-item" style="padding:5px 0" data-action="open-section" data-section="${esc(section.id)}"><span class="small">${esc(section.title)}</span></button>`).join("") || `<span class="small muted">No core sections marked.</span>`}</div>
            </div>`;
          }).join("")}
        </div>
      </div>
      <div class="grid grid-2 mt-2">
        <div class="card">
          <div class="card-head"><div><h3>CA salvage</h3><p class="card-sub">CA is the safest marks. Enter scores in Progress; verify weights with the course outline.</p></div></div>
          <div class="table-wrap">
            <table class="data">
              <thead><tr><th>Course</th><th>CA</th><th>Exam</th><th>CA score</th><th>Required for B+</th></tr></thead>
              <tbody>${A.visibleCourses().map(course => {
                const entry = gradeEntry(course.code);
                return `<tr>
                  <td><strong>${esc(course.code)}</strong></td>
                  <td>${esc(course.assessment.ca)}%</td>
                  <td>${esc(course.assessment.exam)}%</td>
                  <td>${entry.ca === "" ? "—" : `${entry.ca}%`}</td>
                  <td>${requiredExamHtml(course)}</td>
                </tr>`;
              }).join("")}</tbody>
            </table>
          </div>
          <button class="btn btn-sm mt-1" data-action="goto-progress">Open grade calculator</button>
        </div>
        <div class="card">
          <div class="card-head"><div><h3>Triage rules</h3><p class="card-sub">Rules beat motivation on bad days.</p></div></div>
          <ul class="checklist">${((DATA.triage || {}).rules || []).map(rule => `<li>${esc(rule)}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-head"><div><h3>Past-paper log</h3><p class="card-sub">A past paper is diagnostic, not decoration. Tag what you lost.</p></div></div>
        <form data-form="paper">
          <div class="form-grid">
            <div class="field"><label>Course</label><select name="course">${A.visibleCourses().map(c => `<option value="${esc(c.code)}">${esc(c.code)} — ${esc(c.short || c.title)}</option>`).join("")}</select></div>
            <div class="field"><label>Year / paper</label><input name="year" placeholder="e.g. 2024/2025"></div>
            <div class="field"><label>Score (%)</label><input name="score" type="number" min="0" max="100" step="0.1"></div>
            <div class="field"><label>Weak sections</label><input name="weak" placeholder="e.g. Unit 3, Q2"></div>
            <div class="field full"><label>Notes</label><textarea name="notes" placeholder="What cost you marks? What will you do differently?"></textarea></div>
          </div>
          <button class="btn btn-primary btn-sm mt-1" type="submit">Log past paper</button>
        </form>
        <div class="mt-2">
          ${papers.length ? `<div class="stack">${papers.map(paper => `<div class="card" style="padding:13px">
            <div class="row spread"><strong>${esc(paper.course)} · ${esc(paper.year || "Past paper")}</strong><div class="row"><span class="badge">${esc(paper.score || "—")}%</span><button class="btn btn-sm btn-danger" data-action="delete-paper" data-id="${esc(paper.id)}">Delete</button></div></div>
            <p class="small mt-1"><span class="muted">Weak:</span> ${esc(paper.weak || "—")}</p>
            ${paper.notes ? `<p class="small"><span class="muted">Notes:</span> ${esc(paper.notes)}</p>` : ""}
          </div>`).join("")}</div>` : `<p class="small muted">No past papers logged yet.</p>`}
        </div>
      </div>
    `;
  }

  // ---------- Progress ----------

  function renderProgress() {
    const root = A.$("#view-progress");
    if (!root) return;
    const s = state();
    const courses = A.visibleCourses();
    const totalSections = courses.reduce((sum, course) => sum + course.sections.length, 0);
    const doneSections = courses.reduce((sum, course) => sum + course.sections.filter(section => s.completed[section.id]).length, 0);
    const gpa = projectedGpa();
    const gradeTargets = (DATA.gradeScale || []).filter(g => g.min >= 50);

    root.innerHTML = `
      <div class="page-head">
        <div>
          <div class="eyebrow">Progress and grades</div>
          <h2 id="progress-heading">Are you on track for 2:1?</h2>
          <p>Completion, confidence and the grade calculator together. A target is useful only if it changes what you do tonight.</p>
        </div>
        <span class="pill">${gpa.gpa.toFixed(2)} projected GPA</span>
      </div>
      <div class="stat-grid">
        <div class="stat"><div class="value">${doneSections}/${totalSections}</div><div class="label">Sections complete</div></div>
        <div class="stat"><div class="value">${formatMinutes(A.totalStudyMinutes())}</div><div class="label">Logged study</div></div>
        <div class="stat"><div class="value">${A.studyStreak()}</div><div class="label">Day streak</div></div>
        <div class="stat"><div class="value">${dueReviews().length}</div><div class="label">Reviews due</div></div>
      </div>
      <div class="grid grid-2 mt-2">
        <div class="card">
          <div class="card-head"><div><h3>Course completion</h3><p class="card-sub">Click a course to open its sections.</p></div></div>
          <div class="stack">
            ${courses.map(course => {
              const p = progressOf(course);
              const avg = avgConfidence(course);
              return `<div>
                <div class="row spread"><button type="button" class="course-item" style="padding:4px 0;flex:1" data-action="select-course" data-course="${esc(course.code)}"><span class="course-dot" style="background:${esc(course.color)}"></span><span><strong class="small">${esc(course.code)}</strong> <span class="tiny muted">${esc(course.short || course.title)}</span></span></button><span class="tiny muted nowrap">${p.done}/${p.total}</span></div>
                <div class="progress mt-1"><span style="width:${p.pct}%"></span></div>
                <div class="tiny muted mt-1">Confidence ${avg ? avg.toFixed(1) : "—"}/5</div>
              </div>`;
            }).join("")}
          </div>
        </div>
        <div class="card">
          <div class="card-head"><div><h3>Confidence heatmap</h3><p class="card-sub">Dark red = lost; teal = strong. Click a square to open it.</p></div></div>
          <div class="stack">
            ${courses.map(course => `<div class="heat-row">
              <span class="heat-label">${esc(course.code)}</span>
              <div class="heat-cells">${course.sections.map(section => {
                const conf = Number(s.confidence[section.id]) || 0;
                const done = s.completed[section.id] ? "done" : "";
                return `<button type="button" class="heat-cell c${conf} ${done}" data-action="open-section" data-section="${esc(section.id)}" title="${esc(section.title)} · ${confidenceLabel(conf)}"></button>`;
              }).join("")}</div>
            </div>`).join("")}
          </div>
          <div class="row mt-1"><span class="tiny muted">1 lost</span><span class="heat-cell c2"></span><span class="heat-cell c3"></span><span class="heat-cell c4"></span><span class="heat-cell c5"></span><span class="tiny muted">5 strong</span></div>
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-head">
          <div><h3>Grade calculator</h3><p class="card-sub">Enter CA scores and a target. The app shows the exam mark you need. Defaults: theory 40% CA / 60% exam; practical 60% CA / 40% exam.</p></div>
          <span class="pill">Target CGPA ${esc(s.settings.targetGpa)}</span>
        </div>
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>Course</th><th>Credits</th><th>CA weight</th><th>Exam weight</th><th>CA score (%)</th><th>Target</th><th>Required exam</th></tr></thead>
            <tbody>
              ${courses.map(course => {
                const entry = gradeEntry(course.code);
                return `<tr>
                  <td><strong>${esc(course.code)}</strong><br><span class="tiny muted">${esc(course.short || course.title)}</span></td>
                  <td>${course.credits}</td>
                  <td>${esc(course.assessment.ca)}%</td>
                  <td>${esc(course.assessment.exam)}%</td>
                  <td><input type="number" min="0" max="100" step="0.1" value="${entry.ca === "" ? "" : entry.ca}" placeholder="—" data-grade-field="ca" data-course="${esc(course.code)}"></td>
                  <td><select data-grade-field="target" data-course="${esc(course.code)}">${gradeTargets.map(g => `<option value="${g.min}" ${entry.target === g.min ? "selected" : ""}>${g.grade} (${g.min}%)</option>`).join("")}</select></td>
                  <td data-required-cell="${esc(course.code)}">${requiredExamHtml(course)}</td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
        <div id="gpaSummary" class="mt-2">${gpaSummaryHtml()}</div>
      </div>
      <div class="grid grid-2 mt-2">
        <div class="card">
          <h3>How this is calculated</h3>
          <p class="small muted mt-1">Required exam = (target overall − CA score × CA weight) ÷ exam weight. A result above 100% means the target is not reachable with that CA; below 0% means it is already secured.</p>
          <p class="small muted mt-1">Projected GPA assumes every course hits its selected target. It is a planning number, not a prediction. Verify credit values and assessment weights with your department.</p>
        </div>
        <div class="card">
          <h3>Grade scale used</h3>
          <div class="table-wrap mt-1"><table class="data"><thead><tr><th>Grade</th><th>Mark</th><th>Point</th></tr></thead><tbody>${(DATA.gradeScale || []).map(g => `<tr><td><strong>${esc(g.grade)}</strong></td><td>${esc(g.min)}%+</td><td>${esc(g.point)}</td></tr>`).join("")}</tbody></table></div>
        </div>
      </div>
    `;
  }

  function gpaSummaryHtml() {
    const gpa = projectedGpa();
    const target = Number(state().settings.targetGpa) || 3.5;
    const gap = gpa.gpa - target;
    const tone = gap >= 0 ? "badge-done" : "badge-danger";
    return `<div class="row spread">
      <div><strong>Projected GPA if targets are met: ${gpa.gpa.toFixed(2)}</strong><p class="small muted">${gpa.credits} credits · target ${target.toFixed(2)} · ${gap >= 0 ? "above" : "below"} target by ${Math.abs(gap).toFixed(2)}</p></div>
      <span class="badge ${tone}">${gap >= 0 ? "On track" : "Needs work"}</span>
    </div>`;
  }

  // ---------- Settings ----------

  function renderSettings() {
    const root = A.$("#view-settings");
    if (!root) return;
    const s = state();
    root.innerHTML = `
      <div class="page-head">
        <div>
          <div class="eyebrow">Settings and data</div>
          <h2 id="settings-heading">Make it yours</h2>
          <p>Set the exam date, target GPA, theme and the courses you are actually taking. Everything is stored on this device.</p>
        </div>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <h3>Study settings</h3>
          <form data-form="settings" class="mt-1">
            <div class="form-grid">
              <div class="field"><label>Exam date</label><input type="date" name="examDate" value="${esc(s.settings.examDate || "")}"></div>
              <div class="field"><label>Target CGPA</label><input type="number" name="targetGpa" min="0" max="4" step="0.01" value="${esc(s.settings.targetGpa)}"></div>
              <div class="field"><label>Semester start</label><input type="date" name="startDate" value="${esc(s.settings.startDate || "")}"></div>
              <div class="field"><label>Mode</label><select name="mode">
                ${["auto", "full", "hybrid", "emergency"].map(mode => `<option value="${mode}" ${s.settings.mode === mode ? "selected" : ""}>${mode === "auto" ? "Auto (recommended)" : modeLabel(mode)}</option>`).join("")}
              </select></div>
              <div class="field"><label>Theme</label><select name="theme">
                <option value="dark" ${s.settings.theme === "dark" ? "selected" : ""}>Dark</option>
                <option value="light" ${s.settings.theme === "light" ? "selected" : ""}>Light</option>
              </select></div>
              <div class="field"><label>Evening start</label><input value="21:00 (20:00 Sunday)" disabled></div>
            </div>
            <button class="btn btn-primary btn-sm mt-2" type="submit">Save settings</button>
          </form>
        </div>
        <div class="card">
          <h3>Files and backup</h3>
          <p class="small muted mt-1">The interactive app works offline. Use the print view for a PDF backup. Export JSON before clearing browser data.</p>
          <div class="row mt-2">
            <button class="btn btn-sm" data-action="open-print">Open printable pack</button>
            <button class="btn btn-sm" data-action="open-timetable-print">Printable timetable</button>
          </div>
          <div class="row mt-2">
            <button class="btn btn-sm" data-action="export">Export JSON backup</button>
            <button class="btn btn-sm" data-action="import">Import JSON backup</button>
            <input id="importFile" type="file" accept="application/json" class="hidden">
            <button class="btn btn-sm btn-danger" data-action="reset">Reset all data</button>
          </div>
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-head"><div><h3>Courses in this timetable</h3><p class="card-sub">Uncheck a course you are not taking. It disappears from Today, Progress and Triage, but stays in the timetable.</p></div></div>
        <div class="grid grid-3">
          ${A.orderedCourses.map(course => `<label class="check-row">
            <input type="checkbox" data-course-hidden data-course="${esc(course.code)}" ${isHidden(course.code) ? "checked" : ""}>
            <span><strong>${esc(course.code)}</strong> · ${esc(course.short || course.title)}</span>
          </label>`).join("")}
        </div>
      </div>
      <div class="grid grid-2 mt-2">
        <div class="card">
          <h3>Quick start</h3>
          <ol class="must-list mt-1">${(DATA.quickStart || []).map(item => `<li>${esc(item)}</li>`).join("")}</ol>
        </div>
        <div class="card">
          <h3>Assumptions and sources</h3>
          <p class="small muted mt-1">BIOL 325, 331 and 335 sections are built from the supplied slides up to the point the slides stop. Later topics and the other courses are provisional until checked against the lecturer's notes and past questions.</p>
          <p class="small muted mt-1">Grade scale assumed: A 80+, B+ 75+, B 70+, C+ 65+, C 60+, D+ 55+, D 50+, E 40+, F below 40. Verify with UENR regulations.</p>
          <p class="small muted mt-1">Theory/practical CA weights are assumed; check each course outline. The timetable follows the 14-slot sample image.</p>
        </div>
      </div>
    `;
  }

  A.renderReview = renderReview;
  A.renderTriage = renderTriage;
  A.renderProgress = renderProgress;
  A.renderSettings = renderSettings;
  A.gpaSummaryHtml = gpaSummaryHtml;
})();
