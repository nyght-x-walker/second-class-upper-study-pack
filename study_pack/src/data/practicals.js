window.STUDY_DATA.courses.push({
  code: "BIOL 333",
  title: "Plant Metabolism Practical",
  short: "Plant Metabolism Practical",
  kind: "practical",
  subject: "Plant Metabolism",
  partner: "BIOL 331",
  color: "#558b2f",
  status: "provisional",
  credits: 2,
  assessment: { ca: 60, exam: 40 },
  source: "Provisional — standard plant physiology practical syllabus",
  note: "No practical manual was supplied. These are the standard techniques; check the manual for exact protocols and calculations.",
  bridge: {
    in: "Monday's BIOL 331 theory explains the process you measure today.",
    out: "Next Monday's theory consolidates today's practical results.",
    linkQuestion: "Design an experiment to test the effect of light intensity on photosynthesis. Which metabolic pathway are you measuring, and what exactly would you measure?"
  },
  sections: [
    {
      title: "Measuring photosynthesis",
      source: "Provisional · standard practical",
      unit: "Practical 1",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Photosynthesis can be measured by CO2 uptake, O2 evolution, biomass change or dye reduction (DCPIP).",
        "Light intensity, CO2 concentration, temperature and water are limiting factors.",
        "Controls: dark control, boiled leaf control, no-CO2 control.",
        "Leaf discs floating assay: vacuum infiltrates discs, then measure rise with photosynthesis.",
        "DCPIP is a blue dye that turns colourless when reduced by electrons from chloroplasts.",
        "Report the rate per unit leaf area or chlorophyll, not just total change.",
        "Use replicates and control variables."
      ],
      terms: ["photosynthesis", "DCPIP", "leaf disc assay", "CO2 uptake", "O2 evolution", "limiting factor", "chlorophyll", "control"],
      diagrams: ["Draw the leaf disc assay setup.", "Draw a light-response curve."],
      questions: [
        ["Explain how the leaf disc assay measures photosynthesis.", "Leaf discs are infiltrated with bicarbonate solution so they sink. As photosynthesis produces O2, the discs become buoyant and float. The time to float or the number floating is a proxy for photosynthetic rate.", "Explain"],
        ["Why is a dark control necessary?", "It shows whether floating is due to photosynthesis rather than another process. In the dark, discs should remain sunk. If they float, the assay is confounded.", "Apply"]
      ],
      trap: "Forgetting the dark control; using a single leaf disc; not standardising leaf area.",
      bridgeIn: "Recall the light reactions and Calvin cycle.",
      bridgeOut: "Monday's theory: limiting factors and net photosynthesis.",
      linkQuestion: "How would you produce a light-response curve in the lab?"
    },
    {
      title: "Measuring respiration",
      source: "Provisional · standard practical",
      unit: "Practical 2",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Respiration can be measured by O2 consumption, CO2 release or heat production.",
        "Respirometer: organism in a sealed chamber; CO2 absorbent; pressure or volume change indicates O2 use.",
        "Germinating seeds have high respiration; dormant seeds have low respiration.",
        "Temperature and substrate affect respiration rate.",
        "Controls: dead seeds/boiled tissue, no organism, no CO2 absorbent.",
        "Respiratory quotient (RQ) = CO2 produced / O2 consumed; indicates substrate.",
        "Report rate per gram fresh mass or per seed."
      ],
      terms: ["respiration", "respirometer", "O2 consumption", "CO2 release", "germinating seed", "RQ", "control"],
      diagrams: ["Draw a simple respirometer.", "Draw a graph of respiration rate vs temperature."],
      questions: [
        ["Explain how a respirometer measures oxygen consumption.", "The organism consumes O2 and produces CO2; a CO2 absorbent removes the CO2, so the pressure or volume change reflects O2 uptake. The rate is calculated from the change over time.", "Explain"],
        ["Why do germinating seeds respire faster than dormant seeds?", "Germination requires energy and building blocks for growth, so metabolism is activated. Dormant seeds have low metabolic activity. The difference is visible in O2 consumption and heat production.", "Apply"]
      ],
      trap: "Forgetting the CO2 absorbent; not correcting for temperature; using too few seeds.",
      bridgeIn: "Recall glycolysis, Krebs cycle and oxidative phosphorylation.",
      bridgeOut: "Monday's theory: respiratory quotient and substrate use.",
      linkQuestion: "How would you calculate the RQ of germinating seeds?"
    },
    {
      title: "Chromatography and enzyme assays",
      source: "Provisional · standard practical",
      unit: "Practical 3",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Chromatography separates pigments or metabolites by differential migration between stationary and mobile phases.",
        "Paper/thin-layer chromatography: spot extract, develop in solvent, calculate Rf = distance solute / distance solvent.",
        "Plant pigments: chlorophyll a, chlorophyll b, carotene, xanthophylls; different Rf values.",
        "Enzyme assay: measure substrate loss or product formation over time.",
        "Controls: boiled enzyme, no substrate, no enzyme.",
        "Optical density/absorbance can quantify colour change.",
        "Standard curve converts absorbance to concentration."
      ],
      terms: ["chromatography", "stationary phase", "mobile phase", "Rf", "chlorophyll", "carotene", "enzyme assay", "absorbance", "standard curve"],
      diagrams: ["Draw a chromatogram and label the origin, solvent front and spots.", "Draw an enzyme assay time course."],
      questions: [
        ["Explain how Rf values are calculated and why they are useful.", "Rf = distance travelled by the solute ÷ distance travelled by the solvent front. It is a characteristic value for a compound under defined conditions, allowing identification by comparison with standards.", "Explain"],
        ["Why are boiled-enzyme and no-substrate controls needed in an enzyme assay?", "The boiled-enzyme control shows whether any colour change is non-enzymatic. The no-substrate control shows whether the enzyme or reagent alone produces signal. Both protect against false conclusions.", "Apply"]
      ],
      trap: "Forgetting to mark the solvent front; not running standards; ignoring temperature.",
      bridgeIn: "Recall pigments and enzyme kinetics.",
      bridgeOut: "Monday's theory: enzyme regulation and cofactors.",
      linkQuestion: "How would you identify an unknown pigment spot?"
    },
    {
      title: "Mineral nutrition and water culture",
      source: "Provisional · standard practical",
      unit: "Practical 4",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Water culture (hydroponics) grows plants in nutrient solution with or without specific elements.",
        "Essential elements: macro (N, P, K, Ca, Mg, S) and micro (Fe, Mn, Zn, Cu, B, Mo, Cl, Ni).",
        "Deficiency symptoms depend on nutrient mobility: mobile nutrients show in older leaves, immobile in younger leaves.",
        "Controls: complete nutrient solution; treatments each lacking one element.",
        "Maintain pH, aeration and volume; change solution regularly.",
        "Record symptoms, growth, dry mass and tissue nutrient content.",
        "Replicates and randomisation are needed."
      ],
      terms: ["hydroponics", "macronutrient", "micronutrient", "deficiency", "chlorosis", "necrosis", "mobile nutrient", "immobile nutrient", "complete solution"],
      diagrams: ["Draw a water-culture setup with treatments."],
      questions: [
        ["How would you design a water-culture experiment to identify a deficiency?", "Use replicate plants in complete solution and in solutions each lacking one element. Hold light, temperature and pH constant, renew solutions and record growth and symptoms. Compare with the complete control.", "Apply"],
        ["Why do immobile nutrient deficiencies appear in young leaves first?", "Immobile nutrients such as calcium and iron cannot be redistributed from older tissues. New growth is therefore the first to run short, so symptoms appear there. Mobile nutrients are moved from old to new leaves, so old leaves show symptoms first.", "Evaluate"]
      ],
      trap: "Using one plant per treatment; forgetting to aerate the solution; confusing deficiency with toxicity.",
      bridgeIn: "Recall mineral nutrition theory.",
      bridgeOut: "Monday's theory: nutrient function and deficiency diagnosis.",
      linkQuestion: "How would you confirm a suspected nutrient deficiency?"
    }
  ]
});

