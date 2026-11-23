window.STUDY_DATA.courses.push({
  code: "BIOL 335",
  title: "Mycology",
  short: "Mycology",
  kind: "theory",
  subject: "Mycology",
  partner: "BIOL 337",
  color: "#00695c",
  status: "partial",
  credits: 3,
  assessment: { ca: 40, exam: 60 },
  source: "Week 1 Introduction (19), Lecture 2 Economic Importance (35), Lecture 3/4a Reproduction (14) + Webster & Weber textbook",
  note: "Weeks 1, 2 and the reproduction lecture are built from the lecturer's slides. Weeks 3–13 are mapped to the course outline and Webster & Weber (2007); check them against the lecturer's own slides when available.",
  bridge: {
    in: "Sunday's BIOL 337 practical produced the cultures and slides you interpret tonight.",
    out: "Sunday's practical applies tonight's identification features to fresh specimens.",
    linkQuestion: "You isolate a fungus with aseptate hyphae and zygospores. Which phylum is it, and how would you confirm it in the laboratory?"
  },
  sections: [
    {
      title: "Introduction to mycology and the attributes of fungi",
      source: "Week 1, slides 1–19",
      unit: "Week 1 · Introduction",
      priority: "core",
      mustKnow: [
        "Mycology = study of fungi: structure, classification, reproduction, ecology, genetics, and roles in disease, agriculture and industry.",
        "Fungi are eukaryotic, achlorophyllous (no chlorophyll) and heterotrophic by absorption.",
        "They digest food externally with enzymes and absorb soluble products.",
        "Cell wall contains chitin and glucans (not cellulose, except Oomycota); membrane sterol is ergosterol.",
        "Reserve food is glycogen and lipids, not starch.",
        "Body is unicellular (yeast) or filamentous (hyphae forming a mycelium).",
        "Hyphae may be septate (with pores) or aseptate/coenocytic (no cross-walls).",
        "Reproduction is by spores, asexual and sexual; habitat includes soil, dead matter, water, plants and animals; nutrition is saprophytic, parasitic or symbiotic.",
        "Kingdom Fungi is closer to animals than plants (chitin, glycogen, true nuclei).",
        "Fungal cycle: spore → hypha/mycelium → plasmogamy → karyogamy → meiosis → spores."
      ],
      terms: ["mycology", "eukaryotic", "achlorophyllous", "heterotrophic", "absorption", "chitin", "glucan", "ergosterol", "hypha", "mycelium", "septate", "aseptate", "coenocytic", "saprophyte", "parasite", "symbiont"],
      diagrams: ["Draw septate and aseptate hyphae.", "Draw the fungal life cycle with plasmogamy, karyogamy and meiosis."],
      questions: [
        ["A fungus is found growing on dead wood. Explain how its nutrition differs from that of a plant and an animal.", "It is heterotrophic and absorbs nutrients after extracellular digestion; it secretes enzymes into the wood, breaks down polymers and absorbs soluble products. Plants photosynthesize; animals ingest food and digest internally. The fungus is a saprotroph.", "Explain"],
        ["Compare septate and aseptate hyphae. Why is the aseptate condition advantageous for rapid colonization?", "Septate hyphae have cross-walls with pores; aseptate hyphae are coenocytic with many nuclei in a continuous cytoplasm. The coenocytic condition allows rapid cytoplasmic streaming and growth without the cost of forming septa, which helps fast colonization.", "Apply"],
        ["Draw and explain the fungal life cycle, showing where plasmogamy, karyogamy and meiosis occur. Why is the dikaryon stage unique?", "Haploid spores germinate into hyphae. Plasmogamy fuses cytoplasm of compatible hyphae, creating a dikaryon (two nuclei per cell). Karyogamy fuses nuclei to form a diploid zygote, which undergoes meiosis to produce haploid spores. The dikaryon is unique because the two haploid nuclei divide together without fusing.", "Evaluate"]
      ],
      trap: "Calling fungi plants; forgetting ergosterol as the antifungal target; confusing spores with seeds.",
      bridgeIn: "Recall the last BIOL 337 practical: what fungal structures did you observe?",
      bridgeOut: "Sunday's practical: use these attributes to identify unknown cultures.",
      linkQuestion: "Which features would you use to decide whether an unknown organism is a fungus, an alga or a bacterium?"
    },
    {
      title: "Economic framework and ecosystem services",
      source: "Lecture 2, slides 1–6",
      unit: "Week 2 · Economic importance",
      priority: "core",
      mustKnow: [
        "Net economic impact = (market products + ecosystem services) − (yield losses + prevention + healthcare costs).",
        "Direct market value: edible mushrooms, fermented foods, enzymes, pharmaceuticals.",
        "Ecosystem services: lignocellulose decomposition and mycorrhizal nutrient exchange.",
        "Economic losses: pre-harvest blight, post-harvest spoilage, mycotoxins, mycoses.",
        "Physiological mechanisms: polarised hyphal growth, absorptive heterotrophy, secondary metabolism.",
        "The same enzymatic digestion that recycles forest litter can spoil stored crops — a dual economic edge.",
        "White-rot fungi degrade lignin and cellulose using peroxidases and laccases; brown-rot fungi depolymerize cellulose and hemicellulose, leaving modified lignin.",
        "Mycorrhizae: arbuscular mycorrhizae (Glomeromycota) in ~80% of crops; ectomycorrhizae (Basidiomycota/Ascomycota) on timber trees.",
        "High soil phosphorus suppresses mycorrhizal colonization; commercial inoculants need field validation."
      ],
      terms: ["ecosystem service", "lignocellulose", "white-rot", "brown-rot", "mycorrhiza", "arbuscular mycorrhiza", "ectomycorrhiza", "Hartig net", "absorptive heterotrophy", "secondary metabolism"],
      diagrams: ["Draw the economic framework equation.", "Draw an arbuscular mycorrhiza and an ectomycorrhiza."],
      questions: [
        ["Explain how fungi can be both economically beneficial and economically costly through the same physiological abilities.", "Absorptive heterotrophy and secondary metabolism let fungi decompose waste and produce valuable enzymes, foods and drugs. The same enzymes spoil stored crops and the same secondary metabolites can be mycotoxins. Value depends on context and control.", "Explain"],
        ["Compare white-rot and brown-rot fungi and their economic roles.", "White-rot fungi degrade both lignin and cellulose, making them useful for bioremediation and biofuel research. Brown-rot fungi remove cellulose and hemicellulose, leaving lignin; they damage timber structurally. Both are important decomposers but have different industrial impacts.", "Apply"],
        ["A farmer applies a commercial mycorrhizal inoculant but sees no yield increase. Give two plausible reasons.", "The soil may already have high phosphorus, suppressing colonization; the native mycorrhizal community may outcompete the inoculant; or the crop may not be responsive. Field validation and soil testing are needed.", "Evaluate"]
      ],
      trap: "Assuming all fungi are harmful; ignoring context and dose in economic impact.",
      bridgeIn: "Recall fungal nutrition and hyphal growth from Week 1.",
      bridgeOut: "Next practical: observe mycorrhizal roots or decomposition substrates.",
      linkQuestion: "How would you measure the economic benefit of mycorrhizae in a maize field?"
    },
    {
      title: "Edible mushrooms, food fermentation and enterprise",
      source: "Lecture 2, slides 7–16",
      unit: "Week 2 · Economic importance",
      priority: "core",
      mustKnow: [
        "Major cultivated mushrooms: Pleurotus ostreatus (oyster), Lentinula edodes (shiitake), Agaricus bisporus (button).",
        "Nutritional profile: β-glucan fibre, B vitamins, potassium, digestible protein (15–30% dry weight).",
        "Value chain: pure-culture spawn labs → substrate growers → fresh/dried/powder markets.",
        "Production pipeline: compost and steam pasteurize → spawn → spawn run in dark → pinning and harvest at ~85% humidity, light and fresh air.",
        "Biological efficiency (BE) = fresh mushroom weight ÷ dry substrate weight × 100; typically 60–100% for Pleurotus.",
        "Ghana case: oyster mushroom enterprise uses sawdust, rice straw and oil palm fibre; 6-week harvest cycles; bottlenecks are Trichoderma green mould and a 48-hour fresh shelf life.",
        "Break-even example: revenue GH₵4,200; costs GH₵2,850; break-even yield 81.4 kg/month; >32% bag loss drops below break-even.",
        "Yeasts: Saccharomyces cerevisiae drives bread, brewing and palm wine; glucose → 2 ethanol + 2 CO2.",
        "Ghanaian mixed fermentations: kenkey and banku use lactic acid bacteria with Candida and Saccharomyces.",
        "Foraging safety: never identify wild mushrooms by colour alone; Amanita amatoxins cause fatal hepatotoxicity."
      ],
      terms: ["spawn", "substrate", "pasteurization", "spawn run", "pinning", "biological efficiency", "Trichoderma", "Saccharomyces cerevisiae", "kenkey", "Amanita", "amatoxin"],
      diagrams: ["Draw the mushroom production pipeline (4 stages).", "Draw the yeast fermentation equation."],
      questions: [
        ["Explain why substrate pasteurization is critical in oyster mushroom production.", "Pasteurization reduces competitors such as Trichoderma and bacteria while leaving the mushroom mycelium able to colonize. Without it, contaminants outcompete the crop, reduce yield and can destroy more than 32% of bags, pushing the farm below break-even.", "Explain"],
        ["Why do traditional kenkey starters outperform single-strain baker's yeast in tropical storage?", "Kenkey uses a mixed consortium of lactic acid bacteria and yeasts. The lactic acid lowers pH and inhibits spoilage organisms, while yeasts contribute flavour and B vitamins. The consortium is more robust than a single strain under warm, variable conditions.", "Apply"],
        ["A grower must choose between solar drying and cold-chain transport. Evaluate the decision.", "Solar drying reduces moisture and extends shelf life at low cost, but depends on weather and changes product quality. Cold chain preserves fresh quality but has high energy and maintenance costs. The choice depends on market price, volume, distance and reliability of power.", "Evaluate"]
      ],
      trap: "Identifying wild mushrooms by colour; confusing biological efficiency with profit; ignoring post-harvest shelf life.",
      bridgeIn: "Recall fungal nutrition and enzyme secretion.",
      bridgeOut: "Next practical: culture oyster mushroom mycelium and observe contamination.",
      linkQuestion: "How would you calculate whether a small mushroom farm is profitable?"
    },
    {
      title: "Industrial biotechnology, pharmaceuticals and biocontrol",
      source: "Lecture 2, slides 17–24",
      unit: "Week 2 · Economic importance",
      priority: "core",
      mustKnow: [
        "Aspergillus niger produces citric acid and glucoamylase for beverages, pharmaceuticals and starch syrup.",
        "Trichoderma reesei produces cellulases and xylanases for bioethanol, textiles and paper.",
        "Aspergillus oryzae produces α-amylases and proteases for baking, soy fermentation and detergents.",
        "Fusarium venenatum produces mycoprotein (Quorn).",
        "Penicillins (Penicillium rubens) inhibit bacterial peptidoglycan synthesis.",
        "Cephalosporins (Acremonium chrysogenum) are broad-spectrum β-lactams resistant to many β-lactamases.",
        "Lovastatin (Aspergillus terreus) inhibits HMG-CoA reductase and lowers LDL cholesterol.",
        "Cyclosporine A (Tolypocladium inflatum) inhibits calcineurin and prevents transplant rejection.",
        "Mycelium composites: Ganoderma and Pleurotus hyphae bind agricultural husks into biodegradable packaging and acoustic panels.",
        "Model organisms: Saccharomyces cerevisiae and Neurospora crassa underpin genomics, CRISPR screening and diagnostics.",
        "Biocontrol: Trichoderma suppresses Fusarium and Rhizoctonia by mycoparasitism and root priming; Beauveria bassiana and Metarhizium acridum control insects; atoxigenic Aspergillus flavus (Aflasafe) excludes aflatoxin producers."
      ],
      terms: ["citric acid", "glucoamylase", "cellulase", "xylanase", "mycoprotein", "penicillin", "cephalosporin", "statin", "cyclosporine", "mycelium composite", "biocontrol", "Aflasafe"],
      diagrams: ["Draw a table of fungal workhorse → product → application.", "Draw the mycoparasitism process of Trichoderma."],
      questions: [
        ["Explain how a single fungal species can be both a valuable industrial producer and a serious contaminant.", "The same fast growth and enzyme secretion that make Aspergillus or Trichoderma useful in controlled fermentation make them aggressive contaminants in mushroom bags or food. The outcome depends on the substrate, environment and whether the species produces toxins.", "Explain"],
        ["Why are fungal secondary metabolites such a rich source of pharmaceuticals?", "Fungi use secondary metabolites for competition and defence, so many are biologically active against bacteria, fungi, insects or immune cells. This chemical diversity yields antibiotics, statins and immunosuppressants.", "Apply"],
        ["Evaluate the use of Trichoderma as a biocontrol agent versus a chemical fungicide.", "Trichoderma can suppress pathogens, improve root growth and reduce chemical inputs, but its efficacy depends on soil conditions and strain. Chemical fungicides are more consistent but can harm non-target organisms and select resistance. Integrated use is often best.", "Evaluate"]
      ],
      trap: "Assuming all secondary metabolites are toxic; forgetting that biocontrol agents can also be contaminants.",
      bridgeIn: "Recall secondary metabolism and the economic framework.",
      bridgeOut: "Next practical: observe fungal cultures used in industrial or biocontrol examples.",
      linkQuestion: "How would you screen a fungal isolate for antibiotic activity?"
    },
    {
      title: "Plant pathology, mycotoxins and human mycoses",
      source: "Lecture 2, slides 25–34",
      unit: "Week 2 · Economic importance",
      priority: "core",
      mustKnow: [
        "Major crop diseases: rice blast (Magnaporthe oryzae), wheat stem rust (Puccinia graminis, Ug99), coffee leaf rust (Hemileia vastatrix), post-harvest moulds (Botrytis, Penicillium).",
        "Post-harvest moulds cause 10–30% losses in fruits and grains.",
        "Cocoa black pod: Phytophthora megakarya and P. palmivora; Oomycetes, not true fungi — cellulose walls, diploid hyphae, biflagellate zoospores.",
        "Black pod epidemiology: rain splash moves soil zoospores onto low pods; wet-season outbreaks can destroy 30–90% of pods.",
        "Integrated control: weekly removal and burial of black pods; pruning and drainage to lower humidity; COCOBOD-approved copper or metalaxyl sprays timed to peak rains.",
        "Aflatoxin: Aspergillus flavus and A. parasiticus colonize drought-stressed or damp grain; aflatoxin B1 is a Group 1 liver carcinogen; causes child stunting and acute toxicosis; export rejection and milk carryover (M1).",
        "Aflatoxin barrier: field Aflasafe biocontrol → rapid drying to <13% moisture → hermetic PICS bags → lot testing.",
        "Other mycotoxins: fumonisins (Fusarium verticillioides; maize; oesophageal cancer, equine leukoencephalomalacia); ochratoxin A (Aspergillus/Penicillium; cocoa, coffee, cereals; nephrotoxic); deoxynivalenol/DON (Fusarium graminearum; wheat/barley; feed refusal, immunosuppression).",
        "Medical mycology: dermatophytes, Candida, Cryptococcus, Histoplasma, Sporothrix; antifungal resistance and neglected fungal diseases."
      ],
      terms: ["rice blast", "Ug99", "coffee leaf rust", "black pod", "Phytophthora", "Oomycota", "aflatoxin", "fumonisin", "ochratoxin", "DON", "mycotoxin", "mycosis", "dermatophyte", "Candida"],
      diagrams: ["Draw the cocoa black pod disease cycle.", "Draw the four-step aflatoxin barrier."],
      questions: [
        ["Why do anti-chitin fungicides fail against Phytophthora megakarya in Ghanaian cocoa farms?", "Phytophthora is an Oomycete, not a true fungus. Its cell wall contains cellulose, not chitin, so chitin-synthesis inhibitors do not affect it. Control requires Oomycete-specific products such as metalaxyl and cultural measures.", "Explain"],
        ["Explain why aflatoxin contamination is a food-safety and trade problem even when the grain looks normal.", "Aflatoxins are invisible, heat-stable metabolites that persist after cooking. They are carcinogenic and cause stunting, so contaminated grain is rejected at borders and cannot be made safe by ordinary processing. Testing and prevention are essential.", "Apply"],
        ["A farmer's maize is drought-stressed and stored in damp bags. Predict the aflatoxin risk and propose three interventions.", "Risk is high because drought stress predisposes the crop and damp storage favours Aspergillus growth. Intervene with Aflasafe biocontrol, rapid drying to <13% moisture, hermetic storage and lot testing. Remove contaminated lots.", "Evaluate"]
      ],
      trap: "Calling Phytophthora a fungus; assuming cooking destroys aflatoxin; confusing mycotoxin with mushroom poison.",
      bridgeIn: "Recall fungal secondary metabolism and the economic framework.",
      bridgeOut: "Next practical: identify fungal pathogens and perform a spore count.",
      linkQuestion: "How would you distinguish black pod from another cocoa pod rot in the field?"
    },
    {
      title: "Asexual reproduction in fungi",
      source: "Lecture 3/4a, Module 01",
      unit: "Week 7 · Asexual reproduction",
      priority: "core",
      mustKnow: [
        "Reproduction = generation of new individuals from one or more parents; importance: species continuity, extinction prevention, genetic diversity, ecosystem balance.",
        "Asexual reproduction is the primary and most frequent mode in fungi; rapid colonization when moisture and nutrients are favourable.",
        "Asexual spores are produced by mitosis and are genetically identical to the parent (clones).",
        "Spore types: sporangiospores (inside sporangia), conidia (external on conidiophores), chlamydospores (thick-walled survival), arthroconidia (fragmentation), blastoconidia (budding).",
        "Asexual structures: sporangium, sporangiophore, conidiophore, conidium, oidium, budding yeast.",
        "Aquatic Chytridiomycota produce wall-less, flagellated zoospores inside zoosporangia; terrestrial Aspergillus produces dry, hydrophobic conidia for airborne dispersal.",
        "Spore dispersal is adapted to the environment: water, wind, animals or contact."
      ],
      terms: ["asexual reproduction", "mitosis", "sporangiospore", "conidium", "conidiophore", "sporangium", "chlamydospore", "arthroconidium", "blastoconidium", "zoospore", "zoosporangium"],
      diagrams: ["Draw and label sporangiospores, conidia, chlamydospores, arthroconidia and blastoconidia."],
      questions: [
        ["Why is asexual reproduction the dominant mode in fungi when conditions are favourable?", "It is fast, does not require a partner, and produces many clones adapted to the current environment. This allows rapid exploitation of abundant moisture and nutrients. Sexual reproduction is reserved for stress or genetic diversification.", "Explain"],
        ["Why do aquatic Chytridiomycota produce wall-less, flagellated zoospores while terrestrial Aspergillus produces dry, hydrophobic conidia?", "Zoospores need water to swim to new substrates, so they lack a wall and have flagella. Terrestrial fungi rely on air dispersal, so conidia are dry, hydrophobic and resistant to desiccation. Each spore type matches its dispersal environment.", "Apply"],
        ["Compare chlamydospores and conidia in function.", "Chlamydospores are thick-walled resting/survival structures that tolerate stress. Conidia are dispersal propagules produced externally in large numbers. One survives, the other spreads.", "Evaluate"]
      ],
      trap: "Calling all asexual spores conidia; forgetting that zoospores are wall-less; confusing budding with binary fission.",
      bridgeIn: "Recall the fungal life cycle and the dikaryon from Week 1.",
      bridgeOut: "Sunday's practical: identify spore types under the microscope.",
      linkQuestion: "How would you distinguish a conidium from a sporangiospore using a microscope?"
    },
    {
      title: "Sexual reproduction, nutrition and trophic guilds",
      source: "Lecture 3/4a, Modules 02–03",
      unit: "Week 8 · Sexual reproduction",
      priority: "core",
      mustKnow: [
        "Sexual reproduction involves plasmogamy (cytoplasmic fusion), karyogamy (nuclear fusion) and meiosis.",
        "Plasmogamy produces a dikaryon; karyogamy produces a diploid zygote; meiosis restores haploidy and generates genetic diversity.",
        "Homothallism: one thallus can mate with itself; heterothallism: compatible mating types are needed.",
        "Sexual spores: zygospores (Zygomycota), ascospores (Ascomycota), basidiospores (Basidiomycota).",
        "Sexual reproduction is often triggered by stress, nutrient depletion or seasonal cues.",
        "Fungi are heterotrophic by absorption; extracellular digestion followed by nutrient absorption.",
        "Trophic guilds: saprotrophs (dead organic matter), parasites (living hosts), mutualists (both benefit, e.g., mycorrhizae, lichens).",
        "Environmental factors affecting growth: moisture, temperature, pH, nutrients, oxygen and light."
      ],
      terms: ["plasmogamy", "karyogamy", "meiosis", "dikaryon", "homothallism", "heterothallism", "zygospore", "ascospore", "basidiospore", "saprotroph", "parasite", "mutualist", "trophic guild"],
      diagrams: ["Draw the sexual cycle showing plasmogamy, karyogamy and meiosis.", "Draw a comparison of zygospore, ascospore and basidiospore formation."],
      questions: [
        ["Explain the sequence plasmogamy → karyogamy → meiosis and why each step matters.", "Plasmogamy fuses cytoplasm and brings compatible nuclei together; karyogamy fuses them into a diploid zygote; meiosis halves the chromosome number and generates recombinant haploid spores. The sequence creates genetic diversity and restores the haploid life stage.", "Explain"],
        ["Compare homothallism and heterothallism and their consequences for colonization.", "Homothallic fungi can self-fertilize, so a single colonist can reproduce sexually. Heterothallic fungi need a compatible partner, which promotes outcrossing and genetic diversity but delays reproduction in isolated colonies.", "Apply"],
        ["A fungus grows on dead leaves in a stream. Classify its trophic guild and predict two adaptations.", "It is a saprotroph (aquatic hyphomycete or similar). Adaptations include tetraradiate spores for anchoring and trapping in water, and extracellular enzymes for breaking down leaf litter. It may tolerate low oxygen.", "Evaluate"]
      ],
      trap: "Confusing plasmogamy with karyogamy; thinking sexual reproduction is the main mode in favourable conditions; confusing saprotroph with parasite.",
      bridgeIn: "Recall asexual spore types and dispersal.",
      bridgeOut: "Sunday's practical: observe sexual structures in cultures or specimens.",
      linkQuestion: "How would you decide whether a fungus is homothallic or heterothallic from a mating test?"
    },
    {
      title: "Fungal taxonomy and nomenclature",
      source: "Provisional · course outline Week 3",
      unit: "Week 3 · Taxonomy",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Taxonomy: classification, identification and nomenclature of organisms.",
        "Hierarchy: kingdom → phylum → class → order → family → genus → species.",
        "Binomial nomenclature: Genus species, italicised or underlined; genus capitalised, species lower case.",
        "Traditional classification used morphology, life cycle and spore type; molecular classification uses DNA sequences (rDNA, ITS, phylogenomics).",
        "Major fungal phyla: Chytridiomycota, Mucoromycota/Zygomycota, Ascomycota, Basidiomycota; plus Oomycota (Stramenopila, not true fungi).",
        "Fungal names are governed by the International Code of Nomenclature (ICN); one fungus, one name.",
        "Identification uses morphology, culture, microscopy, biochemical tests and molecular markers."
      ],
      terms: ["taxonomy", "nomenclature", "binomial", "phylum", "genus", "species", "ITS", "phylogeny", "type specimen", "ICN"],
      diagrams: ["Draw the taxonomic hierarchy from kingdom to species.", "Draw a simple phylogenetic tree of the major fungal phyla."],
      questions: [
        ["Explain why molecular data changed fungal classification.", "Morphology can be convergent and cryptic species are common. DNA sequences reveal evolutionary relationships and allow consistent placement. Molecular data also link asexual and sexual stages (one fungus, one name).", "Explain"],
        ["A new fungus is isolated. Outline the steps you would take to identify it.", "Observe macroscopic and microscopic morphology, culture it on standard media, record growth and spore types, then use molecular markers such as ITS sequencing and compare with databases. Confirm with a type specimen or reference culture.", "Apply"],
        ["Why is Oomycota no longer classified as a true fungus?", "Oomycetes have cellulose cell walls, diploid hyphae and biflagellate zoospores, and their phylogeny places them in Stramenopila, not Fungi. They are fungus-like in ecology but not in ancestry.", "Evaluate"]
      ],
      trap: "Using common names as scientific names; thinking Oomycota are fungi; ignoring the one fungus, one name rule.",
      bridgeIn: "Recall the major groups and attributes from Week 1.",
      bridgeOut: "Next practical: classify unknown cultures using a taxonomic key.",
      linkQuestion: "How would you use a dichotomous key to identify an unknown mould?"
    },
    {
      title: "Vegetative structures of fungi I",
      source: "Provisional · course outline Week 4",
      unit: "Week 4 · Vegetative structures",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Thallus organisation: unicellular yeasts vs filamentous hyphae vs dimorphic fungi.",
        "Hyphae grow by apical extension; the mycelium is the branching network.",
        "Septate hyphae have cross-walls with pores; aseptate/coenocytic hyphae lack regular cross-walls.",
        "Pseudohyphae form by budding yeast cells that remain attached; true hyphae form by apical growth.",
        "Dolipore septum is a specialised septum in Basidiomycota with a central pore and parenthesomes.",
        "Clamp connections are hyphal bridges that maintain dikaryotic nuclei in Basidiomycota.",
        "Hyphal growth is polarised; vesicles deliver wall materials and enzymes to the apex."
      ],
      terms: ["thallus", "yeast", "hypha", "mycelium", "septum", "coenocytic", "pseudohypha", "dolipore septum", "clamp connection", "apical growth"],
      diagrams: ["Draw a septate hypha with a pore.", "Draw a clamp connection and a dolipore septum."],
      questions: [
        ["Compare pseudohyphae and true hyphae.", "Pseudohyphae are chains of elongated budding yeast cells with constrictions at the joints; true hyphae are tubular, grow by apical extension and branch. Candida can form both depending on conditions.", "Explain"],
        ["Why are clamp connections and dolipore septa important in Basidiomycota?", "Clamp connections ensure each cell receives both compatible nuclei during division, maintaining the dikaryon. The dolipore septum allows cytoplasmic continuity while controlling nuclear movement. Both support the long-lived dikaryotic mycelium.", "Apply"],
        ["How does polarised hyphal growth help a fungus penetrate solid substrates?", "Vesicles deliver enzymes and wall precursors to the tip, extending the hypha into the substrate. The narrow tip concentrates force and enzyme secretion, allowing penetration of wood, soil and grain.", "Evaluate"]
      ],
      trap: "Confusing pseudohyphae with true hyphae; thinking all septa are complete walls.",
      bridgeIn: "Recall the fungal body and hyphal types from Week 1.",
      bridgeOut: "Next practical: stain and identify hyphal types under the microscope.",
      linkQuestion: "How would you distinguish Candida pseudohyphae from true hyphae in a wet mount?"
    },
    {
      title: "Vegetative structures of fungi II",
      source: "Provisional · course outline Week 5",
      unit: "Week 5 · Vegetative structures",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Plectenchyma = organised mass of hyphae; prosenchyma (parallel hyphae) vs pseudoparenchyma (rounded, parenchyma-like cells).",
        "Sclerotium = compact, hardened resting body that survives adverse conditions.",
        "Rhizomorph = root-like aggregation of hyphae that conducts nutrients and water over distances.",
        "Haustorium = specialised hypha that invades a living host cell and absorbs nutrients.",
        "Appressorium = swollen hyphal tip that attaches to and penetrates a host surface.",
        "Ectomycorrhiza = hyphal mantle around roots plus Hartig net between root cells.",
        "Plasmodium = multinucleate, wall-less protoplasmic mass (Myxomycetes).",
        "These structures are adaptations for survival, attachment, absorption or dispersal."
      ],
      terms: ["plectenchyma", "prosenchyma", "pseudoparenchyma", "sclerotium", "rhizomorph", "haustorium", "appressorium", "ectomycorrhiza", "Hartig net", "plasmodium"],
      diagrams: ["Draw a haustorium inside a host cell.", "Draw an appressorium on a leaf surface.", "Draw an ectomycorrhiza with mantle and Hartig net."],
      questions: [
        ["Explain how a haustorium differs from a rhizomorph in function.", "A haustorium penetrates a living host cell to absorb nutrients; a rhizomorph is a transport structure that moves water and nutrients through soil or wood. One is an interface with a host; the other is a long-distance pipeline.", "Explain"],
        ["Why is the appressorium important for plant-pathogenic fungi?", "It anchors the germ tube to the leaf and generates turgor pressure to drive a penetration peg through the cuticle. This concentrates force and allows direct entry into the host.", "Apply"],
        ["Compare a sclerotium and a plasmodium.", "A sclerotium is a compact, dormant, thick-walled survival body. A plasmodium is a wall-less, multinucleate, motile feeding mass. One survives stress; the other actively moves and feeds.", "Evaluate"]
      ],
      trap: "Confusing prosenchyma with pseudoparenchyma; thinking haustoria kill host cells immediately (biotrophs keep them alive).",
      bridgeIn: "Recall hyphal growth and septa.",
      bridgeOut: "Next practical: identify sclerotia, rhizomorphs and mycorrhizal roots.",
      linkQuestion: "How would you recognise an ectomycorrhiza on a pine root?"
    },
    {
      title: "Fungal nutrition and growth",
      source: "Provisional · course outline Week 6",
      unit: "Week 6 · Nutrition and growth",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Fungi are heterotrophic by absorption: extracellular enzymes digest polymers, soluble products are absorbed.",
        "Saprotrophs feed on dead organic matter; parasites feed on living hosts; mutualists exchange resources with a host.",
        "Extracellular enzymes include amylases, cellulases, proteases, ligninases, chitinases and lipases.",
        "Fungal growth is influenced by moisture, temperature, pH, nutrients, oxygen and light.",
        "Fungi tolerate a wide pH range, often preferring slightly acidic conditions.",
        "Water activity and humidity are critical for spore germination and growth.",
        "Growth curves in culture: lag, exponential, stationary and death phases.",
        "Nutrient uptake can be passive or active; fungi can accumulate ions against gradients."
      ],
      terms: ["saprotroph", "parasite", "mutualist", "extracellular digestion", "amylase", "cellulase", "protease", "ligninase", "water activity", "lag phase", "exponential growth"],
      diagrams: ["Draw a fungal growth curve in batch culture.", "Draw extracellular digestion and absorption."],
      questions: [
        ["Explain why extracellular digestion is necessary for fungi.", "Fungal cells are surrounded by a wall and cannot engulf large particles. They secrete enzymes into the environment, break polymers into small soluble molecules, then absorb them across the membrane. This is absorptive heterotrophy.", "Explain"],
        ["Predict how temperature and moisture interact to affect mould growth on stored grain.", "Warm, moist conditions accelerate enzyme activity and spore germination, so growth and mycotoxin production increase. Dry, cool storage reduces water activity and slows growth. The interaction determines spoilage risk.", "Apply"],
        ["Why can a fungus grow on a substrate that lacks simple sugars?", "It can secrete amylases, cellulases and other enzymes to break down complex polymers into simple sugars and other monomers, then absorb them. Its enzyme repertoire determines which substrates it can exploit.", "Evaluate"]
      ],
      trap: "Thinking fungi ingest food; ignoring water activity; assuming all fungi prefer the same temperature.",
      bridgeIn: "Recall extracellular digestion from the introduction.",
      bridgeOut: "Next practical: culture fungi on different media and measure growth.",
      linkQuestion: "How would you measure the effect of temperature on fungal growth rate?"
    },
    {
      title: "Myxomycetes and zoosporic fungi",
      source: "Provisional · course outline Week 9",
      unit: "Week 9 · Myxomycetes and zoosporic fungi",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Myxomycetes (true slime moulds) have a plasmodial feeding stage and form sporangia with spores.",
        "They are not true fungi; they are amoebozoans, but traditionally studied in mycology.",
        "Zoosporic fungi (Chytridiomycota) produce flagellated zoospores and often live in water or wet soil.",
        "Chytrids can be saprotrophic, parasitic or mutualistic; some are amphibian pathogens (Batrachochytrium).",
        "Zoospores are wall-less and motile; they encyst and germinate on a substrate.",
        "Slime moulds and chytrids are important decomposers and model organisms."
      ],
      terms: ["Myxomycetes", "plasmodium", "sporangium", "zoospore", "Chytridiomycota", "chytrid", "Batrachochytrium", "encystment"],
      diagrams: ["Draw the Myxomycete life cycle.", "Draw the chytrid life cycle with zoospores."],
      questions: [
        ["Why are slime moulds no longer classified as true fungi?", "They are amoebozoans with a plasmodial stage, not chitinous hyphae. Molecular phylogeny places them outside Fungi. They are studied in mycology because of convergent fungus-like ecology.", "Explain"],
        ["Explain the ecological importance of zoosporic fungi.", "They decompose organic matter in water and wet soil, parasitize algae and animals, and some are mutualists in herbivore guts. They also include amphibian pathogens, so they affect ecosystem health.", "Apply"],
        ["How does the flagellated zoospore limit the habitat of Chytridiomycota?", "Zoospores need water to swim, so chytrids are restricted to aquatic or very wet habitats. They cannot disperse through dry air. This shapes their distribution and host interactions.", "Evaluate"]
      ],
      trap: "Calling slime moulds fungi; forgetting that zoospores need water.",
      bridgeIn: "Recall spore types and dispersal.",
      bridgeOut: "Next practical: observe slime moulds or chytrids in wet mounts.",
      linkQuestion: "How would you culture a chytrid from a pond water sample?"
    },
    {
      title: "Mucoromycota and related fungi",
      source: "Provisional · course outline Week 10",
      unit: "Week 10 · Mucoromycota",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Traditional Zygomycota are now split; Mucoromycota includes Mucorales such as Rhizopus and Mucor.",
        "They have coenocytic hyphae and produce zygospores after plasmogamy and karyogamy.",
        "Asexual reproduction by sporangiospores inside sporangia.",
        "Rhizopus stolonifer is a common bread mould and post-harvest spoilage agent.",
        "Mucor species can cause mucormycosis, especially in immunocompromised patients.",
        "They are important in food fermentation (e.g., tempeh) and as spoilage organisms.",
        "Zygospores are thick-walled sexual spores that survive adverse conditions."
      ],
      terms: ["Mucoromycota", "Mucorales", "Rhizopus", "Mucor", "zygospore", "sporangiospore", "coenocytic", "mucormycosis", "tempeh"],
      diagrams: ["Draw Rhizopus with sporangia and rhizoids.", "Draw the zygomycete sexual cycle."],
      questions: [
        ["Explain how Rhizopus spreads rapidly on bread.", "It grows fast with coenocytic hyphae, produces aerial sporangiophores with many sporangiospores, and the spores disperse through air. When conditions are favourable, it colonizes the substrate quickly.", "Explain"],
        ["Why is mucormycosis a concern in immunocompromised patients?", "Mucorales can grow rapidly in tissues, invade blood vessels and cause necrosis. Patients with diabetes, neutropenia or immunosuppression cannot contain the infection. Early diagnosis and antifungal therapy are critical.", "Apply"],
        ["Compare asexual and sexual reproduction in Rhizopus.", "Asexual reproduction produces sporangiospores in sporangia by mitosis. Sexual reproduction involves compatible hyphae, plasmogamy, karyogamy and zygospore formation, followed by meiosis. The sexual cycle is slower but creates diversity and a survival stage.", "Evaluate"]
      ],
      trap: "Calling Rhizopus an Ascomycete; forgetting that zygospores are sexual spores.",
      bridgeIn: "Recall coenocytic hyphae and spore types.",
      bridgeOut: "Next practical: identify Rhizopus and Mucor cultures.",
      linkQuestion: "How would you distinguish Rhizopus from Aspergillus under the microscope?"
    },
    {
      title: "Ascomycota",
      source: "Provisional · course outline Week 11",
      unit: "Week 11 · Ascomycota",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Ascomycota are named for the ascus, a sac that contains ascospores.",
        "Sexual reproduction: plasmogamy → dikaryon → karyogamy → meiosis → ascospores.",
        "Ascocarps: cleistothecium (closed), perithecium (flask-shaped), apothecium (cup-shaped).",
        "Asexual reproduction by conidia on conidiophores is very common.",
        "Examples: Aspergillus, Penicillium, Saccharomyces, Neurospora, Claviceps, plant pathogens.",
        "Aspergillus and Penicillium are important in food spoilage, industrial enzymes and pharmaceuticals.",
        "Saccharomyces cerevisiae is the model yeast for fermentation and genetics.",
        "Many ascomycetes are plant pathogens (e.g., powdery mildews, apple scab) and some produce mycotoxins."
      ],
      terms: ["Ascomycota", "ascus", "ascospore", "ascocarp", "cleistothecium", "perithecium", "apothecium", "conidium", "Aspergillus", "Penicillium", "Saccharomyces", "Neurospora"],
      diagrams: ["Draw an ascus with ascospores.", "Draw the three ascocarp types."],
      questions: [
        ["Explain how the ascus and ascocarp contribute to sexual reproduction in Ascomycota.", "The ascus is the site of karyogamy and meiosis, producing ascospores. The ascocarp protects the asci and assists spore dispersal. Together they increase survival and reproductive success.", "Explain"],
        ["Compare Aspergillus and Penicillium in economic importance.", "Both are common moulds and industrial workhorses. Aspergillus niger produces citric acid and enzymes; Penicillium produces penicillin and cheese flavours, but also spoils food and produces mycotoxins. Their impact depends on species and context.", "Apply"],
        ["Why is Saccharomyces cerevisiae a model organism?", "It is a simple eukaryotic cell that grows rapidly, is easy to manipulate genetically, and shares core cellular processes with higher eukaryotes. It underpins studies of cell cycle, metabolism, genetics and biotechnology.", "Evaluate"]
      ],
      trap: "Confusing ascus with basidium; thinking all Ascomycota are unicellular; forgetting that conidia are asexual.",
      bridgeIn: "Recall sexual reproduction and spore types.",
      bridgeOut: "Next practical: identify asci and conidia in cultures.",
      linkQuestion: "How would you distinguish an ascocarp from a basidiocarp?"
    },
    {
      title: "Basidiomycota",
      source: "Provisional · course outline Week 12",
      unit: "Week 12 · Basidiomycota",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Basidiomycota are named for the basidium, which bears basidiospores externally.",
        "They have a long-lived dikaryotic mycelium with clamp connections.",
        "Basidiocarps include mushrooms, brackets, puffballs and rust/smut structures.",
        "Sexual reproduction: plasmogamy → dikaryon → karyogamy in basidium → meiosis → basidiospores.",
        "Asexual reproduction occurs by conidia, fragmentation or budding in some groups.",
        "Important groups: mushrooms, rusts (Puccinia), smuts (Ustilago), wood-decay fungi.",
        "Rusts and smuts are major plant pathogens with complex life cycles and multiple hosts.",
        "Many basidiomycetes are ectomycorrhizal or important decomposers of wood."
      ],
      terms: ["Basidiomycota", "basidium", "basidiospore", "basidiocarp", "dikaryon", "clamp connection", "rust", "smut", "Puccinia", "Ustilago", "ectomycorrhiza"],
      diagrams: ["Draw a basidium with basidiospores.", "Draw the mushroom life cycle.", "Draw a rust life cycle with two hosts."],
      questions: [
        ["Explain why the dikaryotic stage is so prominent in Basidiomycota.", "After plasmogamy, compatible nuclei divide together in the dikaryon without fusing. This extended stage allows the mycelium to grow and colonize before karyogamy and meiosis occur in the basidium. It combines genetic diversity with vigorous growth.", "Explain"],
        ["Compare rusts and smuts as plant pathogens.", "Rusts often have complex life cycles with multiple hosts and produce rusty pustules of spores; smuts replace grain with dark spore masses. Both reduce yield and require resistant varieties and cultural control.", "Apply"],
        ["Why are ectomycorrhizal Basidiomycota important for forest trees?", "They form a mantle and Hartig net, increasing water and nutrient uptake, especially phosphorus and nitrogen, in exchange for photosynthates. They improve tree growth and forest resilience.", "Evaluate"]
      ],
      trap: "Confusing basidiospores with ascospores; thinking all Basidiomycota form mushrooms; forgetting the dikaryon.",
      bridgeIn: "Recall clamp connections and dolipore septa.",
      bridgeOut: "Next practical: identify basidia and basidiospores in mushroom gills.",
      linkQuestion: "How would you distinguish a rust from a smut on a cereal crop?"
    },
    {
      title: "Tropical fungal pathogens",
      source: "Provisional · course outline Week 13",
      unit: "Week 13 · Tropical pathogens",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Dermatophytes (Trichophyton, Microsporum, Epidermophyton) cause ringworm and athlete's foot by digesting keratin.",
        "Candida albicans is a commensal yeast that becomes pathogenic when immunity or microbiota is disturbed; forms pseudohyphae and biofilms.",
        "Cryptococcus neoformans causes meningitis, especially in immunocompromised patients.",
        "Histoplasma capsulatum causes respiratory infection; Sporothrix schenckii causes sporotrichosis after plant/soil contact.",
        "Major tropical crop pathogens include Magnaporthe oryzae (rice blast), Puccinia graminis (wheat rust), Hemileia vastatrix (coffee rust), Phytophthora megakarya (cocoa black pod), Fusarium species (wilt and mycotoxins).",
        "Diagnosis uses microscopy, culture, antigen tests and molecular methods.",
        "Control combines resistant varieties, cultural practices, fungicides and biosecurity."
      ],
      terms: ["dermatophyte", "Trichophyton", "Candida albicans", "Cryptococcus neoformans", "Histoplasma", "Sporothrix", "ringworm", "sporotrichosis", "mycosis", "azoles", "echinocandins"],
      diagrams: ["Draw a dermatophyte infection cycle.", "Draw a comparison table of major tropical fungal pathogens."],
      questions: [
        ["Why do dermatophytes infect skin, hair and nails but not deeper tissues?", "They produce keratinases and colonize keratinized tissues. They are adapted to the skin surface and usually cannot invade deeper tissue in healthy people. Immunity and skin integrity limit them.", "Explain"],
        ["Explain why Candida albicans is both a commensal and an opportunistic pathogen.", "It normally lives on mucosal surfaces without causing disease. Antibiotics, immunosuppression or barrier damage can allow overgrowth, pseudohypha formation, biofilm formation and invasion. The host–microbe balance determines the outcome.", "Apply"],
        ["A farmer's cocoa pods show black lesions after heavy rain. Outline the diagnosis and control plan.", "Suspect Phytophthora black pod. Confirm by symptoms, microscopy of zoospores/sporangia and culture. Control with weekly removal and burial of infected pods, pruning and drainage, and COCOBOD-approved copper or metalaxyl sprays timed to rains. Avoid anti-chitin fungicides.", "Evaluate"]
      ],
      trap: "Treating all fungal infections with the same antifungal; forgetting that Phytophthora is an Oomycete; ignoring antifungal resistance.",
      bridgeIn: "Recall plant pathology and the Oomycete distinction from the economic lecture.",
      bridgeOut: "Next practical: identify dermatophytes or Candida from culture plates.",
      linkQuestion: "How would you distinguish a dermatophyte from Candida in a skin scraping?"
    }
  ]
});
