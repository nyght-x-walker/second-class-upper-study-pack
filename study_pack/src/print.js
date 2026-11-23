(function () {
  "use strict";

  const DATA = window.STUDY_DATA || {};
  const META = DATA.meta || {};
  const esc = value =>
    String(value == null ? "" : value).replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));

  const courseByCode = new Map((DATA.courses || []).map(course => [course.code, course]));
  const scheduledCodes = [];
  (DATA.timetable || []).forEach(day => {
    (day.slots || []).forEach(slot => {
      if (!scheduledCodes.includes(slot.course)) scheduledCodes.push(slot.course);
    });
  });
  const courses = [
    ...scheduledCodes.map(code => courseByCode.get(code)).filter(Boolean),
    ...(DATA.courses || []).filter(course => !scheduledCodes.includes(course.code))
  ];

  function assessment(course) {
    return course.assessment || {
      ca: course.kind === "practical" ? 60 : 40,
      exam: course.kind === "practical" ? 40 : 60
    };
  }

  function kindLabel(kind) {
    if (kind === "practical") return "Practical";
    if (kind === "skills") return "Skills";
    return "Theory";
  }

  function statusLabel(status) {
    if (status === "full") return "Full materials";
    if (status === "partial") return "Partial materials";
    return "Provisional";
  }

  function statusClass(status) {
    if (status === "full") return "badge-core";
    if (status === "partial") return "badge-support";
    return "badge-provisional";
  }

  function priorityClass(priority) {
    if (priority === "core") return "badge-core";
    if (priority === "support") return "badge-support";
    return "";
  }

  function question(q) {
    if (Array.isArray(q)) return { q: q[0] || "", a: q[1] || "", type: q[2] || "Question" };
    if (typeof q === "string") return { q, a: "", type: "Question" };
    return { q: q.q || "", a: q.a || "", type: q.type || "Question" };
  }

  function renderQuestion(q, index) {
    const item = question(q);
    return `<div class="q">
      <div class="q-text">${index + 1}. ${esc(item.q)} <span class="q-type">${esc(item.type)}</span></div>
      <div class="answer"><span class="label">Model answer</span>${esc(item.a || "No model answer supplied. Write your own and check the source.")}</div>
    </div>`;
  }

  function renderSection(section, index, course) {
    const bridgeIn = section.bridgeIn || (course.bridge && course.bridge.in) || "";
    const bridgeOut = section.bridgeOut || (course.bridge && course.bridge.out) || "";
    const linkQuestion = section.linkQuestion || (course.bridge && course.bridge.linkQuestion) || "";
    return `<div class="section">
      <div class="section-head">
        <div>
          <h3>${index + 1}. ${esc(section.title)}</h3>
          <div class="unit">${esc(section.unit || "")}${section.source ? ` · ${esc(section.source)}` : ""}</div>
        </div>
        <div class="section-tags">
          <span class="badge ${priorityClass(section.priority)}">${esc(section.priority || "support")}</span>
          ${section.provisional ? `<span class="badge badge-provisional">Provisional</span>` : ""}
        </div>
      </div>
      <h4>Must know</h4>
      <ul class="must-list">${(section.mustKnow || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>
      ${(section.terms || []).length ? `<h4>Key terms</h4><div class="term-row">${section.terms.map(term => `<span class="term">${esc(term)}</span>`).join("")}</div>` : ""}
      ${(section.diagrams || []).length ? `<h4>Diagrams to draw</h4><ul class="must-list">${section.diagrams.map(item => `<li>${esc(item)}</li>`).join("")}</ul>` : ""}
      <h4>Exam questions</h4>
      ${(section.questions || []).map((q, i) => renderQuestion(q, i)).join("")}
      ${section.trap ? `<div class="trap"><strong>Exam trap:</strong> ${esc(section.trap)}</div>` : ""}
      <div class="course-bridge">
        <div class="bridge"><span class="label">Bridge in</span>${esc(bridgeIn)}</div>
        <div class="bridge"><span class="label">Bridge out</span>${esc(bridgeOut)}</div>
      </div>
      ${linkQuestion ? `<div class="link-q"><span class="label">Link question · theory ↔ practical</span>${esc(linkQuestion)}</div>` : ""}
      <h4>Your five-line answer</h4>
      <div class="notes-lines"></div>
    </div>`;
  }

  function renderCourse(course) {
    const a = assessment(course);
    const core = (course.sections || []).filter(section => section.priority === "core").length;
    return `<section class="course-block">
      <div class="course-head">
        <div class="code-line">
          <span class="course-code">${esc(course.code)}</span>
          <span class="badge">${esc(kindLabel(course.kind))}</span>
          <span class="badge ${statusClass(course.status)}">${esc(statusLabel(course.status))}</span>
          <span class="badge">${esc(course.sections.length)} sections</span>
          <span class="badge">${esc(core)} core</span>
        </div>
        <h2>${esc(course.title)}</h2>
        <p class="source">${esc(course.source || "")}</p>
        ${course.note ? `<div class="note"><strong>Note:</strong> ${esc(course.note)}</div>` : ""}
        <div class="course-facts">
          <div><span class="label">Credits</span>${esc(course.credits || 2)}</div>
          <div><span class="label">CA / exam</span>${esc(a.ca)}% / ${esc(a.exam)}%</div>
          <div><span class="label">Sections</span>${esc(course.sections.length)}</div>
          <div><span class="label">Bridge</span>${esc(course.partner || "—")}</div>
        </div>
        <div class="course-bridge">
          <div class="bridge"><span class="label">Bridge in</span>${esc((course.bridge && course.bridge.in) || "")}</div>
          <div class="bridge"><span class="label">Bridge out</span>${esc((course.bridge && course.bridge.out) || "")}</div>
        </div>
      </div>
      ${(course.sections || []).map((section, index) => renderSection(section, index, course)).join("")}
    </section>`;
  }

  function slotHtml(day, index) {
    const slot = (day.slots || [])[index];
    if (!slot) return `<span class="tiny">—</span>`;
    const course = courseByCode.get(slot.course);
    return `<strong>${esc(slot.course)}</strong><br>${course ? esc(course.short || course.title) : ""}<br><span class="tiny">${esc(slot.time || "")}</span>`;
  }

  function renderTimetablePage() {
    return `<section class="timetable-page">
      <div class="section-title">
        <div>
          <div class="kicker" style="font-size:8pt;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#0f5f58">Weekly rhythm</div>
          <h2>The 14-slot timetable</h2>
        </div>
        <div class="meta">Nightly: one 50-minute block per course.<br>22:50–23:00 is the 3-2-1 recap.</div>
      </div>
      <div class="intro-box">
        <strong>The non-negotiable rhythm:</strong> 10-minute morning recall before notes; two 50-minute blocks at night; a 10-minute break; a 3-2-1 recap before sleep. Sunday adds a 30-minute weekly review at 19:30. The timetable is a floor, not a ceiling: missed blocks do not move; they are recovered in the Sunday review.
      </div>
      <table>
        <thead><tr><th style="width:26mm">Day</th><th>Power block A</th><th>Power block B</th><th style="width:30mm">22:50–23:00</th></tr></thead>
        <tbody>${(DATA.timetable || []).map(day => `<tr>
          <td><strong>${esc(day.day)}</strong><br><span class="tiny">${esc(day.theme || "")}</span></td>
          <td>${slotHtml(day, 0)}</td>
          <td>${slotHtml(day, 1)}</td>
          <td class="tiny">3-2-1 recap<br>No new content</td>
        </tr>`).join("")}</tbody>
      </table>
      <div class="two-col">
        <div>
          <h3>The 50-minute block</h3>
          <table>
            <thead><tr><th>Phase</th><th style="width:16mm">Time</th><th>Action</th></tr></thead>
            <tbody>${(META.phasePlan || []).map(phase => `<tr><td><strong>${esc(phase.name)}</strong></td><td>${esc(phase.minutes)} min</td><td>${esc(phase.prompt || "")}</td></tr>`).join("")}</tbody>
          </table>
        </div>
        <div>
          <h3>Weekly non-negotiables</h3>
          <ul class="checklist">
            <li>10-minute morning recall, every day.</li>
            <li>One past paper per course per week.</li>
            <li>Sunday 19:30–20:00: 30-minute weekly review.</li>
            <li>Every missed question goes into the error log.</li>
            <li>Sleep by 23:30. Consolidation is part of the plan.</li>
          </ul>
        </div>
      </div>
      <h2 style="margin-top:5mm">Bridge map</h2>
      <p class="small">Every practical is fed by theory. Every theory block is tested by a practical. The link question is the bridge; answer it in both directions.</p>
      <table>
        <thead><tr><th style="width:18mm">Subject</th><th style="width:22mm">Theory</th><th style="width:22mm">Practical</th><th>Loop</th><th>Link question</th></tr></thead>
        <tbody>${(DATA.bridges || []).map(bridge => `<tr>
          <td><strong>${esc(bridge.subject)}</strong></td>
          <td>${esc(bridge.theory)}</td>
          <td>${esc(bridge.practical)}</td>
          <td class="small">${esc(bridge.loop || "")}</td>
          <td class="small">${esc(bridge.linkQuestion || "")}</td>
        </tr>`).join("")}</tbody>
      </table>
      <footer class="print-footer"><span>Second Class Upper Study Pack · Weekly timetable</span><span>Target: CGPA 3.00–3.59</span></footer>
    </section>`;
  }

  function renderTriagePage() {
    const rules = (DATA.triage || {}).rules || [];
    const plans = (DATA.triage || {}).plans || {};
    return `<section class="page-break">
      <div class="section-title">
        <div>
          <div style="font-size:8pt;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#0f5f58">If time runs short</div>
          <h2>Triage: protect the degree</h2>
        </div>
        <div class="meta">Full → Hybrid → Emergency<br>Set the exam date in the app.</div>
      </div>
      <div class="intro-box">
        <strong>Core rule:</strong> in the last 10 days, do not learn new low-yield content. Recall definitions, diagrams, formulas and model answers. CA is the safest mark; collect it first.
      </div>
      <h3>Rules</h3>
      <ol>${rules.map(rule => `<li>${esc(rule)}</li>`).join("")}</ol>
      <div class="three-col">
        <div class="avoid"><h3>Four weeks</h3><ol class="small">${(plans.fourWeeks || []).map(item => `<li>${esc(item)}</li>`).join("")}</ol></div>
        <div class="avoid"><h3>Two weeks</h3><ol class="small">${(plans.twoWeeks || []).map(item => `<li>${esc(item)}</li>`).join("")}</ol></div>
        <div class="avoid"><h3>One week</h3><ol class="small">${(plans.oneWeek || []).map(item => `<li>${esc(item)}</li>`).join("")}</ol></div>
      </div>
      <h3 style="margin-top:5mm">The must-know 20%</h3>
      <p class="small">Start with the core sections for every course. Add any section that appears in past papers or that the lecturer repeated in class.</p>
      <table>
        <thead><tr><th style="width:22mm">Course</th><th>Core sections to secure first</th></tr></thead>
        <tbody>${courses.map(course => `<tr>
          <td><strong>${esc(course.code)}</strong><br><span class="tiny">${esc(course.short || course.title)}</span></td>
          <td>${(course.sections || []).filter(section => section.priority === "core").slice(0, 3).map(section => esc(section.title)).join(" · ") || `<span class="tiny">No core sections marked.</span>`}</td>
        </tr>`).join("")}</tbody>
      </table>
      <div class="two-col">
        <div class="note">
          <h3>CA salvage</h3>
          <ul class="checklist">
            <li>List every CA item and its deadline.</li>
            <li>Submit the assignment before the quiz.</li>
            <li>Check the practical report rubric; format is free marks.</li>
            <li>Attend; participation and attendance are cheap marks.</li>
          </ul>
        </div>
        <div class="note">
          <h3>Past-paper protocol</h3>
          <ul class="checklist">
            <li>Do the paper closed-book, timed.</li>
            <li>Mark it with the rubric or model answers.</li>
            <li>Tag every lost mark to a section.</li>
            <li>Re-teach only the tagged sections.</li>
            <li>Redo the paper after 48 hours.</li>
          </ul>
        </div>
      </div>
      <footer class="print-footer"><span>Second Class Upper Study Pack · Triage</span><span>One timed paper beats another re-read.</span></footer>
    </section>`;
  }

  function renderIndexPage() {
    return `<section class="page-break">
      <div class="section-title">
        <div>
          <div style="font-size:8pt;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#0f5f58">The semester</div>
          <h2>Course index</h2>
        </div>
        <div class="meta">${esc(courses.length)} timetable entries<br>${esc(courses.reduce((sum, course) => sum + (course.sections || []).length, 0))} sections</div>
      </div>
      <p class="small">Credits and assessment weights are assumed unless the course outline says otherwise. Verify them with your department. “Partial” and “Provisional” mean the section content still needs checking against the lecturer's notes and past questions.</p>
      <table class="index-table">
        <thead><tr><th style="width:20mm">Code</th><th>Course</th><th style="width:18mm">Type</th><th style="width:13mm">Credits</th><th style="width:20mm">CA / exam</th><th style="width:20mm">Materials</th><th style="width:15mm">Sections</th></tr></thead>
        <tbody>${courses.map(course => {
          const a = assessment(course);
          return `<tr>
            <td><strong>${esc(course.code)}</strong></td>
            <td>${esc(course.title)}</td>
            <td>${esc(kindLabel(course.kind))}</td>
            <td>${esc(course.credits || 2)}</td>
            <td>${esc(a.ca)}% / ${esc(a.exam)}%</td>
            <td><span class="badge ${statusClass(course.status)}">${esc(statusLabel(course.status))}</span></td>
            <td>${esc((course.sections || []).length)}</td>
          </tr>`;
        }).join("")}</tbody>
      </table>
      <div class="intro-box">
        <strong>How to study a section:</strong> read the must-know list; close the page; write the five-line answer; answer the exam questions without notes; open the model answer; mark the gap; rate confidence 1–5; log any missed question in the error log. The app schedules the review at +2, +7, +21 and +45 days.
      </div>
      <footer class="print-footer"><span>Second Class Upper Study Pack · Course index</span><span>Verify credits and assessment weights.</span></footer>
    </section>`;
  }

  function renderCourses() {
    return courses.map(course => renderCourse(course)).join("");
  }

  function renderTrackersPage() {
    const rows = 14;
    return `<section class="page-break">
      <div class="section-title">
        <div>
          <div style="font-size:8pt;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#0f5f58">Write on this</div>
          <h2>Trackers</h2>
        </div>
        <div class="meta">Print this page separately if you want a fresh copy each week.</div>
      </div>
      <h3>Weekly study log</h3>
      <table>
        <thead><tr><th style="width:22mm">Date</th><th style="width:14mm">Day</th><th>Course A / section</th><th>Course B / section</th><th style="width:18mm">Minutes</th><th style="width:17mm">Recall?</th><th>Notes</th></tr></thead>
        <tbody>${Array.from({ length: rows }, () => `<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`).join("")}</tbody>
      </table>
      <div class="two-col">
        <div>
          <h3>Review log</h3>
          <table>
            <thead><tr><th>Date</th><th>Course / section</th><th>Conf.</th><th>Next</th></tr></thead>
            <tbody>${Array.from({ length: 10 }, () => `<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`).join("")}</tbody>
          </table>
        </div>
        <div>
          <h3>Past-paper log</h3>
          <table>
            <thead><tr><th>Course</th><th>Year</th><th>Score</th><th>Weak sections</th></tr></thead>
            <tbody>${Array.from({ length: 10 }, () => `<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
      <h3>CA tracker</h3>
      <table>
        <thead><tr><th>Course</th><th style="width:14mm">CA %</th><th>Assignment</th><th>Quiz</th><th>Mid-sem</th><th>Practical</th><th>Running total</th></tr></thead>
        <tbody>${courses.map(course => `<tr><td><strong>${esc(course.code)}</strong></td><td>${esc(assessment(course).ca)}%</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`).join("")}</tbody>
      </table>
      <div class="note">
        <h3>Weekly 30-minute review</h3>
        <ul class="checklist">
          <li><strong>5 min:</strong> brain-dump each course from the week.</li>
          <li><strong>10 min:</strong> read the error log; redo the missed questions.</li>
          <li><strong>10 min:</strong> one mixed past-paper section under time.</li>
          <li><strong>5 min:</strong> choose the three weakest sections for next week.</li>
        </ul>
      </div>
      <footer class="print-footer"><span>Second Class Upper Study Pack · Trackers</span><span>Weekly review: Sunday 19:30–20:00.</span></footer>
    </section>`;
  }

  const mode = document.body.dataset.printMode || "full";
  const root = document.getElementById("printRoot");
  if (root) {
    if (mode === "timetable") {
      root.innerHTML = renderTimetablePage();
    } else {
      root.innerHTML = renderTimetablePage() + renderTriagePage() + renderIndexPage() + renderCourses() + renderTrackersPage();
    }
  }
  const generated = document.getElementById("generatedDate");
  if (generated) generated.textContent = new Date().toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" });
})();