window.STUDY_DATA.courses.push({
  code: "BIOL 327",
  title: "Principles of Ecology II Practical",
  short: "Ecology Practical",
  kind: "practical",
  subject: "Ecology",
  partner: "BIOL 325",
  color: "#827717",
  status: "provisional",
  credits: 2,
  assessment: { ca: 60, exam: 40 },
  source: "Provisional — standard ecology practical syllabus",
  note: "No practical manual was supplied. These are the standard field techniques; check the manual for exact protocols, equipment and calculations.",
  bridge: {
    in: "Sunday's BIOL 325 theory interprets the data you collected today.",
    out: "Next Saturday's practical applies Sunday's theory to a new sampling design.",
    linkQuestion: "Your quadrat data show higher species richness in a sacred grove than in a nearby farm. Explain two ecological reasons and one sampling limitation."
  },
  sections: [
    {
      title: "Quadrats and transects",
      source: "Provisional · standard practical",
      unit: "Practical 1",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Quadrat sampling estimates density, frequency and cover of organisms in a defined area.",
        "Quadrat size and number depend on organism size and vegetation structure.",
        "Random placement avoids bias; stratified random sampling captures habitat variation.",
        "Transects sample along a line or belt to detect gradients and zonation.",
        "Point-intercept and line-intercept methods estimate cover.",
        "Record GPS, slope, aspect, disturbance and land use.",
        "Pilot sampling helps choose quadrat size and sample number."
      ],
      terms: ["quadrat", "transect", "density", "frequency", "cover", "random sampling", "stratified sampling", "line intercept", "zonation"],
      diagrams: ["Draw a quadrat layout and a belt transect."],
      questions: [
        ["Explain why random placement of quadrats matters.", "Random placement gives every part of the area an equal chance of being sampled, reducing observer bias. It allows valid estimates of density and cover. Convenient placement often over-samples accessible or interesting patches.", "Explain"],
        ["How would you choose quadrat size for a grassland study?", "Use a pilot study and a species-area curve: increase quadrat size until the number of new species levels off. The optimal size captures most species with manageable effort. For grasslands, 0.25–1 m² is common.", "Apply"]
      ],
      trap: "Placing quadrats only where vegetation is interesting; using too few samples; ignoring the edge.",
      bridgeIn: "Recall the theory of populations and communities.",
      bridgeOut: "Sunday's ecology theory: scale, sampling and inference.",
      linkQuestion: "How would you test whether a plant's distribution is random, clumped or uniform?"
    },
    {
      title: "Diversity indices and community analysis",
      source: "Provisional · standard practical",
      unit: "Practical 2",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Species richness = number of species; evenness = relative abundance distribution.",
        "Shannon–Wiener index (H') accounts for richness and evenness; higher H' = more diverse.",
        "Simpson's index (D) measures dominance; 1 − D is often reported as diversity.",
        "Diversity indices depend on sampling effort and quadrat size.",
        "Compare communities with rarefaction or standardised sample size.",
        "Multivariate methods (ordination, clustering) reveal community patterns.",
        "Always report the index, sample size and method."
      ],
      terms: ["species richness", "evenness", "Shannon–Wiener", "Simpson", "dominance", "rarefaction", "ordination", "clustering"],
      diagrams: ["Draw rank-abundance curves for a diverse and a dominated community."],
      questions: [
        ["Explain why two communities with the same richness can have different diversity.", "Richness counts species, but evenness describes how individuals are distributed among them. A community with one dominant species is less diverse than one with similar abundances, even if both have the same number of species.", "Explain"],
        ["Why should you not compare Shannon indices from samples of very different sizes?", "Diversity indices increase with sample size because more species are detected. Comparisons require standardised sampling effort or rarefaction. Otherwise differences may reflect effort, not ecology.", "Evaluate"]
      ],
      trap: "Comparing indices without standardising effort; confusing richness with diversity; ignoring evenness.",
      bridgeIn: "Recall the quadrat data and sampling design.",
      bridgeOut: "Sunday's theory: diversity, disturbance and succession.",
      linkQuestion: "Which index would you use to show the effect of disturbance on evenness?"
    },
    {
      title: "Biomass, productivity and decomposition",
      source: "Provisional · standard practical",
      unit: "Practical 3",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Biomass is the mass of living material per unit area; dry mass is preferred.",
        "Primary productivity is the rate of biomass production by producers.",
        "Harvest methods, allometry and remote sensing estimate biomass.",
        "Litterbags measure decomposition rate; mass loss over time is the key variable.",
        "Litter quality (C:N, lignin), temperature, moisture and decomposer community affect decomposition.",
        "Controls: initial litter mass, handling blanks, replicate bags.",
        "Report rates per unit time and area."
      ],
      terms: ["biomass", "dry mass", "primary productivity", "litterbag", "decomposition rate", "C:N ratio", "lignin", "allometry"],
      diagrams: ["Draw a litterbag decomposition curve."],
      questions: [
        ["Explain how a litterbag experiment measures decomposition.", "A known mass of litter is enclosed in a mesh bag and placed in the field. Bags are retrieved at intervals, dried and weighed. Mass loss over time estimates decomposition rate; mesh size controls access by organisms.", "Explain"],
        ["Why is dry mass used instead of fresh mass?", "Fresh mass varies with water content, which changes with weather and handling. Dry mass isolates the organic matter lost through decomposition. It makes samples comparable.", "Apply"]
      ],
      trap: "Using fresh mass; forgetting initial mass; losing litter during handling.",
      bridgeIn: "Recall the decomposition theory from BIOL 325.",
      bridgeOut: "Sunday's theory: nutrient cycling and energy flow.",
      linkQuestion: "How would you compare decomposition in a forest and a farm?"
    },
    {
      title: "Soil, water and microclimate measurements",
      source: "Provisional · standard practical",
      unit: "Practical 4",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Soil measurements: pH, moisture, organic matter, texture, temperature, infiltration.",
        "Soil pH affects nutrient availability and microbial activity.",
        "Soil moisture can be measured gravimetrically or with probes.",
        "Water measurements: temperature, pH, dissolved oxygen, turbidity, conductivity.",
        "Microclimate: air temperature, humidity, light, wind, soil temperature.",
        "Take repeated measurements at the same time of day and record metadata.",
        "Calibrate instruments and use replicates."
      ],
      terms: ["soil pH", "soil moisture", "organic matter", "infiltration", "dissolved oxygen", "turbidity", "conductivity", "microclimate", "calibration"],
      diagrams: ["Draw a microclimate measurement layout across a transect."],
      questions: [
        ["Explain why soil pH is important for plant growth.", "pH controls nutrient solubility and availability, microbial activity and root health. Most nutrients are most available near pH 6–7. Extreme pH can cause toxicity or deficiency.", "Explain"],
        ["Why should microclimate measurements be taken at the same time of day?", "Temperature, humidity and light change through the day. Comparing sites measured at different times confounds site differences with time differences. Standardised timing controls this variation.", "Apply"]
      ],
      trap: "Measuring once; not calibrating; comparing sites at different times.",
      bridgeIn: "Recall soil and microclimate theory.",
      bridgeOut: "Sunday's theory: environmental gradients and ecosystem function.",
      linkQuestion: "How would you show that a forest buffers temperature compared with a farm?"
    }
  ]
});

