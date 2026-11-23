window.STUDY_DATA = window.STUDY_DATA || { courses: [] };

window.STUDY_DATA.meta = {
  title: "Second Class Upper Study System",
  subtitle: "UENR · BSc Biological Science · 2026/2027",
  school: "University of Energy and Natural Resources, Sunyani",
  target: "Second Class Upper (CGPA 3.00–3.59)",
  semester: "2026/2027",
  startDate: "2026-11-23",
  examDate: null,
  morningMinutes: 10,
  sundayReviewMinutes: 30,
  nightBlocks: [
    { start: "21:00", end: "21:50", label: "Power block A" },
    { start: "22:00", end: "22:50", label: "Power block B" },
    { start: "22:50", end: "23:00", label: "3-2-1 recap" }
  ],
  phasePlan: [
    { name: "Recall", minutes: 5, prompt: "Closed book. Write everything you remember from the last session on this course." },
    { name: "Learn", minutes: 20, prompt: "Read the slides with the section questions in mind. Make a one-page map. Do not highlight passively." },
    { name: "Test", minutes: 15, prompt: "Answer the 2–3 section questions without notes. Mark what you cannot answer." },
    { name: "Fix", minutes: 10, prompt: "Check answers, fix gaps, write a 5-line summary, and rate your confidence." }
  ]
};

window.STUDY_DATA.timetable = [
  {
    day: "Mon", dayIndex: 1, theme: "Plant metabolism + immunology practical",
    slots: [
      { time: "21:00–21:50", course: "BIOL 331", kind: "theory" },
      { time: "22:00–22:50", course: "BIOL 341", kind: "practical" }
    ]
  },
  {
    day: "Tue", dayIndex: 2, theme: "Mycology + molecular practical",
    slots: [
      { time: "21:00–21:50", course: "BIOL 335", kind: "theory" },
      { time: "22:00–22:50", course: "BIOL 345", kind: "practical" }
    ]
  },
  {
    day: "Wed", dayIndex: 3, theme: "Biostatistics + plant metabolism practical",
    slots: [
      { time: "21:00–21:50", course: "BIOL 329", kind: "skills" },
      { time: "22:00–22:50", course: "BIOL 333", kind: "practical" }
    ]
  },
  {
    day: "Thu", dayIndex: 4, theme: "Immunology + chordate practical",
    slots: [
      { time: "21:00–21:50", course: "BIOL 339", kind: "theory" },
      { time: "22:00–22:50", course: "BIOL 323", kind: "practical" }
    ]
  },
  {
    day: "Fri", dayIndex: 5, theme: "Chordate development + research methods",
    slots: [
      { time: "21:00–21:50", course: "BIOL 321", kind: "theory" },
      { time: "22:00–22:50", course: "BIOL 307", kind: "skills" }
    ]
  },
  {
    day: "Sat", dayIndex: 6, theme: "Molecular biology + ecology practical",
    slots: [
      { time: "21:00–21:50", course: "BIOL 343", kind: "theory" },
      { time: "22:00–22:50", course: "BIOL 327", kind: "practical" }
    ]
  },
  {
    day: "Sun", dayIndex: 0, theme: "Ecology + mycology practical",
    slots: [
      { time: "20:00–20:50", course: "BIOL 325", kind: "theory" },
      { time: "21:00–21:50", course: "BIOL 337", kind: "practical" }
    ]
  }
];

