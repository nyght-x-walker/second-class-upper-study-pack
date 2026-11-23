window.STUDY_DATA.courses.push({
  code: "BIOL 339",
  title: "Immunology",
  short: "Immunology",
  kind: "theory",
  subject: "Immunology",
  partner: "BIOL 341",
  color: "#ad1457",
  status: "provisional",
  credits: 3,
  assessment: { ca: 40, exam: 60 },
  source: "Provisional — built from standard immunology syllabus",
  note: "No lecture slides were supplied. These sections follow a standard immunology sequence; check them against the lecturer's notes and past questions.",
  bridge: {
    in: "Monday's BIOL 341 practical produced serology results; tonight's theory explains them.",
    out: "Next Monday's practical tests the mechanisms you learn tonight.",
    linkQuestion: "A patient's serum agglutinates at 1:160 in the Widal test. Explain what this result means immunologically and what follow-up test you would request."
  },
  sections: [
    {
      title: "Innate immunity",
      source: "Provisional · standard syllabus",
      unit: "Module 1 · Innate immunity",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Innate immunity is non-specific, fast and present from birth.",
        "Barriers: skin, mucous membranes, cilia, stomach acid, normal microbiota.",
        "Cellular defences: macrophages, neutrophils, dendritic cells, NK cells, mast cells.",
        "Chemical defences: complement, cytokines, interferons, acute-phase proteins.",
        "Inflammation: redness, heat, swelling, pain and loss of function.",
        "Innate immunity recognises pathogen-associated molecular patterns (PAMPs) via pattern-recognition receptors (PRRs).",
        "It does not create immunological memory."
      ],
      terms: ["innate immunity", "PAMP", "PRR", "macrophage", "neutrophil", "NK cell", "complement", "cytokine", "inflammation"],
      diagrams: ["Draw the main innate immune barriers and cells."],
      questions: [
        ["Explain how inflammation helps clear an infection.", "Vasodilation brings blood and immune cells; increased permeability allows plasma proteins and phagocytes into the tissue; heat and pain limit use; cytokines coordinate the response. The result is pathogen removal and tissue repair.", "Explain"],
        ["Why is innate immunity insufficient on its own?", "It is non-specific and has no memory, so it cannot target new pathogens precisely or respond faster on re-exposure. Adaptive immunity provides specificity and memory.", "Evaluate"]
      ],
      trap: "Thinking innate immunity has memory; confusing inflammation with infection.",
      bridgeIn: "Recall the practical results from Monday's serology session.",
      bridgeOut: "Monday's practical: blood cells and agglutination are innate/adaptive interfaces.",
      linkQuestion: "How would you distinguish innate from adaptive responses in a blood sample?"
    },
    {
      title: "Adaptive immunity and lymphocytes",
      source: "Provisional · standard syllabus",
      unit: "Module 2 · Adaptive immunity",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Adaptive immunity is specific, slower on first exposure and has memory.",
        "Humoral immunity: B cells → plasma cells → antibodies; defends against extracellular pathogens and toxins.",
        "Cell-mediated immunity: T cells; helper T cells (CD4+) activate other cells; cytotoxic T cells (CD8+) kill infected cells.",
        "Antigen-presenting cells (dendritic cells, macrophages, B cells) present antigen on MHC.",
        "Clonal selection: antigen selects and expands specific lymphocyte clones.",
        "Primary response is slow and IgM-dominated; secondary response is faster, stronger and IgG-dominated.",
        "Tolerance prevents attack on self-antigens."
      ],
      terms: ["adaptive immunity", "B cell", "plasma cell", "antibody", "T cell", "CD4", "CD8", "MHC", "clonal selection", "memory cell"],
      diagrams: ["Draw the clonal selection and primary/secondary antibody response."],
      questions: [
        ["Explain the difference between humoral and cell-mediated immunity.", "Humoral immunity uses B cells and antibodies against extracellular pathogens and toxins. Cell-mediated immunity uses T cells against intracellular pathogens and abnormal cells. They cooperate through helper T cells and antigen presentation.", "Explain"],
        ["Why is the secondary immune response faster and stronger?", "Memory B and T cells from the first exposure expand rapidly on re-exposure. They produce more antibody, more quickly, with higher affinity and a class switch to IgG. This is the basis of vaccination.", "Apply"]
      ],
      trap: "Thinking antibodies kill cells directly; confusing helper and cytotoxic T cells.",
      bridgeIn: "Recall innate immunity and antigen presentation.",
      bridgeOut: "Next practical: ELISA and agglutination measure antibodies.",
      linkQuestion: "How would you measure a secondary antibody response in the lab?"
    },
    {
      title: "Antigens, antibodies and immunoglobulin classes",
      source: "Provisional · standard syllabus",
      unit: "Module 3 · Antigens and antibodies",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Antigen = molecule that can trigger an immune response; epitope = the part recognised by an antibody or T-cell receptor.",
        "Antibody structure: two heavy chains, two light chains, variable regions for binding, constant regions for effector function.",
        "Fab binds antigen; Fc mediates effector functions and is the basis of class differences.",
        "Five immunoglobulin classes: IgG, IgM, IgA, IgE, IgD.",
        "IgG: most abundant, crosses placenta, secondary response. IgM: first response, pentamer, agglutination. IgA: mucosal secretions. IgE: allergy and parasites. IgD: B-cell receptor.",
        "Antibody affinity vs avidity; monoclonal vs polyclonal antibodies.",
        "Antigen–antibody reactions: agglutination, precipitation, neutralisation, complement activation, opsonisation."
      ],
      terms: ["antigen", "epitope", "antibody", "Fab", "Fc", "IgG", "IgM", "IgA", "IgE", "IgD", "affinity", "avidity", "monoclonal", "polyclonal"],
      diagrams: ["Draw the Y-shaped antibody and label heavy/light chains, Fab and Fc.", "Draw the five immunoglobulin classes with their properties."],
      questions: [
        ["Compare IgM and IgG in structure, timing and function.", "IgM is a pentamer produced early in the primary response; it is good at agglutination and complement activation. IgG is a monomer, most abundant, produced later and in secondary responses; it crosses the placenta and opsonises pathogens.", "Explain"],
        ["Why does a monoclonal antibody give more reproducible ELISA results than a polyclonal antibody?", "A monoclonal antibody recognises a single epitope with consistent affinity, so batch-to-batch variability is low. Polyclonal antibodies recognise multiple epitopes and vary between animals and batches, increasing background and variability.", "Evaluate"]
      ],
      trap: "Saying IgM is the most abundant; confusing affinity with avidity; forgetting that IgE mediates allergy.",
      bridgeIn: "Recall B-cell activation and plasma cells.",
      bridgeOut: "Next practical: blood grouping uses IgM antibodies; ELISA uses specific antibodies.",
      linkQuestion: "Which immunoglobulin would you expect in a mucosal sample?"
    },
    {
      title: "Complement, MHC and antigen presentation",
      source: "Provisional · standard syllabus",
      unit: "Module 4 · Complement and MHC",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Complement is a cascade of plasma proteins that enhances immunity.",
        "Pathways: classical (antibody), alternative (pathogen surfaces), lectin (mannose).",
        "Complement functions: opsonisation (C3b), chemotaxis (C5a), membrane attack complex (C5b–C9) causing lysis.",
        "MHC class I is on nearly all nucleated cells and presents endogenous peptides to CD8+ T cells.",
        "MHC class II is on antigen-presenting cells and presents exogenous peptides to CD4+ T cells.",
        "MHC is highly polymorphic; it determines tissue compatibility and antigen presentation.",
        "Antigen processing: proteasome/ER for class I; endosome/lysosome for class II."
      ],
      terms: ["complement", "classical pathway", "alternative pathway", "lectin pathway", "opsonisation", "membrane attack complex", "MHC I", "MHC II", "antigen presentation", "polymorphism"],
      diagrams: ["Draw the three complement pathways converging on C3.", "Draw MHC I and MHC II presentation."],
      questions: [
        ["Explain how complement can destroy a pathogen without entering it.", "Complement proteins form a membrane attack complex that inserts into the pathogen membrane, creating a pore. Water and ions enter, the cell swells and lyses. Complement also opsonises and recruits phagocytes.", "Explain"],
        ["Why does MHC polymorphism matter for transplantation?", "MHC molecules differ between individuals; the immune system recognises foreign MHC as non-self. The more mismatched the MHC, the stronger the rejection response. Matching improves graft survival.", "Apply"]
      ],
      trap: "Mixing MHC I with CD4 and MHC II with CD8; thinking complement only lyses cells.",
      bridgeIn: "Recall antibody structure and effector functions.",
      bridgeOut: "Next practical: complement fixation and immunodiffusion demonstrate these interactions.",
      linkQuestion: "How would you detect complement-mediated lysis in a blood sample?"
    },
    {
      title: "Hypersensitivity and vaccines",
      source: "Provisional · standard syllabus",
      unit: "Module 5 · Clinical immunology",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Hypersensitivity = harmful immune response to an antigen.",
        "Type I: immediate IgE-mediated allergy (anaphylaxis, asthma, hay fever).",
        "Type II: antibody-mediated cytotoxic reactions (transfusion reactions, haemolytic disease of the newborn).",
        "Type III: immune-complex mediated (serum sickness, glomerulonephritis).",
        "Type IV: delayed T-cell mediated (tuberculin test, contact dermatitis).",
        "Vaccines: live attenuated, inactivated, subunit, toxoid, mRNA; they induce memory without causing disease.",
        "Herd immunity protects unvaccinated individuals when coverage is high.",
        "Adjuvants enhance vaccine immunogenicity."
      ],
      terms: ["hypersensitivity", "IgE", "anaphylaxis", "immune complex", "delayed hypersensitivity", "vaccine", "adjuvant", "herd immunity", "toxoid"],
      diagrams: ["Draw a table of the four hypersensitivity types with examples."],
      questions: [
        ["Classify the four types of hypersensitivity with one example each.", "Type I: IgE allergy/anaphylaxis. Type II: antibody-mediated cell destruction, e.g., transfusion reaction. Type III: immune-complex deposition, e.g., serum sickness. Type IV: delayed T-cell response, e.g., tuberculin test.", "Explain"],
        ["Explain how a vaccine produces immunity without causing the disease.", "It presents antigen in a non-virulent form, activating B and T cells and generating memory cells. On later exposure to the pathogen, the secondary response clears it quickly. Adjuvants and boosters strengthen the response.", "Apply"]
      ],
      trap: "Calling all allergies type I; thinking vaccines give immediate protection.",
      bridgeIn: "Recall antibody classes and T-cell responses.",
      bridgeOut: "Next practical: allergy testing and serology.",
      linkQuestion: "Why is the tuberculin test read after 48–72 hours?"
    },
    {
      title: "Autoimmunity, immunodeficiency, transplantation and tumour immunology",
      source: "Provisional · standard syllabus",
      unit: "Module 6 · Clinical immunology",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Autoimmunity = immune response against self-antigens; caused by tolerance failure.",
        "Examples: type 1 diabetes, rheumatoid arthritis, multiple sclerosis, systemic lupus erythematosus.",
        "Immunodeficiency can be primary (genetic) or secondary (HIV, malnutrition, drugs).",
        "Transplant rejection: hyperacute, acute and chronic; prevented by MHC matching and immunosuppression.",
        "Tumour immunology: immune surveillance, tumour antigens, immune evasion, immunotherapy (checkpoint inhibitors, CAR-T).",
        "Immunosuppression increases infection and cancer risk.",
        "Diagnosis uses autoantibodies, lymphocyte counts, functional tests and genetic tests."
      ],
      terms: ["autoimmunity", "tolerance", "immunodeficiency", "HIV", "transplant rejection", "immunosuppression", "tumour antigen", "checkpoint inhibitor", "CAR-T"],
      diagrams: ["Draw the balance between tolerance and autoimmunity."],
      questions: [
        ["Explain how failure of central or peripheral tolerance can cause autoimmunity.", "Central tolerance deletes strongly self-reactive lymphocytes in the thymus and bone marrow. Peripheral tolerance controls escapees through anergy, regulatory T cells and suppression. Failure of either allows self-reactive cells to attack tissues.", "Explain"],
        ["Why do transplant patients need lifelong immunosuppression, and what is the trade-off?", "The immune system recognises foreign MHC and attacks the graft. Immunosuppression prevents rejection but increases infection and cancer risk. The dose is balanced to protect the graft while preserving some immunity.", "Evaluate"]
      ],
      trap: "Thinking immunodeficiency always means AIDS; ignoring the infection risk of immunosuppression.",
      bridgeIn: "Recall MHC and T-cell activation.",
      bridgeOut: "Next practical: lymphocyte counts and antibody tests.",
      linkQuestion: "How would you distinguish primary from secondary immunodeficiency?"
    }
  ]
});