window.STUDY_DATA.courses.push({
  code: "BIOL 337",
  title: "Mycology Practical",
  short: "Mycology Practical",
  kind: "practical",
  subject: "Mycology",
  partner: "BIOL 335",
  color: "#004d40",
  status: "provisional",
  credits: 2,
  assessment: { ca: 60, exam: 40 },
  source: "Provisional — standard mycology practical syllabus",
  note: "No practical manual was supplied. These are the standard techniques; check the manual for media recipes, incubation conditions and safety rules.",
  bridge: {
    in: "Tuesday's BIOL 335 theory gives the identification features you use today.",
    out: "Next Tuesday's theory consolidates today's identifications.",
    linkQuestion: "You isolate a fungus with aseptate hyphae and zygospores. Which phylum is it, and how would you confirm it in the laboratory?"
  },
  sections: [
    {
      title: "Media preparation and culture",
      source: "Provisional · standard practical",
      unit: "Practical 1",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Culture media supply nutrients: carbon, nitrogen, minerals, vitamins and water.",
        "Common media: potato dextrose agar (PDA), Sabouraud dextrose agar (SDA), malt extract agar (MEA).",
        "Sterilisation by autoclaving; aseptic technique prevents contamination.",
        "Pour plates, streak plates and spread plates are basic isolation methods.",
        "Incubation temperature and time depend on the fungus.",
        "Record colony morphology: colour, texture, margin, elevation, reverse colour.",
        "Controls: unincubated plate, air-exposure plate."
      ],
      terms: ["culture medium", "PDA", "SDA", "MEA", "autoclave", "aseptic technique", "streak plate", "colony morphology", "incubation"],
      diagrams: ["Draw a streak plate pattern.", "Draw colony morphology terms."],
      questions: [
        ["Explain why aseptic technique is essential in mycology.", "Fungal spores are ubiquitous in air and on surfaces. Aseptic technique prevents contaminants from outgrowing the target and causing false results. It also protects the worker from pathogens.", "Explain"],
        ["How would you recognise a contaminated culture?", "Contaminants appear as unexpected colony colours, textures or growth rates, often spreading rapidly. Multiple colony types in one plate suggest contamination. Confirm with microscopy and subculture.", "Apply"]
      ],
      trap: "Opening plates unnecessarily; incubating too warm; confusing colony morphology with species identity.",
      bridgeIn: "Recall fungal nutrition and growth requirements.",
      bridgeOut: "Tuesday's theory: taxonomy and identification.",
      linkQuestion: "How would you obtain a pure culture from a mixed plate?"
    },
    {
      title: "Isolation and staining",
      source: "Provisional · standard practical",
      unit: "Practical 2",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Isolation: transfer a single colony or spore to fresh medium.",
        "Stains: lactophenol cotton blue for fungi; Gram stain for bacteria; India ink for capsules.",
        "Wet mounts show hyphae, spores and reproductive structures.",
        "Tease mounts separate hyphae without damaging them.",
        "Staining can distinguish septate vs aseptate hyphae and spore types.",
        "Record magnification, stain and observed structures.",
        "Safety: gloves, lab coat, eye protection; treat all cultures as potential pathogens."
      ],
      terms: ["isolation", "pure culture", "lactophenol cotton blue", "wet mount", "tease mount", "Gram stain", "India ink", "septate", "aseptate"],
      diagrams: ["Draw a wet mount setup and a stained hypha."],
      questions: [
        ["Why is lactophenol cotton blue used for fungi?", "It stains chitin and fungal cytoplasm blue, making hyphae and spores visible. It also preserves the specimen. It is not a differential stain like Gram stain.", "Explain"],
        ["How would you obtain a pure culture from a mixed fungal plate?", "Touch a single isolated colony with a sterile loop or needle and transfer it to fresh medium. Repeat until all colonies look identical. Confirm purity by colony morphology and microscopy.", "Apply"]
      ],
      trap: "Using too much stain; damaging hyphae in a tease mount; working without PPE.",
      bridgeIn: "Recall hyphal types and spore structures.",
      bridgeOut: "Tuesday's theory: taxonomy and diagnostic features.",
      linkQuestion: "How would you distinguish septate from aseptate hyphae in a wet mount?"
    },
    {
      title: "Microscopy and identification",
      source: "Provisional · standard practical",
      unit: "Practical 3",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Microscope parts and correct use: objective, condenser, diaphragm, focus.",
        "Start at low power, focus, then increase magnification; use immersion oil for 100×.",
        "Measure structures with an ocular micrometer or image analysis.",
        "Identification features: hyphal septation, spore shape and size, conidiophore structure, sexual structures.",
        "Use taxonomic keys and reference images.",
        "Record drawings with scale bars and labels.",
        "Molecular identification (ITS sequencing) confirms morphology."
      ],
      terms: ["objective", "condenser", "diaphragm", "immersion oil", "ocular micrometer", "conidiophore", "taxonomic key", "ITS", "scale bar"],
      diagrams: ["Draw a microscope and label its parts.", "Draw a labelled fungal structure with a scale bar."],
      questions: [
        ["Explain how you would measure a fungal spore under the microscope.", "Use an ocular micrometer calibrated with a stage micrometer, or capture an image with a known scale. Measure length and width of several spores and report mean and range. Include a scale bar in drawings.", "Explain"],
        ["Why is morphology alone sometimes insufficient for identification?", "Closely related species can look identical, and morphology can vary with environment. Molecular markers such as ITS provide sequence-based identification. Morphology and molecular data are complementary.", "Evaluate"]
      ],
      trap: "Using immersion oil with the wrong objective; forgetting to calibrate the micrometer; drawing without a scale.",
      bridgeIn: "Recall spore types and reproductive structures.",
      bridgeOut: "Tuesday's theory: classification and nomenclature.",
      linkQuestion: "How would you identify an unknown Penicillium-like mould?"
    },
    {
      title: "Spore counts and pathogenicity tests",
      source: "Provisional · standard practical",
      unit: "Practical 4",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Spore counts estimate inoculum density using a haemocytometer or dilution plating.",
        "Haemocytometer: count spores in defined squares and calculate concentration.",
        "Serial dilution and plating estimate colony-forming units (CFU).",
        "Pathogenicity tests: inoculate a healthy host, observe symptoms, re-isolate the pathogen (Koch's postulates).",
        "Controls: mock inoculation, sterile water, healthy host.",
        "Quantify disease incidence and severity.",
        "Ethics and biosafety: avoid releasing pathogens; dispose of cultures properly."
      ],
      terms: ["haemocytometer", "spore count", "CFU", "serial dilution", "pathogenicity", "Koch's postulates", "disease incidence", "disease severity", "mock inoculation"],
      diagrams: ["Draw a haemocytometer grid.", "Draw the Koch's postulates workflow."],
      questions: [
        ["Explain how a haemocytometer is used to estimate spore concentration.", "A known volume is loaded into the counting chamber. Spores are counted in defined squares, and the average is multiplied by the chamber factor and dilution to give spores per mL. Replicate counts improve accuracy.", "Explain"],
        ["How would you apply Koch's postulates to a suspected fungal plant pathogen?", "Isolate the fungus from diseased tissue, culture it, inoculate a healthy host, observe the same symptoms, then re-isolate the same fungus. Include mock-inoculated controls. This establishes causation.", "Apply"]
      ],
      trap: "Counting dead spores; forgetting dilution factors; skipping mock controls.",
      bridgeIn: "Recall spore dispersal and infection.",
      bridgeOut: "Tuesday's theory: plant pathology and disease cycles.",
      linkQuestion: "How would you quantify disease severity in a field trial?"
    }
  ]
});
