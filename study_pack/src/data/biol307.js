window.STUDY_DATA.courses.push({
  code: "BIOL 307",
  title: "Research Methods",
  short: "Research Methods",
  kind: "skills",
  subject: "Biostatistics & Research Methods",
  partner: "BIOL 329",
  color: "#37474f",
  status: "provisional",
  credits: 2,
  assessment: { ca: 50, exam: 50 },
  source: "Provisional — built from standard research methods syllabus",
  note: "No lecture slides were supplied. These sections follow a standard research methods sequence; check against the lecturer's notes and your project guidelines.",
  bridge: {
    in: "Wednesday's BIOL 329 statistics session supplies the test you need for this design.",
    out: "Next Wednesday's statistics session applies to the design you build tonight.",
    linkQuestion: "A study compares exam scores between two teaching methods. State the study design, the appropriate statistical test, and two threats to validity."
  },
  sections: [
    {
      title: "Scientific method and types of research",
      source: "Provisional · standard syllabus",
      unit: "Module 1 · Foundations",
      priority: "core",
      provisional: true,
      mustKnow: [
        "The scientific method: observation → question → hypothesis → prediction → experiment → analysis → conclusion → communication.",
        "Hypothesis = testable, falsifiable explanation; prediction = expected observation if the hypothesis is true.",
        "Research types: descriptive, exploratory, explanatory, experimental, observational, qualitative, quantitative, mixed methods.",
        "Basic vs applied research; cross-sectional vs longitudinal.",
        "Good research is systematic, replicable, objective and ethical.",
        "The conclusion must follow from the data, not from expectation."
      ],
      terms: ["hypothesis", "prediction", "falsifiability", "descriptive research", "experimental research", "observational study", "qualitative", "quantitative", "mixed methods", "replication"],
      diagrams: ["Draw the scientific method cycle."],
      questions: [
        ["Distinguish a hypothesis from a prediction with an example.", "Hypothesis: 'Light intensity limits photosynthesis in this crop.' Prediction: 'Plants in 50% shade will have lower net photosynthesis than plants in full sun.' The hypothesis is the explanation; the prediction is the measurable expectation.", "Explain"],
        ["Why must a hypothesis be falsifiable?", "If no possible observation could contradict it, it cannot be tested or supported by evidence. Falsifiability separates science from opinion and allows cumulative progress.", "Evaluate"]
      ],
      trap: "Confusing hypothesis with prediction; treating correlation as causation.",
      bridgeIn: "Recall the statistical question from BIOL 329.",
      bridgeOut: "Wednesday's statistics: match the research type to the analysis.",
      linkQuestion: "How would you turn an observation into a testable hypothesis?"
    },
    {
      title: "Literature review and problem formulation",
      source: "Provisional · standard syllabus",
      unit: "Module 2 · Literature",
      priority: "core",
      provisional: true,
      mustKnow: [
        "A literature review synthesises existing knowledge, identifies gaps and justifies the study.",
        "Sources: peer-reviewed journals, books, reports, theses, databases (Google Scholar, PubMed, Web of Science).",
        "Evaluate sources for credibility, currency, methodology and bias.",
        "Use a reference manager and a consistent citation style (APA, Harvard, Vancouver).",
        "A good research question is specific, measurable, achievable, relevant and time-bound (SMART).",
        "Avoid plagiarism: cite, quote and paraphrase correctly.",
        "The problem statement explains what is unknown and why it matters."
      ],
      terms: ["literature review", "research gap", "peer review", "citation", "plagiarism", "research question", "SMART", "problem statement", "reference manager"],
      diagrams: ["Draw a literature-review funnel from broad topic to specific gap."],
      questions: [
        ["What makes a good research question?", "It is specific, measurable, achievable, relevant and time-bound, and it addresses a genuine gap. It identifies the population, variables and outcome. It should be answerable with available resources.", "Explain"],
        ["How would you evaluate the credibility of a journal article?", "Check peer review, journal reputation, author affiliations, methods, sample size, statistics, conflicts of interest and whether the conclusions follow from the data. Compare with other studies.", "Apply"]
      ],
      trap: "Reviewing literature without synthesising it; using non-credible sources; plagiarising by close paraphrase.",
      bridgeIn: "Recall the research question from the last session.",
      bridgeOut: "Wednesday's statistics: a vague question cannot be analysed.",
      linkQuestion: "How would you turn a broad topic into a SMART research question?"
    },
    {
      title: "Hypotheses, variables and experimental design",
      source: "Provisional · standard syllabus",
      unit: "Module 3 · Design",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Variables: independent (manipulated), dependent (measured), controlled (held constant), confounding (uncontrolled).",
        "Operational definitions make variables measurable.",
        "Experimental design: control group, treatment group, replication, randomisation and blocking.",
        "Randomisation reduces bias; replication estimates variability; blocking controls known sources of variation.",
        "Internal validity = confidence that the treatment caused the effect; external validity = generalisability.",
        "Common designs: completely randomised, randomised complete block, factorial, split-plot, repeated measures.",
        "Sample size and power should be planned before data collection.",
        "Bias types: selection, measurement, observer, recall, publication."
      ],
      terms: ["independent variable", "dependent variable", "confounding variable", "control", "replication", "randomisation", "blocking", "internal validity", "external validity", "power", "bias"],
      diagrams: ["Draw a controlled experiment with treatment, control, replication and randomisation."],
      questions: [
        ["Explain why randomisation and replication are both necessary in an experiment.", "Randomisation distributes uncontrolled variation evenly across groups, reducing bias. Replication provides an estimate of variability and increases precision. Without either, treatment effects cannot be separated from noise.", "Explain"],
        ["A study finds that students who eat breakfast score higher. Identify two possible confounders and how you would control them.", "Confounders: socioeconomic status, sleep, study habits, school quality. Control by random assignment, matching, measuring and adjusting for confounders, or restricting the sample. A randomised trial is stronger than an observational comparison.", "Apply"]
      ],
      trap: "Confusing independent and dependent variables; lacking a control; pseudo-replication.",
      bridgeIn: "Recall the SMART research question.",
      bridgeOut: "Wednesday's statistics: the design determines the test.",
      linkQuestion: "How would you design a field experiment to test a fertilizer treatment?"
    },
    {
      title: "Sampling, data collection, validity and ethics",
      source: "Provisional · standard syllabus",
      unit: "Module 4 · Data and ethics",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Population vs sample; a representative sample allows generalisation.",
        "Sampling methods: random, stratified, systematic, cluster, convenience, snowball, purposive.",
        "Probability sampling supports inference; non-probability sampling is weaker.",
        "Data collection tools: questionnaires, interviews, observation, measurements, experiments, secondary data.",
        "Validity = measures what it claims; reliability = consistency; accuracy = closeness to truth; precision = reproducibility.",
        "Ethics: informed consent, confidentiality, anonymity, no harm, voluntary participation, institutional approval.",
        "Data management: backup, version control, coding, cleaning, secure storage.",
        "Bias can enter at sampling, measurement, analysis and reporting."
      ],
      terms: ["population", "sample", "random sampling", "stratified sampling", "systematic sampling", "convenience sampling", "validity", "reliability", "informed consent", "confidentiality", "data cleaning"],
      diagrams: ["Draw the sampling design choices and their trade-offs."],
      questions: [
        ["Compare random, stratified and convenience sampling.", "Random sampling gives every individual an equal chance and supports inference. Stratified sampling divides the population into groups and samples within each, improving precision. Convenience sampling uses accessible individuals and is fast but biased.", "Explain"],
        ["Distinguish validity and reliability with an example.", "A scale that consistently reads 2 kg too heavy is reliable but not valid. A scale that gives different readings each time is unreliable and cannot be valid. Reliability is necessary but not sufficient for validity.", "Apply"]
      ],
      trap: "Confusing validity with reliability; using convenience samples and generalising; ignoring consent.",
      bridgeIn: "Recall experimental design and bias.",
      bridgeOut: "Wednesday's statistics: sample size and sampling affect power.",
      linkQuestion: "How would you select a representative sample of students for a survey?"
    },
    {
      title: "Analysis, interpretation, report writing and presentation",
      source: "Provisional · standard syllabus",
      unit: "Module 5 · Communication",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Descriptive statistics summarise data; inferential statistics test hypotheses and estimate uncertainty.",
        "Report: title, abstract, introduction, methods, results, discussion, conclusion, references.",
        "Results should present findings without interpretation; discussion interprets and compares with literature.",
        "Report effect sizes, confidence intervals and p-values; do not rely on p alone.",
        "Figures and tables must be self-explanatory, labelled and numbered.",
        "Citations and references must follow the required style.",
        "Oral presentation: clear structure, audience awareness, visual aids, time management, rehearsal.",
        "Acknowledge limitations and suggest future work."
      ],
      terms: ["descriptive statistics", "inferential statistics", "effect size", "confidence interval", "p-value", "abstract", "discussion", "limitation", "citation"],
      diagrams: ["Draw the structure of a scientific report."],
      questions: [
        ["Why should the discussion separate interpretation from results?", "Results are the observed findings; interpretation explains what they mean, compares with other studies and acknowledges limitations. Mixing them obscures the evidence and invites bias. Separation improves clarity and credibility.", "Explain"],
        ["A presenter shows a slide with 12 bullet points and reads it aloud. Suggest three improvements.", "Reduce to one key message per slide, use a figure or diagram, and speak to the audience rather than reading. Add a clear take-home message and rehearse timing. Use large fonts and high contrast.", "Apply"]
      ],
      trap: "Reporting p-values without effect sizes; overstating conclusions; ignoring limitations.",
      bridgeIn: "Recall validity, reliability and analysis.",
      bridgeOut: "Next Wednesday's statistics: report the test correctly.",
      linkQuestion: "How would you present a non-significant result honestly?"
    }
  ]
});

