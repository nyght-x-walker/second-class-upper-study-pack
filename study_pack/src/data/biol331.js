window.STUDY_DATA.courses.push({
  code: "BIOL 331",
  title: "Plant Metabolism",
  short: "Plant Metabolism",
  kind: "theory",
  subject: "Plant Metabolism",
  partner: "BIOL 333",
  color: "#2e7d32",
  status: "partial",
  credits: 3,
  assessment: { ca: 40, exam: 60 },
  source: "Lectures 1–2 (60 slides) + course description",
  note: "Lectures 1–2 are built from the lecturer's slides. Photosynthesis, respiration, nitrogen, lipid, protein, secondary metabolite and mineral nutrition sections are provisional and should be checked against later slides.",
  bridge: {
    in: "Wednesday's BIOL 333 practical produced the measurements you explain tonight.",
    out: "This Wednesday's practical applies tonight's theory to a plant measurement or assay.",
    linkQuestion: "Design an experiment to test the effect of light intensity on photosynthesis. Which metabolic pathway are you measuring, and what exactly would you measure?"
  },
  sections: [
    {
      title: "Metabolism foundations: catabolism, anabolism and ATP",
      source: "Slides 5–19",
      unit: "Lecture 1 · Foundations",
      priority: "core",
      mustKnow: [
        "Metabolism = all chemical reactions in cells that convert food into energy and synthesize new molecules.",
        "Catabolism = breakdown of large molecules, energy-yielding, exergonic, ATP-producing; examples: respiration, glycolysis.",
        "Anabolism = energy-requiring synthesis of new materials; endergonic, ATP-using; examples: photosynthesis, protein synthesis.",
        "Catabolic pathways converge to a few end products; anabolic pathways diverge to many biomolecules.",
        "Three stages of catabolism: large biomolecules → building blocks → acetyl-CoA → CO2, H2O, NH3 and ATP.",
        "ATP is the universal energy currency: adenine + ribose + three phosphate groups; ADP + Pi → ATP (phosphorylation).",
        "Metabolite = a substrate or reactant undergoing a metabolic reaction.",
        "Fuels for aerobic metabolism: carbohydrates, fats and amino acids."
      ],
      terms: ["metabolism", "catabolism", "anabolism", "exergonic", "endergonic", "ATP", "ADP", "phosphorylation", "metabolite", "acetyl-CoA"],
      diagrams: ["Draw the three stages of catabolism.", "Draw the ATP/ADP cycle and label the high-energy phosphate bond."],
      questions: [
        ["Classify cellular respiration, photosynthesis, glycolysis, conversion of amino acids to proteins, and conversion of nucleic acids to nucleotides as catabolic or anabolic. Justify each.", "Respiration, glycolysis and nucleic acid breakdown are catabolic (breakdown, energy release). Photosynthesis and amino acid → protein are anabolic (synthesis, energy input). Some reactions, like the Krebs cycle, are amphibolic.", "Apply"],
        ["Explain the three stages of catabolism and where ATP is produced.", "Stage I hydrolyses large biomolecules to building blocks. Stage II converts building blocks to acetyl-CoA. Stage III oxidizes acetyl-CoA in the citric acid cycle and oxidative phosphorylation, producing most ATP.", "Explain"],
        ["Why is ATP called the universal energy currency? Include its structure.", "ATP couples exergonic and endergonic reactions. It has adenine, ribose and three phosphates; hydrolysis of the terminal phosphate releases usable energy, and ADP can be rephosphorylated. This rechargeable cycle transfers energy within cells.", "Evaluate"]
      ],
      trap: "Saying anabolism does not need energy; confusing ATP with ADP; forgetting that catabolism also produces reducing equivalents (NADH, FADH2).",
      bridgeIn: "Recall the last practical measurement from BIOL 333 and what variable it changed.",
      bridgeOut: "This week's practical: identify which metabolic process your measurement reflects.",
      linkQuestion: "If you measure CO2 release from a leaf, which metabolic pathway are you observing?"
    },
    {
      title: "Metabolic rate and its measurement",
      source: "Slides 20–27",
      unit: "Lecture 1 · Foundations",
      priority: "core",
      mustKnow: [
        "Metabolic rate = rate at which an organism uses energy per unit time.",
        "Can be measured by energy value of food, oxygen consumption, heat production, or metabolic water produced.",
        "Standard/Basal Metabolic Rate (BMR): at rest, no activity, reduced physiological activity.",
        "Routine metabolic rate: minimal activity; average daily (field) metabolic rate over 24 h; active metabolic rate at maximum activity.",
        "Metabolic rate is related to body size; mass-specific rate is higher in small organisms.",
        "Factors affecting size/rate: phylogenetic inheritance, physiological design, mechanical design, habitat and selective pressures.",
        "Metabolic conformers change rate with ambient oxygen; regulators maintain rate under reduced oxygen.",
        "Normal metabolism is vital for health, growth, reproduction and survival."
      ],
      terms: ["metabolic rate", "BMR", "routine metabolic rate", "average daily metabolic rate", "active metabolic rate", "conformer", "regulator", "mass-specific rate"],
      diagrams: ["Draw a graph of metabolic rate vs body mass (log scale)."],
      questions: [
        ["Compare BMR, routine, average daily and active metabolic rate with examples.", "BMR is the minimum cost at complete rest; routine is the cost of normal quiet activity; average daily (field) rate integrates 24 h of activity; active rate is the maximum sustained cost during intense activity. Each answers a different question.", "Explain"],
        ["A small mammal has a higher mass-specific metabolic rate than a large mammal. Explain why.", "Small animals have a larger surface-area-to-volume ratio and lose heat faster, so they must oxidize fuel faster to maintain body temperature. Their mass-specific oxygen consumption is therefore higher.", "Apply"],
        ["Distinguish metabolic conformers and regulators. Which strategy is favoured in a variable environment?", "Conformers let metabolic rate follow ambient oxygen or temperature; regulators maintain rate using physiological adjustments. Regulation is favoured where oxygen or temperature fluctuates and activity must be maintained, but it is energetically costly.", "Evaluate"]
      ],
      trap: "Confusing BMR with routine metabolic rate; comparing whole-animal rates instead of mass-specific rates.",
      bridgeIn: "Recall ATP production and the fuels used in catabolism.",
      bridgeOut: "This week's practical: gas exchange or heat measurements estimate metabolic rate.",
      linkQuestion: "How would you estimate the metabolic rate of a germinating seed using a simple lab measurement?"
    },
    {
      title: "Enzymes, hormones and reaction types",
      source: "Slides 28–35",
      unit: "Lecture 1 · Foundations",
      priority: "core",
      mustKnow: [
        "Enzymes biocatalyse specific metabolic reactions; with coenzymes they are the functional units of metabolism.",
        "Hormones are chemical messengers that regulate enzyme activity (stimulate or inhibit).",
        "Enzyme reactions are organized into discrete pathways.",
        "A metabolic reaction: metabolite A + enzyme/coenzyme → product B.",
        "Reversible reactions use the same enzyme and are usually not regulatory.",
        "Irreversible reactions use different enzymes, are non-equilibrium and are often the regulatory steps.",
        "Reaction types to know: oxidation/dehydrogenation/hydroxylation, reduction, hydrolysis, carboxylation, decarboxylation, phosphorylation, dephosphorylation, amination, deamination, isomerization, hydration, dehydration."
      ],
      terms: ["enzyme", "coenzyme", "hormone", "catalyst", "reversible reaction", "irreversible reaction", "oxidation", "reduction", "phosphorylation", "deamination"],
      diagrams: ["Draw an enzyme-catalysed reaction with substrate, active site and product."],
      questions: [
        ["Explain why irreversible reactions are often regulatory steps in metabolism.", "Irreversible steps are far from equilibrium and commit metabolites to a pathway. Regulating them prevents futile cycling and allows the cell to control flux. Reversible steps can simply run backward, so they are less useful as control points.", "Explain"],
        ["Distinguish oxidation, reduction, phosphorylation and dephosphorylation with one example each.", "Oxidation loses electrons (e.g., NADH formation); reduction gains electrons (e.g., NADP+ → NADPH). Phosphorylation adds a phosphate (ADP → ATP); dephosphorylation removes one (ATP → ADP). These reactions transfer energy or regulate proteins.", "Apply"],
        ["How do hormones regulate metabolism if they do not directly catalyse reactions?", "Hormones bind receptors and trigger signalling cascades that alter the activity or amount of key enzymes, for example by phosphorylation, allosteric regulation or gene expression. They change the rate of existing pathways, not the pathway itself.", "Evaluate"]
      ],
      trap: "Confusing coenzymes with cofactors; assuming all reactions are reversible; forgetting that enzymes lower activation energy but do not change equilibrium.",
      bridgeIn: "Recall the ATP/ADP cycle and phosphorylation.",
      bridgeOut: "This week's practical: enzyme assays depend on these reaction types and controls.",
      linkQuestion: "How would you design a control to show that an enzyme, not a chemical, caused a reaction?"
    },
    {
      title: "Metabolic pathways and their organization",
      source: "Slides 36–46",
      unit: "Lecture 1 · Foundations",
      priority: "core",
      mustKnow: [
        "A metabolic pathway is a series of defined reactions from a precursor to an end product via intermediates.",
        "Pathway components: precursor (A) → intermediate (B, C, D) → end product (E), each step catalysed by an enzyme.",
        "Enzymes may be separate, form a multienzyme complex, or be membrane-bound.",
        "Multienzyme complexes are more common than once thought; they improve efficiency and channel intermediates.",
        "Compartmentalization of pathways permits integration and regulation of metabolism.",
        "Catabolic pathways converge; anabolic pathways diverge.",
        "Amphibolic pathways serve both catabolism and anabolism and occur at metabolic crossroads (e.g., Krebs cycle).",
        "Phosphoryl-group transfer is a common energy-coupling mechanism."
      ],
      terms: ["metabolic pathway", "precursor", "intermediate", "end product", "multienzyme complex", "compartmentalization", "amphibolic pathway", "phosphoryl transfer"],
      diagrams: ["Draw a generic pathway A → B → C → D → E with enzymes.", "Draw the divergence of anabolism and convergence of catabolism."],
      questions: [
        ["Draw a generic metabolic pathway and label precursor, intermediates, end product and enzymes.", "A → B → C → D → E, with E1, E2, E3, E4 above the arrows. A is the precursor, B–D are intermediates, E is the end product; each enzyme catalyses one step.", "Apply"],
        ["Why is compartmentalization important for metabolism?", "It separates incompatible reactions, concentrates substrates and enzymes, and allows independent regulation. For example, glycolysis occurs in the cytosol while oxidative phosphorylation occurs in the inner mitochondrial membrane.", "Explain"],
        ["Explain why the Krebs cycle is described as amphibolic.", "It oxidizes acetyl-CoA to CO2 (catabolic) but also supplies intermediates such as α-ketoglutarate and oxaloacetate for biosynthesis (anabolic). It therefore links both arms of metabolism.", "Evaluate"]
      ],
      trap: "Thinking pathways are always linear; forgetting that intermediates can be withdrawn for biosynthesis.",
      bridgeIn: "Recall enzyme specificity and reaction types.",
      bridgeOut: "This week's practical: pathway assays measure intermediates or end products.",
      linkQuestion: "Why would blocking one step of a pathway cause an intermediate to accumulate?"
    },
    {
      title: "Regulation of metabolic pathways",
      source: "Slides 47–54",
      unit: "Lecture 1 · Regulation",
      priority: "core",
      mustKnow: [
        "Regulation = stimulation and inhibition of pathways according to cellular need.",
        "Hormones regulate pathways by stimulating or inhibiting key/regulatory enzymes.",
        "Modes of regulation: allosteric regulation, covalent modification, control of enzyme levels, compartmentalization, metabolic specialization of organs.",
        "Feedback inhibition: the product downregulates an early step in the pathway.",
        "Feedforward activation: an early metabolite activates a downstream enzyme.",
        "Anabolic and catabolic pathways for the same compound are not identical; some steps differ so each pathway can be spontaneous and independently regulated.",
        "Enzyme regulation can also involve membrane permeability, inactive → active conversion, mRNA translation, new mRNA formation and repression of mRNA formation."
      ],
      terms: ["allosteric regulation", "covalent modification", "feedback inhibition", "feedforward activation", "key enzyme", "gene expression", "compartmentalization"],
      diagrams: ["Draw feedback inhibition of a pathway.", "Draw feedforward activation."],
      questions: [
        ["Compare feedback inhibition and feedforward activation with examples.", "Feedback inhibition senses the end product and slows the pathway; feedforward activation senses an early metabolite and speeds a downstream step. Feedback is a brake; feedforward is an anticipatory accelerator.", "Explain"],
        ["Why do anabolic and catabolic pathways for the same compound differ in some steps?", "If every step were reversible and shared, both pathways would run simultaneously and waste energy. Different irreversible steps allow each direction to be spontaneous and independently switched on or off.", "Apply"],
        ["A mutation makes a key enzyme insensitive to allosteric inhibition. Predict the metabolic consequence.", "The pathway loses its brake, so flux continues even when the product is abundant. This wastes energy and can accumulate toxic intermediates or overproduce the product, disrupting homeostasis.", "Evaluate"]
      ],
      trap: "Confusing feedback with feedforward; thinking every enzyme in a pathway is regulated.",
      bridgeIn: "Recall pathway organization and key enzymes.",
      bridgeOut: "This week's practical: enzyme activity assays show regulation in action.",
      linkQuestion: "How would you detect feedback inhibition in a simple enzyme assay?"
    },
    {
      title: "Abnormal metabolism and methods of study",
      source: "Slides 55–59",
      unit: "Lecture 1 · Regulation",
      priority: "support",
      mustKnow: [
        "Abnormal metabolism can result from nutritional deficiencies, enzyme defects, hormonal defects, or drug/toxin interactions.",
        "Inborn error of metabolism = congenital deficiency of a single enzyme in a pathway.",
        "An enzyme deficiency blocks the reaction and pathway, accumulates/excretes the intermediate, prevents formation of the end product, and affects interrelated pathways.",
        "Normal enzyme and hormone activity gives normal metabolism and health; defects derange metabolism.",
        "Methods used to study metabolism: whole organism or cellular fractions, metabolic probes, and radioisotopes."
      ],
      terms: ["inborn error of metabolism", "enzyme deficiency", "nutritional deficiency", "metabolic probe", "radioisotope", "cellular fractionation"],
      diagrams: ["Draw a blocked pathway showing intermediate accumulation and missing end product."],
      questions: [
        ["Explain how a single enzyme deficiency can cause both accumulation of an intermediate and shortage of an end product.", "The blocked step prevents conversion of the intermediate to the next product. The intermediate builds up and may be excreted or become toxic, while everything downstream is starved. Interrelated pathways that share the intermediate are also affected.", "Explain"],
        ["Compare whole-organism, cell-fraction and radioisotope methods for studying metabolism.", "Whole-organism studies show net physiological effects; cell fractions isolate specific organelles or enzymes; radioisotopes trace atoms through pathways with high sensitivity. They answer different levels of question and are often combined.", "Apply"],
        ["Why can a defect in one pathway affect apparently unrelated pathways?", "Pathways share intermediates, cofactors and energy carriers. Blocking one step changes the pools of shared metabolites, which can inhibit or overactivate connected pathways, causing systemic effects.", "Evaluate"]
      ],
      trap: "Thinking an inborn error affects only one reaction; ignoring diet and toxin interactions.",
      bridgeIn: "Recall feedback regulation and key enzymes.",
      bridgeOut: "This week's practical: enzyme assays can reveal a block in a pathway.",
      linkQuestion: "How would you distinguish an enzyme defect from a nutritional deficiency using a blood test?"
    },
    {
      title: "Plant constituents",
      source: "Slide 60",
      unit: "Lecture 1 · Plant constituents",
      priority: "support",
      mustKnow: [
        "Carbohydrates: monosaccharides (pentoses C5, hexoses C6), disaccharides (maltose = glucose+glucose; sucrose = glucose+fructose), oligosaccharides (1–10 monosaccharides), polysaccharides (starch, cellulose, hemicellulose, inulin).",
        "Lipids: fats, phospholipids, waxes.",
        "Proteins: structural and soluble.",
        "Aromatic compounds: vanillin, flavonoids.",
        "Terpenoids and steroids.",
        "Non-protein nitrogen compounds: DNA, RNA, nitrogenous bases.",
        "Vitamins: vitamin C, thiamin (B1)."
      ],
      terms: ["monosaccharide", "disaccharide", "polysaccharide", "starch", "cellulose", "phospholipid", "flavonoid", "terpenoid", "alkaloid"],
      diagrams: ["Draw a concept map of plant constituents and their functions."],
      questions: [
        ["Classify the main plant constituents by chemical group and give one function of each.", "Carbohydrates: energy and structure; lipids: membranes, storage and waxes; proteins: enzymes and structure; aromatic compounds: defence, pigments and signalling; terpenoids/steroids: defence, hormones and membranes; nucleic acids: information; vitamins: coenzymes and antioxidants.", "Apply"],
        ["Distinguish storage and structural carbohydrates with examples.", "Starch is a storage polysaccharide of glucose; cellulose is structural, forming cell walls; hemicellulose is a structural matrix polysaccharide; inulin is a storage fructose polymer. Storage polymers are mobilised; structural polymers resist digestion.", "Explain"],
        ["Why are secondary metabolites important even though they are not essential for basic metabolism?", "They mediate defence against herbivores and pathogens, attract pollinators, protect against stress and can have medicinal value. They increase fitness and ecological interactions rather than basic survival metabolism.", "Evaluate"]
      ],
      trap: "Calling all polysaccharides starch; confusing terpenoids with alkaloids; forgetting that cellulose is structural.",
      bridgeIn: "Recall anabolism and the diversity of biomolecules.",
      bridgeOut: "This week's practical: plant extracts contain these constituents and can be tested.",
      linkQuestion: "How would you test a leaf extract for starch, reducing sugar and protein?"
    },
    {
      title: "Photosynthesis",
      source: "Provisional · course description",
      unit: "Lecture 2+ · Photosynthesis",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Photosynthesis converts light energy into chemical energy: 6CO2 + 6H2O → C6H12O6 + 6O2.",
        "Light reactions occur in the thylakoid membranes: photosystems II and I, water photolysis, ATP and NADPH production.",
        "The Calvin cycle occurs in the stroma: carbon fixation by Rubisco, reduction, and regeneration of RuBP.",
        "C3 plants use the Calvin cycle directly; C4 plants concentrate CO2 in bundle-sheath cells; CAM plants fix CO2 at night.",
        "Photorespiration wastes carbon and occurs when Rubisco reacts with O2, especially in hot, dry conditions.",
        "Limiting factors include light intensity, CO2 concentration, temperature and water."
      ],
      terms: ["photosynthesis", "thylakoid", "stroma", "photosystem", "photolysis", "Calvin cycle", "Rubisco", "C3", "C4", "CAM", "photorespiration"],
      diagrams: ["Draw the light reactions and Calvin cycle.", "Compare C3, C4 and CAM leaf anatomy and carbon fixation."],
      questions: [
        ["Explain how the light reactions and Calvin cycle depend on each other.", "The light reactions supply ATP and NADPH to the Calvin cycle; the Calvin cycle returns ADP, Pi and NADP+ to the light reactions. Neither can run for long without the other.", "Explain"],
        ["Why are C4 and CAM plants favoured in hot, dry environments?", "Both reduce photorespiration by concentrating CO2 around Rubisco. C4 separates initial fixation and the Calvin cycle spatially; CAM separates them temporally, opening stomata at night to save water.", "Apply"],
        ["A crop is grown at high light but low CO2. Predict the effect on photosynthesis and explain the limiting factor.", "Photosynthesis will plateau or fall because CO2 is limiting the Calvin cycle; light capture exceeds the capacity to fix carbon. Increasing CO2 would raise the rate until another factor becomes limiting.", "Evaluate"]
      ],
      trap: "Mixing up the locations of the light reactions and Calvin cycle; thinking C4 plants do not use the Calvin cycle.",
      bridgeIn: "Recall the chloroplast and energy metabolism from Lectures 1–2.",
      bridgeOut: "This week's practical: measure photosynthesis using gas exchange or dye reduction.",
      linkQuestion: "How would you measure the effect of light intensity on photosynthesis in a leaf?"
    },
    {
      title: "Respiration",
      source: "Provisional · course description",
      unit: "Lecture 3 · Respiration",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Respiration releases energy from organic molecules: C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP.",
        "Glycolysis occurs in the cytosol: glucose → pyruvate, producing ATP and NADH.",
        "The link reaction converts pyruvate to acetyl-CoA, releasing CO2 and NADH.",
        "The Krebs cycle oxidizes acetyl-CoA, producing NADH, FADH2, ATP and CO2.",
        "Oxidative phosphorylation uses the electron transport chain and chemiosmosis to produce most ATP.",
        "Fermentation regenerates NAD+ without oxygen, producing ethanol or lactate.",
        "The respiratory quotient (RQ) = CO2 produced / O2 consumed, and indicates the substrate being respired."
      ],
      terms: ["glycolysis", "link reaction", "Krebs cycle", "electron transport chain", "chemiosmosis", "oxidative phosphorylation", "fermentation", "respiratory quotient"],
      diagrams: ["Draw the stages of aerobic respiration with ATP yields.", "Draw the electron transport chain and ATP synthase."],
      questions: [
        ["Compare aerobic respiration and fermentation in terms of ATP yield and location.", "Aerobic respiration fully oxidizes glucose to CO2 and water, producing about 30–32 ATP per glucose, with the electron transport chain in the inner mitochondrial membrane. Fermentation is anaerobic, occurs in the cytosol, and yields only 2 ATP per glucose plus ethanol or lactate.", "Explain"],
        ["Explain why oxygen is required for oxidative phosphorylation.", "Oxygen is the final electron acceptor in the electron transport chain. Without it, electrons back up, NADH cannot be reoxidized, the proton gradient collapses and ATP synthesis stops.", "Apply"],
        ["A plant is kept in the dark and watered. Predict the effect on its respiration and photosynthesis.", "Photosynthesis stops for lack of light; respiration continues in mitochondria, using stored carbohydrates. Net CO2 release occurs until reserves are depleted. Respiration is temperature- and oxygen-dependent.", "Evaluate"]
      ],
      trap: "Saying fermentation produces 36 ATP; confusing the Krebs cycle location; forgetting that respiration occurs in light and dark.",
      bridgeIn: "Recall ATP and redox reactions from the metabolism foundations.",
      bridgeOut: "This week's practical: measure respiration with a respirometer or CO2 indicator.",
      linkQuestion: "How would you compare respiration rates of germinating and dormant seeds?"
    },
    {
      title: "Nitrogen metabolism",
      source: "Provisional · course description",
      unit: "Lecture 4 · Nitrogen metabolism",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Plants take up nitrogen mainly as nitrate (NO3−) and ammonium (NH4+); some can fix atmospheric N2 via symbiosis.",
        "Nitrogen fixation converts N2 to NH3; catalysed by nitrogenase in bacteria and cyanobacteria.",
        "Nitrate reduction: NO3− → NO2− → NH4+, catalysed by nitrate reductase and nitrite reductase.",
        "Nitrate reduction is linked to respiration because it requires NADH/ferredoxin and energy.",
        "Ammonium assimilation into organic compounds occurs via GS-GOGAT and glutamate dehydrogenase.",
        "The nitrogen cycle includes fixation, nitrification, assimilation, ammonification and denitrification.",
        "Nitrogen is often the main limiting nutrient for plant growth."
      ],
      terms: ["nitrogen fixation", "nitrate reduction", "nitrite reductase", "ammonium assimilation", "GS-GOGAT", "nitrification", "ammonification", "denitrification", "nitrogen cycle"],
      diagrams: ["Draw the nitrogen cycle.", "Draw nitrate reduction and ammonium assimilation."],
      questions: [
        ["Explain why nitrate reduction is energetically expensive and linked to respiration.", "Converting nitrate to ammonium requires reducing power (NADH/ferredoxin) and energy. Respiration supplies NADH and ATP, so nitrate reduction competes with other energy demands.", "Explain"],
        ["Compare nitrogen fixation, nitrification and denitrification.", "Fixation converts N2 to NH3; nitrification oxidizes NH4+ to NO2− then NO3−; denitrification reduces NO3− to N2 gas. They are carried out by different microbes and occur under different oxygen conditions.", "Apply"],
        ["A farmer applies excess nitrate fertilizer. Predict the environmental consequences.", "Excess nitrate can leach into groundwater, cause eutrophication of water bodies, and be lost as N2O through denitrification. Crop uptake is limited, so efficiency falls and pollution rises.", "Evaluate"]
      ],
      trap: "Confusing nitrification with nitrogen fixation; forgetting that nitrate reduction needs energy.",
      bridgeIn: "Recall respiration and electron carriers.",
      bridgeOut: "This week's practical: measure nitrate reductase or nitrogen deficiency symptoms.",
      linkQuestion: "How would you diagnose nitrogen deficiency in a maize field?"
    },
    {
      title: "Lipid metabolism",
      source: "Provisional · course description",
      unit: "Lecture 5 · Lipid metabolism",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Lipids are synthesized from acetyl-CoA and glycerol; fatty acid synthase builds fatty acids.",
        "Fatty acid oxidation (β-oxidation) occurs in mitochondria and peroxisomes, producing acetyl-CoA and NADH/FADH2.",
        "The glyoxylate cycle converts lipids to carbohydrates in germinating oil seeds.",
        "Storage lipids are mainly triacylglycerols in oil bodies; membrane lipids are phospholipids.",
        "Lipid metabolism is linked to carbohydrate metabolism through acetyl-CoA.",
        "Waxes and cutin are protective lipids on plant surfaces."
      ],
      terms: ["fatty acid synthesis", "β-oxidation", "acetyl-CoA", "glyoxylate cycle", "triacylglycerol", "phospholipid", "oil body", "cutin"],
      diagrams: ["Draw the relationship between glycolysis, acetyl-CoA, fatty acid synthesis and β-oxidation."],
      questions: [
        ["Explain how a germinating oil seed converts stored fat into sugar.", "β-oxidation converts fatty acids to acetyl-CoA; the glyoxylate cycle produces succinate, which enters gluconeogenesis to make sugars. This supports seedling growth before photosynthesis begins.", "Explain"],
        ["Compare fatty acid synthesis and β-oxidation.", "Synthesis occurs in the cytosol, uses acetyl-CoA and NADPH, and builds the chain two carbons at a time. Oxidation occurs in mitochondria/peroxisomes, produces acetyl-CoA, NADH and FADH2, and breaks the chain down. They are regulated oppositely.", "Apply"],
        ["Why are lipids a more compact energy store than carbohydrates?", "Fatty acids are highly reduced and anhydrous, so they yield more energy per gram and are stored without the water of hydration that polysaccharides carry. This is advantageous for seeds and mobile organisms.", "Evaluate"]
      ],
      trap: "Thinking β-oxidation and synthesis occur in the same compartment; forgetting the glyoxylate cycle's role in seeds.",
      bridgeIn: "Recall acetyl-CoA and the Krebs cycle.",
      bridgeOut: "This week's practical: extract and test lipids from seeds.",
      linkQuestion: "How would you show that a seed is using fat reserves during germination?"
    },
    {
      title: "Protein synthesis and secondary metabolites",
      source: "Provisional · course description",
      unit: "Lecture 6 · Proteins and secondary metabolites",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Protein synthesis: transcription in the nucleus, RNA processing, translation on ribosomes.",
        "The genetic code is triplet, degenerate and universal; mRNA codons specify amino acids.",
        "Secondary metabolites are not essential for basic growth but improve survival: alkaloids, terpenoids, phenolics, flavonoids, tannins.",
        "Secondary metabolites function in defence, attraction, signalling and stress tolerance.",
        "Many pharmaceuticals and poisons are plant secondary metabolites.",
        "Secondary metabolism is often tissue-specific and induced by stress or herbivory."
      ],
      terms: ["transcription", "translation", "codon", "ribosome", "alkaloid", "terpenoid", "phenolic", "flavonoid", "tannin"],
      diagrams: ["Draw the central dogma: DNA → RNA → protein.", "Draw a concept map of secondary metabolite classes."],
      questions: [
        ["Outline the flow of information from gene to protein.", "DNA is transcribed into pre-mRNA in the nucleus, processed into mature mRNA, exported to the cytoplasm and translated by ribosomes into a polypeptide, which folds into a functional protein.", "Explain"],
        ["Why are secondary metabolites important for plant survival?", "They deter herbivores and pathogens, attract pollinators, protect against UV and oxidative stress, and mediate competition. They trade off growth for defence but increase fitness.", "Apply"],
        ["A plant is attacked by insects. Predict two metabolic responses.", "It may induce synthesis of alkaloids, terpenoids or phenolics that are toxic or repellent; it may also release volatile organic compounds that attract predators of the herbivore. Carbon is diverted from growth to defence.", "Evaluate"]
      ],
      trap: "Thinking secondary metabolites are waste products; confusing transcription with translation.",
      bridgeIn: "Recall amino acids and nitrogen assimilation.",
      bridgeOut: "This week's practical: detect alkaloids or phenolics in plant extracts.",
      linkQuestion: "How would you test whether a leaf extract has antimicrobial secondary metabolites?"
    },
    {
      title: "Mineral nutrition",
      source: "Provisional · course description",
      unit: "Lecture 7 · Mineral nutrition",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Essential mineral elements are required for growth and reproduction; deficiency causes characteristic symptoms.",
        "Macronutrients: N, P, K, Ca, Mg, S; micronutrients: Fe, Mn, Zn, Cu, B, Mo, Cl, Ni.",
        "Water culture (hydroponics) is used to study mineral requirements and deficiency symptoms.",
        "Nutrients are absorbed as ions from the soil solution; uptake can be active or passive.",
        "Mineral nutrients function in enzymes, pigments, osmoregulation, structure and energy transfer.",
        "Deficiency symptoms often appear first in older or younger leaves depending on nutrient mobility."
      ],
      terms: ["macronutrient", "micronutrient", "hydroponics", "deficiency symptom", "ion uptake", "mobility", "chlorosis", "necrosis"],
      diagrams: ["Draw a water-culture experiment with control and deficient treatments."],
      questions: [
        ["Explain why mineral deficiency symptoms differ between mobile and immobile nutrients.", "Mobile nutrients (e.g., N, K, Mg) are redistributed from older to younger leaves, so older leaves show symptoms first. Immobile nutrients (e.g., Ca, Fe) cannot be redistributed, so younger leaves show symptoms first.", "Explain"],
        ["How would you design a water-culture experiment to identify a mineral deficiency?", "Grow replicate plants in complete nutrient solution and in solutions each lacking one element. Keep light, pH and temperature constant. Record growth and leaf symptoms, then compare with the complete control.", "Apply"],
        ["A farmer's maize has yellowing along the midrib of older leaves. Suggest a possible deficiency and a test.", "The pattern suggests nitrogen deficiency (chlorosis of older leaves). Test by comparing with a nitrogen-sufficient control or by leaf/soil analysis. Confirm before applying fertilizer.", "Evaluate"]
      ],
      trap: "Assuming more fertilizer is always better; confusing deficiency with toxicity or disease.",
      bridgeIn: "Recall nitrogen assimilation and protein synthesis.",
      bridgeOut: "This week's practical: set up or assess a water-culture experiment.",
      linkQuestion: "How would you distinguish nitrogen deficiency from waterlogging in the field?"
    }
  ]
});
