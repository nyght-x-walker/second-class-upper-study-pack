(function () {
  "use strict";

  const A = window.StudyApp;
  const {
    DATA, META, esc, safeId, formatDate, formatMinutes,
    todayISO, addDays, dueReviews, todaySchedule, courseByCode,
    isHidden, chosenSection, progressOf, avgConfidence, priorityBadge,
    statusBadge, kindBadge, effectiveMode, modeNotice, examCountdownText,
    confidenceLabel, sessionCard, formatLongDate, completed
  } = A;

  function state() {
    return A.state;
  }

  // ---------- Today ----------

  function renderToday() {
    const root = A.$("#view-today");
    if (!root) return;
    const s = state();
    const schedule = todaySchedule();
    const today = todayISO();
    const slots = schedule ? schedule.slots : [];
    const morningText = String(s.morning[today] || "");
    const recap = s.recap[today] || { a: "", b: "", q: "", diagram: "" };
    const due = dueReviews();
    const firstCourse = slots[0] ? courseByCode.get(slots[0].course) : null;
    const secondCourse = slots[1] ? courseByCode.get(slots[1].course) : null;

    root.innerHTML = `
      <div class="page-head">
        <div>
          <div class="eyebrow">${esc(new Date().toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" }))}</div>
          <h2 id="today-heading">${schedule ? esc(schedule.theme) : "Rest and review day"}</h2>
          <p>${schedule ? "Two 50-minute blocks, one 10-minute break, then the 3-2-1 recap. Closed book first." : "No scheduled blocks today. Use the Review tab for due sections."}</p>
        </div>
        <div class="row">
          <span class="pill ${due.length ? "pill-amber" : "pill-muted"}">${due.length} review${due.length === 1 ? "" : "s"} due</span>
          <span class="pill">${esc(examCountdownText())}</span>
        </div>
      </div>
      ${modeNotice()}
      <div class="grid grid-2 mt-2">
        <div class="card">
          <div class="card-head">
            <div>
              <h3>Morning recall · 10 minutes</h3>
              <p class="card-sub">Before notes, before your phone: write what you remember from last night.</p>
            </div>
            <span class="badge ${morningText.trim() ? "badge-done" : ""}">${morningText.trim() ? "Done" : "Not done"}</span>
          </div>
          <form data-form="morning">
            <div class="field">
              <label for="morningText">Closed-book recall</label>
              <textarea id="morningText" name="text" placeholder="Yesterday I learned... The three ideas I can still recall are... The part I cannot explain is...">${esc(morningText)}</textarea>
            </div>
            <div class="row mt-1">
              <button class="btn btn-primary btn-sm" type="submit">Save recall</button>
              <button class="btn btn-sm" type="button" data-action="open-last-recap">Show last 3-2-1</button>
            </div>
          </form>
        </div>
        <div class="card">
          <div class="card-head">
            <div>
              <h3>Tonight's rhythm</h3>
              <p class="card-sub">The 50-minute block is fixed. The timer walks you through it.</p>
            </div>
            <button class="btn btn-sm" data-action="open-timer" data-minutes="50" data-title="50-minute power block">Start timer</button>
          </div>
          <div class="stack">
            ${(META.phasePlan || []).map(phase => `<div class="row spread"><div><strong>${esc(phase.name)}</strong> <span class="small muted">${esc(phase.prompt || "")}</span></div><span class="badge">${esc(phase.minutes)} min</span></div>`).join("")}
            <div class="row spread"><div><strong>3-2-1 recap</strong> <span class="small muted">Three ideas per course, two questions, one diagram.</span></div><span class="badge">10 min</span></div>
          </div>
        </div>
      </div>
      ${schedule ? `<div class="mt-3">
        <div class="spread mb-2"><div><div class="eyebrow">Power blocks</div><h2 style="font-size:1.25rem">${esc(schedule.day)} schedule</h2></div><button class="btn btn-sm" data-action="open-timetable-print">Printable timetable</button></div>
        <div class="stack">
          ${slots.map(slot => {
            const course = courseByCode.get(slot.course);
            if (!course) return `<div class="empty"><strong>${esc(slot.course)} is in the timetable but has no course data.</strong>Add a data file for it.</div>`;
            if (isHidden(course.code)) {
              return `<div class="card slot-hidden"><div class="row spread"><div><strong>${esc(course.code)} · ${esc(course.title)}</strong><p class="small muted">Hidden in Settings. Restore it to see tonight's section.</p></div><button class="btn btn-sm" data-action="goto-settings">Restore</button></div></div>`;
            }
            const section = chosenSection(course);
            return sessionCard(course, section, slot);
          }).join("")}
        </div>
      </div>` : ""}
      <div class="card mt-3">
        <div class="card-head">
          <div>
            <h3>3-2-1 recap · 10 minutes</h3>
            <p class="card-sub">Write this at 22:50. It is the highest-value part of the night.</p>
          </div>
          <span class="badge ${recap.a || recap.b || recap.q || recap.diagram ? "badge-done" : ""}">${recap.a || recap.b || recap.q || recap.diagram ? "Saved" : "Not saved"}</span>
        </div>
        <form data-form="recap">
          <div class="form-grid">
            <div class="field">
              <label>${firstCourse ? esc(firstCourse.code) : "Course A"} — 3 ideas</label>
              <textarea name="a" placeholder="One idea per line. No notes.">${esc(recap.a || "")}</textarea>
            </div>
            <div class="field">
              <label>${secondCourse ? esc(secondCourse.code) : "Course B"} — 3 ideas</label>
              <textarea name="b" placeholder="One idea per line. No notes.">${esc(recap.b || "")}</textarea>
            </div>
            <div class="field full">
              <label>2 questions I still cannot answer</label>
              <textarea name="q" placeholder="These become tomorrow's first review items.">${esc(recap.q || "")}</textarea>
            </div>
            <div class="field full">
              <label>1 diagram or formula to redraw tomorrow</label>
              <textarea name="diagram" placeholder="Name it precisely: e.g. the 100-unit radiation budget.">${esc(recap.diagram || "")}</textarea>
            </div>
          </div>
          <button class="btn btn-primary btn-sm mt-1" type="submit">Save 3-2-1 recap</button>
        </form>
      </div>
      ${new Date().getDay() === 0 ? `<div class="notice mt-2"><strong>Sunday review:</strong> 19:30–20:00 is the 30-minute weekly review. Open the Review tab and start there.</div>` : ""}
    `;
  }

  // ---------- Timetable ----------

  function slotCell(day, index) {
    const slots = day.slots || [];
    const slot = slots[index];
    if (!slot) return `<span class="slot-empty">—</span>`;
    const course = courseByCode.get(slot.course);
    if (!course) return `<span class="slot-empty">${esc(slot.course)} (no data)</span>`;
    return `<button type="button" class="slot ${isHidden(course.code) ? "slot-hidden" : ""}" style="--course-color:${esc(course.color)}" data-action="select-course" data-course="${esc(course.code)}">
      <span class="slot-code">${esc(course.code)}</span>
      <span class="slot-name">${esc(course.short || course.title)}</span>
      <span class="slot-time">${esc(slot.time || "")}${isHidden(course.code) ? " · hidden" : ""}</span>
    </button>`;
  }

  function renderTimetable() {
    const root = A.$("#view-timetable");
    if (!root) return;
    const currentDay = new Date().getDay();
    root.innerHTML = `
      <div class="page-head">
        <div>
          <div class="eyebrow">Weekly rhythm</div>
          <h2 id="timetable-heading">The 14-slot timetable</h2>
          <p>Monday to Saturday: 21:00 and 22:00. Sunday: 20:00 and 21:00. The 22:50 recap is protected.</p>
        </div>
        <div class="row">
          <button class="btn btn-sm" data-action="open-timetable-print">Printable timetable</button>
          <button class="btn btn-sm btn-primary" data-action="open-print">Full printable pack</button>
        </div>
      </div>
      <div class="week-scroll">
        <table class="week-table">
          <thead>
            <tr><th>Day</th><th>Power block A</th><th>Power block B</th><th>22:50–23:00</th></tr>
          </thead>
          <tbody>
            ${(DATA.timetable || []).map(day => `<tr class="${Number(day.dayIndex) === currentDay ? "today-row" : ""}">
              <td class="day-cell">${esc(day.day)}<small>${esc(day.theme || "")}</small></td>
              <td>${slotCell(day, 0)}</td>
              <td>${slotCell(day, 1)}</td>
              <td><span class="small muted">3-2-1 recap</span><br><span class="tiny faint">No new content</span></td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="card mt-3">
        <div class="card-head">
          <div><h3>Bridge map</h3><p class="card-sub">Every practical is fed by theory. Every theory block is tested by a practical.</p></div>
        </div>
        <div class="grid grid-2">
          ${(DATA.bridges || []).map(bridge => `<div class="bridge-card">
            <div class="pair"><span>${esc(bridge.theory)}</span><span class="arrow">↔</span><span>${esc(bridge.practical)}</span><span class="badge">${esc(bridge.subject)}</span></div>
            <p class="small muted">${esc(bridge.description || "")}</p>
            <p class="small mt-1"><strong>Loop:</strong> ${esc(bridge.loop || "")}</p>
            <div class="link-question mt-1"><span class="label">Link question</span>${esc(bridge.linkQuestion || "")}</div>
          </div>`).join("")}
        </div>
      </div>
      <div class="grid grid-2 mt-2">
        <div class="card">
          <h3>Nightly block</h3>
          <div class="stack mt-1">
            ${(META.phasePlan || []).map(phase => `<div class="row spread"><div><strong>${esc(phase.name)}</strong> <span class="small muted">${esc(phase.prompt || "")}</span></div><span class="badge">${esc(phase.minutes)} min</span></div>`).join("")}
          </div>
        </div>
        <div class="card">
          <h3>Weekly non-negotiables</h3>
          <ul class="checklist mt-1">
            <li>10-minute morning recall, every day.</li>
            <li>One past paper per course per week.</li>
            <li>Sunday 19:30–20:00 weekly review; 30 minutes.</li>
            <li>Sleep by 23:30. Memory consolidation is part of the plan.</li>
            <li>Log every error; errors are the syllabus you actually need.</li>
          </ul>
        </div>
      </div>
    `;
  }

  // ---------- Courses ----------

  function renderCourses() {
    const root = A.$("#view-courses");
    if (!root) return;
    const s = state();
    const query = (s.courseQuery || "").trim().toLowerCase();
    const sidebarCourses = A.orderedCourses.filter(course => {
      if (!query) return true;
      return `${course.code} ${course.title} ${course.subject || ""}`.toLowerCase().includes(query);
    });
    if (!s.selectedCourse || !courseByCode.has(s.selectedCourse)) {
      s.selectedCourse = (sidebarCourses[0] || A.orderedCourses[0] || {}).code || null;
    }
    const selected = courseByCode.get(s.selectedCourse);
    const openId = selected && s.uiOpenSection && selected.sections.some(sec => sec.id === s.uiOpenSection)
      ? s.uiOpenSection
      : (selected && selected.sections[0] ? selected.sections[0].id : null);

    root.innerHTML = `
      <div class="page-head">
        <div>
          <div class="eyebrow">Course library</div>
          <h2 id="courses-heading">Everything you need to learn</h2>
          <p>Select a course. Each section has the must-know list, terms, diagrams, exam questions, model answers, traps and the theory-practical bridge.</p>
        </div>
        <button class="btn btn-sm" data-action="open-print">Printable full pack</button>
      </div>
      <div class="course-layout">
        <aside class="course-sidebar card">
          <div class="field">
            <label for="courseSearch">Find a course</label>
            <input id="courseSearch" type="search" value="${esc(s.courseQuery || "")}" placeholder="Code, title or subject">
          </div>
          <div class="course-list mt-2">
            ${sidebarCourses.length ? sidebarCourses.map(course => {
              const p = progressOf(course);
              return `<button type="button" class="course-item ${course.code === s.selectedCourse ? "active" : ""}" data-action="select-course" data-course="${esc(course.code)}">
                <span class="course-dot" style="background:${esc(course.color)}"></span>
                <span style="min-width:0"><span class="code">${esc(course.code)}${isHidden(course.code) ? " · hidden" : ""}</span><span class="name">${esc(course.short || course.title)}</span></span>
                <span class="mini-bar"><span style="width:${p.pct}%;background:${esc(course.color)}"></span></span>
              </button>`;
            }).join("") : `<p class="small muted">No course matches that search.</p>`}
          </div>
        </aside>
        <div class="course-main">
          ${selected ? renderCourseDetail(selected, openId) : `<div class="empty"><strong>No course data</strong>Add a course file in src/data.</div>`}
        </div>
      </div>
    `;
  }

  function renderCourseDetail(course, openId) {
    const s = state();
    const p = progressOf(course);
    const avg = avgConfidence(course);
    return `<div class="course-banner" style="--course-color:${esc(course.color)}">
      <div class="card-head">
        <div>
          <div class="row">
            <span class="course-dot" style="background:${esc(course.color)}"></span>
            <strong>${esc(course.code)}</strong>
            ${kindBadge(course.kind)}
            ${statusBadge(course)}
            ${isHidden(course.code) ? `<span class="badge badge-danger">Hidden</span>` : ""}
          </div>
          <h2>${esc(course.title)}</h2>
          <p class="card-sub">${esc(course.source || "")}</p>
        </div>
        <div class="card-actions">
          <span class="pill">${course.credits} credits</span>
          <span class="pill">CA ${esc(course.assessment.ca)}% · Exam ${esc(course.assessment.exam)}%</span>
        </div>
      </div>
      ${course.note ? `<div class="notice mt-1"><strong>Note:</strong> ${esc(course.note)}</div>` : ""}
      <div class="grid grid-2 mt-2">
        <div>
          <div class="row spread"><span class="small muted">Sections completed</span><strong>${p.done}/${p.total} · ${p.pct}%</strong></div>
          <div class="progress mt-1"><span style="width:${p.pct}%"></span></div>
          <div class="small muted mt-1">Average confidence: ${avg ? avg.toFixed(1) : "—"} / 5</div>
        </div>
        <div class="bridge-grid">
          <div class="bridge-box"><span class="label">Bridge in</span>${esc(course.bridge.in || "")}</div>
          <div class="bridge-box"><span class="label">Bridge out</span>${esc(course.bridge.out || "")}</div>
        </div>
      </div>
    </div>
    <div class="mt-2">
      ${course.sections.map(section => `<details class="accordion" id="section-${esc(safeId(section.id))}" ${section.id === openId ? "open" : ""}>
        <summary>
          <span class="acc-title">${esc(section.title)}</span>
          ${priorityBadge(section.priority)}
          ${section.provisional ? `<span class="badge badge-provisional">Provisional</span>` : ""}
          ${s.completed[section.id] ? `<span class="badge badge-done">Done</span>` : ""}
          <span class="tiny muted nowrap">Conf ${Number(s.confidence[section.id]) || "—"}/5</span>
        </summary>
        <div class="acc-body">${A.sectionBody(section, course)}</div>
      </details>`).join("")}
    </div>`;
  }

  A.renderToday = renderToday;
  A.renderTimetable = renderTimetable;
  A.renderCourses = renderCourses;
})();