window.STUDY_DATA.courses.push({
  code: "BIOL 321",
  title: "Chordate Development & Evolution",
  short: "Chordate Development",
  kind: "theory",
  subject: "Chordate Development",
  partner: "BIOL 323",
  color: "#1565c0",
  status: "provisional",
  credits: 3,
  assessment: { ca: 40, exam: 60 },
  source: "Provisional — built from standard chordate development syllabus",
  note: "No lecture slides were supplied. The BIOL 323 practical outline covers the comparative anatomy; these sections add the developmental and evolutionary theory.",
  bridge: {
    in: "Thursday's BIOL 323 practical labelled the structures; tonight's theory explains their development.",
    out: "Next Thursday's practical applies tonight's developmental theory to specimens.",
    linkQuestion: "You dissect a tilapia and observe a two-chambered heart with a single circulation. Explain how this relates to its metabolic demand and gill respiration."
  },
  sections: [
    {
      title: "Gametogenesis and fertilization",
      source: "Provisional · standard syllabus",
      unit: "Module 1 · Early development",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Gametogenesis: spermatogenesis and oogenesis; meiosis halves chromosome number.",
        "Spermatogenesis produces four sperm; oogenesis produces one ovum and polar bodies.",
        "Fertilization restores diploidy, activates the egg and combines parental genomes.",
        "Blocks to polyspermy: fast electrical block and slow cortical granule reaction.",
        "Egg types: isolecithal, mesolecithal, telolecithal, centrolecithal; yolk affects cleavage.",
        "External vs internal fertilization; spawning vs copulation.",
        "Acrosome reaction and cortical reaction are key fertilization events."
      ],
      terms: ["gametogenesis", "spermatogenesis", "oogenesis", "meiosis", "fertilization", "polyspermy", "cortical granule", "acrosome", "yolk", "isolecithal", "telolecithal"],
      diagrams: ["Draw fertilization and the block to polyspermy."],
      questions: [
        ["Explain the two blocks to polyspermy.", "The fast block depolarizes the egg membrane immediately, preventing additional sperm fusion. The slow block involves cortical granules releasing enzymes that modify the zona pellucida, making it impenetrable. Together they ensure one sperm fertilizes the egg.", "Explain"],
        ["How does yolk distribution affect cleavage?", "Yolk is dense and slows cleavage. Isolecithal eggs cleave holoblastically and evenly; telolecithal eggs cleave meroblastically with a blastodisc; centrolecithal eggs cleave superficially. Yolk distribution therefore shapes early development.", "Apply"]
      ],
      trap: "Saying meiosis produces four ova; forgetting the slow block; confusing acrosome with cortical granule.",
      bridgeIn: "Recall the reproductive systems from comparative anatomy.",
      bridgeOut: "Next practical: identify gametes and early embryos.",
      linkQuestion: "How would you distinguish a fertilized from an unfertilized egg?"
    },
    {
      title: "Cleavage and early embryogenesis",
      source: "Provisional · standard syllabus",
      unit: "Module 2 · Cleavage",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Cleavage divides the zygote without growth; blastomeres become smaller.",
        "Patterns: holoblastic vs meroblastic; radial, spiral, bilateral, rotational.",
        "Stages: morula → blastula → gastrula.",
        "Blastocoel forms inside the blastula; blastopore marks gastrulation.",
        "Deuterostomes: blastopore becomes anus; protostomes: blastopore becomes mouth.",
        "Chordates are deuterostomes.",
        "Maternal determinants and cytoplasmic localization influence cell fate."
      ],
      terms: ["cleavage", "blastomere", "morula", "blastula", "blastocoel", "gastrula", "blastopore", "deuterostome", "protostome", "holoblastic", "meroblastic"],
      diagrams: ["Draw cleavage from zygote to blastula.", "Draw a gastrula with blastopore."],
      questions: [
        ["Compare holoblastic and meroblastic cleavage and give an example of each.", "Holoblastic cleavage divides the whole egg, as in frogs and mammals. Meroblastic cleavage divides only part of the egg because of dense yolk, as in birds and fish. Yolk distribution is the main reason.", "Explain"],
        ["Why is the deuterostome condition important for chordate classification?", "In deuterostomes the blastopore becomes the anus, and the mouth forms secondarily. Chordates share this with echinoderms, supporting a deep evolutionary relationship. It contrasts with protostomes.", "Apply"]
      ],
      trap: "Thinking cleavage increases embryo size; confusing blastula with gastrula; reversing deuterostome/protostome.",
      bridgeIn: "Recall fertilization and egg types.",
      bridgeOut: "Next practical: observe cleavage stages in prepared slides.",
      linkQuestion: "How would you identify a blastula under the microscope?"
    },
    {
      title: "Gastrulation and germ layers",
      source: "Provisional · standard syllabus",
      unit: "Module 3 · Gastrulation",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Gastrulation rearranges cells into three germ layers: ectoderm, mesoderm and endoderm.",
        "Ectoderm → epidermis and nervous system; mesoderm → muscle, skeleton, blood, kidneys, gonads; endoderm → gut lining and associated organs.",
        "Cell movements: invagination, involution, ingression, delamination, epiboly.",
        "The organizer (Spemann–Mangold organizer in amphibians) directs gastrulation and axis formation.",
        "Gastrulation establishes the body axes: anterior–posterior, dorsal–ventral, left–right.",
        "Chordate features arise from specific germ layers: notochord and somites from mesoderm; neural tube from ectoderm.",
        "Failure of gastrulation is lethal."
      ],
      terms: ["gastrulation", "ectoderm", "mesoderm", "endoderm", "invagination", "involution", "ingression", "epiboly", "organizer", "germ layer"],
      diagrams: ["Draw a gastrula and label the three germ layers.", "Draw the cell movements of gastrulation."],
      questions: [
        ["Explain how the three germ layers contribute to chordate structures.", "Ectoderm forms the neural tube and epidermis; mesoderm forms the notochord, somites, muscle, skeleton and circulatory system; endoderm forms the gut and respiratory lining. Organogenesis depends on interactions between them.", "Explain"],
        ["Why is the organizer important in development?", "It releases signals that pattern the surrounding tissue and establish the body axes. Transplanting it can induce a secondary axis. It coordinates gastrulation and neural induction.", "Apply"]
      ],
      trap: "Mixing up the germ layer derivatives; thinking gastrulation creates the blastula; ignoring axis formation.",
      bridgeIn: "Recall cleavage and blastula formation.",
      bridgeOut: "Next practical: identify germ layers in embryo sections.",
      linkQuestion: "How would you trace the origin of the notochord?"
    },
    {
      title: "Neurulation and organogenesis",
      source: "Provisional · standard syllabus",
      unit: "Module 4 · Organogenesis",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Neurulation forms the neural tube from the neural plate.",
        "Primary neurulation: neural plate folds and fuses; secondary neurulation: cavitation.",
        "Neural crest cells migrate and form peripheral neurons, melanocytes, facial cartilage and adrenal medulla.",
        "Somites form from paraxial mesoderm and give rise to vertebrae, ribs and skeletal muscle.",
        "Organogenesis: formation of organs through induction, differentiation, morphogenesis and apoptosis.",
        "Hox genes pattern the anterior–posterior axis.",
        "Chordate features: notochord induces neural tube and somites.",
        "Birth defects can arise from neural tube closure failure (e.g., spina bifida)."
      ],
      terms: ["neurulation", "neural plate", "neural tube", "neural crest", "somite", "organogenesis", "induction", "Hox gene", "apoptosis", "spina bifida"],
      diagrams: ["Draw neurulation from neural plate to neural tube.", "Draw neural crest migration."],
      questions: [
        ["Explain the role of the notochord in neurulation.", "The notochord releases signals such as Sonic hedgehog that induce the overlying ectoderm to form the neural plate. It also patterns the neural tube along the dorsal–ventral axis and induces somite formation.", "Explain"],
        ["Why are neural crest cells called a 'fourth germ layer'?", "They arise from the neural ectoderm but migrate widely and differentiate into many cell types, including peripheral neurons, glia, melanocytes and craniofacial cartilage. Their diversity and migratory behaviour resemble a separate germ layer.", "Evaluate"]
      ],
      trap: "Thinking the neural tube forms from mesoderm; forgetting neural crest derivatives; ignoring induction.",
      bridgeIn: "Recall gastrulation and germ layers.",
      bridgeOut: "Next practical: identify neural tube and somites in sections.",
      linkQuestion: "How would you detect a neural tube defect in a embryo?"
    },
    {
      title: "Metamorphosis, evolution and adaptations",
      source: "Provisional · standard syllabus",
      unit: "Module 5 · Evolution",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Metamorphosis transforms larva to adult; amphibians show dramatic metamorphosis (tadpole → frog).",
        "Thyroid hormones (T3/T4) drive amphibian metamorphosis.",
        "Neoteny: retention of larval features in a reproductive adult.",
        "Chordate evolution: notochord, dorsal nerve cord, pharyngeal slits, endostyle and post-anal tail.",
        "Vertebrate innovations: vertebral column, jaws, paired limbs, amniotic egg, endothermy.",
        "Adaptations to land: lungs, limbs, keratinized skin, amniotic egg, internal fertilization.",
        "Comparative development reveals evolutionary relationships (evo-devo)."
      ],
      terms: ["metamorphosis", "thyroid hormone", "neoteny", "amniotic egg", "endothermy", "evo-devo", "homology", "analogy", "adaptation"],
      diagrams: ["Draw amphibian metamorphosis.", "Draw a cladogram of vertebrate innovations."],
      questions: [
        ["Explain how thyroid hormones control amphibian metamorphosis.", "T3/T4 bind receptors and alter gene expression in different tissues, triggering tail resorption, limb growth, lung development and skin changes. The timing and concentration of hormone determine the transformation.", "Explain"],
        ["Compare the adaptations for life on land in amphibians and amniotes.", "Amphibians have moist permeable skin, lungs and external fertilization, so they depend on water for reproduction. Amniotes have keratinized skin, internal fertilization and the amniotic egg, which protects the embryo from desiccation. Amniotes are therefore more independent of water.", "Evaluate"]
      ],
      trap: "Thinking metamorphosis is only morphological; ignoring neoteny; confusing homology with analogy.",
      bridgeIn: "Recall organogenesis and chordate features.",
      bridgeOut: "Next practical: compare larval and adult specimens.",
      linkQuestion: "How would you test whether a salamander is neotenic?"
    }
  ]
});