window.STUDY_DATA.bridges = [
  {
    id: "plant",
    subject: "Plant Metabolism",
    theory: "BIOL 331",
    practical: "BIOL 333",
    loop: "Mon 331 theory → Wed 333 practical → next Mon 331 theory",
    description: "Monday's theory explains Wednesday's practical; Wednesday's data tests Monday's theory.",
    linkQuestion: "Design an experiment to test the effect of light intensity on photosynthesis. Which metabolic pathway are you measuring, and what exactly would you measure?"
  },
  {
    id: "immunology",
    subject: "Immunology",
    theory: "BIOL 339",
    practical: "BIOL 341",
    loop: "Mon 341 practical → Thu 339 theory → next Mon 341 practical",
    description: "Monday's practical produces results; Thursday's theory explains the mechanisms behind them.",
    linkQuestion: "A patient's serum agglutinates at 1:160 in the Widal test. Explain what this result means immunologically and what follow-up test you would request."
  },
  {
    id: "mycology",
    subject: "Mycology",
    theory: "BIOL 335",
    practical: "BIOL 337",
    loop: "Tue 335 theory → Sun 337 practical → next Tue 335 theory",
    description: "Tuesday's theory gives the identification features; Sunday's practical uses them on real cultures.",
    linkQuestion: "You isolate a fungus with aseptate hyphae and zygospores. Which phylum is it, and how would you confirm it in the laboratory?"
  },
  {
    id: "molecular",
    subject: "Molecular Biology",
    theory: "BIOL 343",
    practical: "BIOL 345",
    loop: "Tue 345 practical → Sat 343 theory → next Tue 345 practical",
    description: "Tuesday's practical performs the technique; Saturday's theory explains the principle and the result.",
    linkQuestion: "You run a PCR and get no band. List three possible reasons and the control you would use to distinguish them."
  },
  {
    id: "chordates",
    subject: "Chordate Development",
    theory: "BIOL 321",
    practical: "BIOL 323",
    loop: "Thu 323 practical → Fri 321 theory → next Thu 323 practical",
    description: "Thursday's practical labels the specimen; Friday's theory explains the development behind the structure.",
    linkQuestion: "You dissect a tilapia and observe a two-chambered heart with a single circulation. Explain how this relates to its metabolic demand and gill respiration."
  },
  {
    id: "ecology",
    subject: "Ecology",
    theory: "BIOL 325",
    practical: "BIOL 327",
    loop: "Sat 327 practical → Sun 325 theory → next Sat 327 practical",
    description: "Saturday's practical collects the data; Sunday's theory interprets it; the next practical applies the theory.",
    linkQuestion: "Your quadrat data show higher species richness in a sacred grove than in a nearby farm. Explain two ecological reasons and one sampling limitation."
  },
  {
    id: "methods",
    subject: "Biostatistics & Research Methods",
    theory: "BIOL 329",
    practical: "BIOL 307",
    loop: "Wed 329 statistics → Fri 307 research methods → next Wed 329 statistics",
    description: "Wednesday's statistical test is chosen by Friday's study design; Friday's design dictates which test is valid.",
    linkQuestion: "A study compares exam scores between two teaching methods. State the study design, the appropriate statistical test, and two threats to validity."
  }
];

window.STUDY_DATA.triage = {
  rules: [
    "Secure CA first: assignments, practical reports, quizzes, attendance and participation are guaranteed marks.",
    "Aim for the must-know 20% that unlocks most past-paper questions before touching low-yield detail.",
    "One timed past paper per course per week is worth more than re-reading notes.",
    "In the last 7 days, do not learn new low-yield content. Recall diagrams, definitions and model answers.",
    "Sleep by 23:30. Memory consolidation is part of the study plan, not a luxury."
  ],
  plans: {
    fourWeeks: [
      "Week 1 — Diagnostic: one past paper per course; list CA items and deadlines; build must-know sheets; start the nightly timetable.",
      "Week 2 — Core coverage: one core section per course per night; past-paper questions for the same sections; fix weak spots on Sunday.",
      "Week 3 — Weak-spot attack: lowest-confidence sections first; one full timed paper per course; diagram bank.",
      "Week 4 — Final recall: definitions, diagrams, formula sheets; second timed paper; no new optional content."
    ],
    twoWeeks: [
      "Days 1–3 — Triage the 3 weakest courses; must-know sheets; CA salvage; one past paper each.",
      "Days 4–7 — Core sections for all courses; 2 past papers per day; error log.",
      "Days 8–11 — Weak spots + diagrams; timed papers under exam conditions.",
      "Days 12–14 — Final recall only: definitions, diagrams, model answers, sleep."
    ],
    oneWeek: [
      "Day 1 — Write must-know sheets for every course; collect past papers; calculate CA.",
      "Days 2–5 — One course per day; 2 past papers per day; learn only core sections.",
      "Day 6 — Mixed timed paper; review error log; redraw all diagrams.",
      "Day 7 — Light recall; formula/diagram sheet; sleep early."
    ]
  },
  mustKnowRule: "Core sections marked 'core' + any section that appears in past papers + anything the lecturer repeated in class."
};

window.STUDY_DATA.gradeScale = [
  { grade: "A", min: 80, point: 4.0 },
  { grade: "B+", min: 75, point: 3.5 },
  { grade: "B", min: 70, point: 3.0 },
  { grade: "C+", min: 65, point: 2.5 },
  { grade: "C", min: 60, point: 2.0 },
  { grade: "D+", min: 55, point: 1.5 },
  { grade: "D", min: 50, point: 1.0 },
  { grade: "E", min: 40, point: 0.0 },
  { grade: "F", min: 0, point: 0.0 }
];

window.STUDY_DATA.quickStart = [
  "Open the Today tab each morning: do the 10-minute recall before you touch your phone.",
  "At 21:00 start the 50-minute timer. Follow the four phases. Do not skip the closed-book test.",
  "At 22:50 write the 3-2-1 recap for both courses. This is the most important 10 minutes of the night.",
  "On Sunday at 19:30 do the 30-minute weekly review before the 20:00 ecology block.",
  "Once a week, log one past paper per course in the Triage tab and tag the sections you lost marks on.",
  "Set your exam date in Settings. The app will switch from Full Syllabus to Hybrid to Triage automatically."
];