window.STUDY_DATA.courses.push({
  code: "BIOL 341",
  title: "Immunology Practical",
  short: "Immunology Practical",
  kind: "practical",
  subject: "Immunology",
  partner: "BIOL 339",
  color: "#6a1b9a",
  status: "provisional",
  credits: 2,
  assessment: { ca: 60, exam: 40 },
  source: "Provisional — standard immunology practical syllabus",
  note: "No practical manual was supplied. These are the standard techniques; check the manual for exact protocols and calculations.",
  bridge: {
    in: "Thursday's BIOL 339 theory explains the mechanisms behind today's results.",
    out: "Next Thursday's theory consolidates the practical findings.",
    linkQuestion: "A patient's serum agglutinates at 1:160 in the Widal test. Explain what this result means immunologically and what follow-up test you would request."
  },
  sections: [
    {
      title: "Blood grouping and agglutination",
      source: "Provisional · standard practical",
      unit: "Practical 1",
      priority: "core",
      provisional: true,
      mustKnow: [
        "ABO blood groups depend on A and B antigens on red cells and anti-A/anti-B antibodies in plasma.",
        "Rh factor: D antigen positive or negative; anti-D can cause haemolytic disease of the newborn.",
        "Agglutination occurs when antibodies cross-link antigens on red cells.",
        "Forward grouping tests cells with known antisera; reverse grouping tests serum with known cells.",
        "False negatives can occur with old cells, weak antisera or improper technique.",
        "Always record the reaction grade and control."
      ],
      terms: ["ABO", "Rh", "agglutination", "forward grouping", "reverse grouping", "anti-A", "anti-B", "anti-D"],
      diagrams: ["Draw an agglutination reaction and a negative reaction."],
      questions: [
        ["Explain why group O is called the universal donor for red cells.", "Group O red cells lack A and B antigens, so recipient antibodies do not bind them. Plasma still contains anti-A and anti-B, so whole blood is not universal; packed red cells are safer.", "Explain"],
        ["A forward grouping gives A but reverse grouping gives B. What should you do?", "Repeat both tests, check reagents and cell quality, and investigate a possible subgroup, disease or technical error. Do not report until resolved.", "Apply"]
      ],
      trap: "Confusing forward and reverse grouping; forgetting the Rh control.",
      bridgeIn: "Recall antigen–antibody reactions.",
      bridgeOut: "Thursday's theory: antibody structure and agglutination.",
      linkQuestion: "How would you confirm an ABO discrepancy?"
    },
    {
      title: "Widal test and serology",
      source: "Provisional · standard practical",
      unit: "Practical 2",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Widal test detects antibodies against Salmonella O and H antigens.",
        "Rising titre between acute and convalescent samples is more informative than a single titre.",
        "Agglutination titre = highest dilution showing visible agglutination.",
        "Prior infection, vaccination and cross-reacting infections can cause false positives.",
        "Interpretation depends on local endemicity and clinical context.",
        "Quality control and standardised antigens are essential."
      ],
      terms: ["Widal test", "titre", "O antigen", "H antigen", "agglutination", "convalescent serum", "false positive"],
      diagrams: ["Draw a serial dilution scheme for a Widal test."],
      questions: [
        ["Explain how a serial dilution produces a titre.", "The serum is diluted stepwise; each dilution is mixed with antigen. The titre is the reciprocal of the highest dilution that still shows visible agglutination. It estimates antibody concentration.", "Apply"],
        ["Why is a single Widal titre unreliable in an endemic area?", "Background antibodies from past exposure or vaccination are common, so a single positive titre may not indicate current infection. Paired sera showing a rise are more informative.", "Evaluate"]
      ],
      trap: "Reporting a single titre as diagnosis; ignoring local baseline titres.",
      bridgeIn: "Recall IgM and agglutination.",
      bridgeOut: "Thursday's theory: antibody kinetics.",
      linkQuestion: "How would you interpret a fourfold rise in titre?"
    },
    {
      title: "ELISA",
      source: "Provisional · standard practical",
      unit: "Practical 3",
      priority: "core",
      provisional: true,
      mustKnow: [
        "ELISA = enzyme-linked immunosorbent assay; uses an enzyme-labelled antibody and a substrate that changes colour.",
        "Direct ELISA detects antigen; indirect ELISA detects antibody; sandwich ELISA detects antigen between two antibodies.",
        "Steps: coat plate → block → add sample → add detection antibody → add enzyme conjugate → add substrate → read absorbance.",
        "Wash steps remove unbound reagents and reduce background.",
        "A standard curve converts absorbance to concentration.",
        "Controls: blank, negative and positive controls are essential."
      ],
      terms: ["ELISA", "direct ELISA", "indirect ELISA", "sandwich ELISA", "conjugate", "substrate", "absorbance", "standard curve", "blocking"],
      diagrams: ["Draw the sandwich ELISA layers."],
      questions: [
        ["Explain why washing is critical in ELISA.", "Washing removes unbound sample, antibodies and conjugate. Without it, non-specific binding raises background and gives false positives. Incomplete washing is a common source of error.", "Explain"],
        ["Why is a standard curve needed for quantitative ELISA?", "The assay measures absorbance, not concentration directly. A standard curve of known concentrations calibrates the relationship, allowing unknown samples to be interpolated within the linear range.", "Apply"]
      ],
      trap: "Forgetting controls; reading outside the linear range; insufficient washing.",
      bridgeIn: "Recall antibody specificity and enzyme conjugates.",
      bridgeOut: "Thursday's theory: antibody detection and quantification.",
      linkQuestion: "How would you validate an ELISA kit in your lab?"
    },
    {
      title: "Immunodiffusion and electrophoresis",
      source: "Provisional · standard practical",
      unit: "Practical 4",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Immunodiffusion: antigen and antibody diffuse through agar and form a visible precipitation line where they meet at equivalence.",
        "Radial immunodiffusion: antigen diffuses into antibody-containing gel; ring diameter is proportional to concentration.",
        "Electrophoresis separates proteins by charge and size in an electric field.",
        "Serum protein electrophoresis separates albumin, alpha, beta and gamma globulins.",
        "Abnormal bands can indicate infection, inflammation or myeloma.",
        "Controls and standard markers are needed for interpretation."
      ],
      terms: ["immunodiffusion", "precipitation", "equivalence", "radial immunodiffusion", "electrophoresis", "albumin", "globulin", "myeloma"],
      diagrams: ["Draw an Ouchterlony double diffusion pattern.", "Draw a serum protein electrophoresis pattern."],
      questions: [
        ["Explain the principle of the Ouchterlony double diffusion test.", "Antigen and antibody are placed in wells and diffuse through agar. Where they meet at optimal proportions (equivalence), they form a visible precipitation line. The pattern indicates identity, partial identity or non-identity.", "Explain"],
        ["What does a monoclonal band on serum electrophoresis suggest?", "A sharp, narrow band, usually in the gamma region, suggests a monoclonal immunoglobulin produced by a clonal plasma-cell disorder such as multiple myeloma. It should be confirmed with immunofixation.", "Apply"]
      ],
      trap: "Confusing immunodiffusion with ELISA; over-interpreting a single band.",
      bridgeIn: "Recall antigen–antibody precipitation.",
      bridgeOut: "Thursday's theory: immunoglobulin structure and clinical interpretation.",
      linkQuestion: "How would you confirm a suspected monoclonal band?"
    }
  ]
});
