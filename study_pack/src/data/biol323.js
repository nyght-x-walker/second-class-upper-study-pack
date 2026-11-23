window.STUDY_DATA.courses.push({
  code: "BIOL 323",
  title: "Chordate Development & Evolution II Practical",
  short: "Chordate Practical",
  kind: "practical",
  subject: "Chordate Development",
  partner: "BIOL 321",
  color: "#4e342e",
  status: "full",
  credits: 2,
  assessment: { ca: 60, exam: 40 },
  source: "Complete practical outline (22 slides, 6 practicals)",
  note: "Built from the full practical outline. Focus on labelled drawings, comparison tables and explanations of adaptations.",
  bridge: {
    in: "Friday's BIOL 321 theory explains the development behind the structures you labelled today.",
    out: "Next Thursday's practical applies Friday's theory to new specimens.",
    linkQuestion: "You dissect a tilapia and observe a two-chambered heart with a single circulation. Explain how this relates to its metabolic demand and gill respiration."
  },
  sections: [
    {
      title: "Practical 1: Chordate features and major groups",
      source: "Chapter 1, slides 2–5",
      unit: "Practical 1",
      priority: "core",
      mustKnow: [
        "Five defining chordate features: notochord, dorsal hollow nerve cord, pharyngeal slits/pouches, endostyle (or thyroid derivative), post-anal tail.",
        "Three subphyla: Urochordata (tunicates), Cephalochordata (lancelets) and Vertebrata.",
        "Vertebrates include jawless Agnatha and jawed Gnathostomata.",
        "In fish, gills lie beneath the operculum; fins and tail are locomotor structures.",
        "The vertebral column replaces most of the notochord in adult vertebrates.",
        "Pharyngeal structures support respiration in fish and contribute to other structures in land vertebrates.",
        "Practical output: labelled tilapia drawing, comparison table and a simple cladogram.",
        "Compare fish, frog/toad, lizard/snake, chicken and mammal by body covering, limbs/fins, vertebrae and adult pharyngeal slits."
      ],
      terms: ["notochord", "dorsal hollow nerve cord", "pharyngeal slits", "endostyle", "post-anal tail", "Urochordata", "Cephalochordata", "Vertebrata", "Agnatha", "Gnathostomata", "operculum", "cladogram"],
      diagrams: ["Draw and label a tilapia showing the five chordate features.", "Draw a simple cladogram of the three subphyla."],
      questions: [
        ["List the five chordate features and state which are lost or retained in adult tunicates, lancelets and fish.", "All five are present at some stage. Adult tunicates retain pharyngeal slits and endostyle but lose the notochord, nerve cord and tail. Lancelets retain all five as adults. Fish retain the nerve cord, pharyngeal slits, endostyle/thyroid and post-anal tail; the notochord is largely replaced by vertebrae.", "Explain"],
        ["Construct a comparison table for fish, frog, lizard, chicken and mammal covering body covering, limbs, vertebrae and adult pharyngeal slits.", "Fish: scales/mucus, fins, vertebrae present, gill slits. Frog: moist glandular skin, four limbs, vertebrae, gill slits only in larvae. Lizard: dry keratinized scales, four limbs, vertebrae, pharyngeal slits modified. Chicken: feathers, wings/legs, vertebrae, pharyngeal slits embryonic. Mammal: hair, four limbs, vertebrae, pharyngeal slits embryonic.", "Apply"],
        ["Why is the notochord replaced by the vertebral column in adult vertebrates, but retained in amphioxus?", "The vertebral column provides stronger support and protection for the nerve cord and allows muscle attachment for active locomotion. Amphioxus retains the notochord because it lacks a vertebral column and uses the notochord for support throughout life.", "Evaluate"]
      ],
      trap: "Confusing pharyngeal slits with gills; saying all chordates retain all five features as adults.",
      bridgeIn: "Recall the chordate features from BIOL 321 lectures.",
      bridgeOut: "Friday's theory: how these features develop in embryos.",
      linkQuestion: "Which of the five features is most useful for classifying a specimen, and why?"
    },
    {
      title: "Practical 2: The sea squirt (tunicate)",
      source: "Chapter 2, slides 6–8",
      unit: "Practical 2",
      priority: "core",
      mustKnow: [
        "Tunicates are marine chordates; the tadpole larva carries all five chordate features.",
        "Retrogressive metamorphosis: the larva settles, absorbs its tail, notochord and most of its nerve cord.",
        "The adult is usually sessile and filter-feeding, enclosed in a tough tunic.",
        "Incurrent/oral siphon draws in water with food and oxygen; excurrent/atrial siphon expels filtered water and wastes.",
        "Pharyngeal basket: cilia and mucus trap food particles and support gas exchange.",
        "Endostyle produces mucus and is homologous to the vertebrate thyroid.",
        "Adult has a reduced neural ganglion and a tubular heart.",
        "Label: tunic, attachment base, both siphons, branchial basket, endostyle, gut, heart and gonads.",
        "Amphioxus differs because its notochord persists along the body throughout life."
      ],
      terms: ["tunicate", "tunic", "retrogressive metamorphosis", "oral siphon", "atrial siphon", "pharyngeal basket", "endostyle", "neural ganglion", "amphioxus"],
      diagrams: ["Draw and label the adult tunicate.", "Draw the tunicate larva and adult side by side to show metamorphosis."],
      questions: [
        ["Explain retrogressive metamorphosis in tunicates.", "The free-swimming tadpole larva has a notochord, dorsal nerve cord and tail. When it settles, it absorbs the tail, notochord and most of the nerve cord, and develops into a sessile filter-feeding adult. The adult retains pharyngeal slits and endostyle.", "Explain"],
        ["Compare the larval and adult tunicate in terms of locomotion, feeding and chordate features.", "The larva is mobile and uses its tail and notochord; it does not feed. The adult is sessile, filter-feeds with siphons and pharyngeal basket, and has lost the notochord, tail and most of the nerve cord. Both retain pharyngeal slits and endostyle.", "Apply"],
        ["Why is the endostyle considered homologous to the vertebrate thyroid?", "Both are derived from the same embryonic region and share developmental genes. The endostyle produces mucus for filter-feeding; the vertebrate thyroid produces hormones. Homology is based on ancestry and development, not function.", "Evaluate"]
      ],
      trap: "Thinking adult tunicates have no chordate features; confusing the two siphons; forgetting that the larva is the chordate stage.",
      bridgeIn: "Recall the five chordate features and the three subphyla.",
      bridgeOut: "Friday's theory: metamorphosis and thyroid evolution.",
      linkQuestion: "How would you identify the oral and atrial siphons on a preserved tunicate?"
    },
    {
      title: "Practical 3: Integument and its derivatives",
      source: "Chapter 3, slides 9–11",
      unit: "Practical 3",
      priority: "core",
      mustKnow: [
        "Integument = outer epidermis + inner dermis.",
        "Functions: protection, water balance, temperature regulation, sensation and colouration.",
        "Fish: mucus and scales; bony fish have cycloid or ctenoid scales.",
        "Amphibians: thin, moist, glandular skin; can contribute to respiration.",
        "Reptiles: dry, keratinized scales; shedding is called ecdysis.",
        "Birds: feathers, keratinous beak, claws and scales on feet.",
        "Mammals: hair plus sweat, sebaceous and mammary glands.",
        "Fish scales show growth rings (circuli) and radii.",
        "Feather parts: rachis, vane, barbs and calamus; compare contour, flight and down feathers.",
        "Hair layers under magnification: cuticle, cortex and medulla.",
        "Key idea: fish dermal scales differ from reptilian epidermal scales; feathers and hair are keratin-based epidermal derivatives."
      ],
      terms: ["integument", "epidermis", "dermis", "cycloid scale", "ctenoid scale", "circuli", "ecdysis", "rachis", "vane", "barbs", "calamus", "cuticle", "cortex", "medulla"],
      diagrams: ["Draw a fish scale and label circuli and radii.", "Draw a feather and label rachis, vane, barbs and calamus.", "Draw a hair shaft with cuticle, cortex and medulla."],
      questions: [
        ["Compare fish scales and reptile scales in origin and function.", "Fish scales are dermal (bony) structures covered by epidermis; they protect and reduce drag. Reptile scales are epidermal, keratinized and reduce water loss. They are not homologous as scales.", "Explain"],
        ["Explain how amphibian skin is adapted for both respiration and water balance.", "It is thin, moist and highly vascular, allowing cutaneous gas exchange. Mucus glands keep it moist; other glands secrete toxins. Because it is permeable, amphibians are vulnerable to desiccation and must live in moist habitats.", "Apply"],
        ["Why are feathers and hair considered homologous as keratin derivatives but not as scales?", "Both are epidermal keratin structures with similar developmental origins, but they differ in structure and function from reptilian scales. They are part of the amniote integument and are best compared as epidermal appendages, not as direct scale homologues.", "Evaluate"]
      ],
      trap: "Saying fish scales and reptile scales are the same; confusing hair cortex with cuticle.",
      bridgeIn: "Recall the comparative body coverings from the theory lecture.",
      bridgeOut: "Friday's theory: how skin derivatives develop from germ layers.",
      linkQuestion: "How would you use scale growth rings to estimate a fish's age?"
    },
    {
      title: "Practical 4: Skeletal system",
      source: "Chapter 4, slides 12–14",
      unit: "Practical 4",
      priority: "core",
      mustKnow: [
        "Skeleton functions: support, organ protection, muscle attachment and calcium storage.",
        "Axial skeleton: skull, vertebral column, ribs and sternum.",
        "Appendicular skeleton: girdles and limbs.",
        "Sharks and rays have cartilaginous skeletons; bony fish and tetrapods have mostly bony skeletons.",
        "Vertebral types: fish — amphicoelous; frog — procoelous; chicken — heterocoelous; goat/cow — acoelous.",
        "Mammals have a single dentary bone in the lower jaw; many other vertebrates have multiple jaw bones.",
        "Observe: centrum, neural arch, neural spine, vertebral foramen, cervical to caudal regions, ribs, sternum and girdles.",
        "Pentadactyl limb pattern: humerus → radius/ulna → carpals → metacarpals → phalanges.",
        "Bird flight adaptations: pneumatic bones, keeled sternum and fused synsacrum."
      ],
      terms: ["axial skeleton", "appendicular skeleton", "amphicoelous", "procoelous", "heterocoelous", "acoelous", "centrum", "neural arch", "pentadactyl limb", "synsacrum", "pneumatic bone"],
      diagrams: ["Draw a vertebra and label centrum, neural arch, neural spine and foramen.", "Draw the pentadactyl limb and label the bones."],
      questions: [
        ["Compare the vertebral types of fish, frog, chicken and mammal.", "Fish: amphicoelous (concave at both ends). Frog: procoelous (concave anterior, convex posterior). Chicken: heterocoelous (saddle-shaped). Mammal: acoelous (flat surfaces). The shapes reflect flexibility and load-bearing.", "Explain"],
        ["Explain how the pentadactyl limb is modified for flight in birds.", "Bones are hollow/pneumatic, the sternum has a keel for flight muscles, and the synsacrum fuses vertebrae for rigidity. The forelimb bones are reduced and fused into a wing. These modifications reduce weight and increase power.", "Apply"],
        ["Why is a single dentary bone in mammals significant for classification?", "It is a distinguishing mammalian feature; other vertebrates have several jaw bones. The dentary strengthens the jaw and allows efficient chewing. The middle ear bones evolved from other jaw bones.", "Evaluate"]
      ],
      trap: "Mixing up vertebral types; thinking all fish have bone; forgetting that bird bones are pneumatic.",
      bridgeIn: "Recall the skeletal comparisons from the theory lecture.",
      bridgeOut: "Friday's theory: how the skeleton develops from mesoderm and neural crest.",
      linkQuestion: "How would you identify a vertebra as cervical, thoracic or lumbar?"
    },
    {
      title: "Practical 5: Nervous system",
      source: "Chapter 5, slides 15–17",
      unit: "Practical 5",
      priority: "core",
      mustKnow: [
        "Central nervous system: brain and spinal cord. Peripheral nervous system: cranial nerves, spinal nerves and ganglia.",
        "Primary brain vesicles: forebrain, midbrain and hindbrain.",
        "Relative brain-region size reflects sensory demands and behaviour.",
        "Olfactory bulbs: smell. Cerebrum: integration, learning and memory; enlarged and folded in mammals. Optic lobes/tectum: visual processing; prominent in fish, amphibians, reptiles and birds. Cerebellum: coordination and balance; well developed in active swimmers and birds. Medulla oblongata: breathing, heart rate and reflexes; continues into the spinal cord.",
        "In a tilapia brain, identify olfactory bulbs, cerebral hemispheres, optic lobes, cerebellum and medulla.",
        "Compare frog, chicken and mammal brains using specimens, models or charts.",
        "Observe the spinal cord in the neural canal and review dorsal and ventral roots.",
        "Cranial nerves: 10 pairs in fish and amphibians; 12 pairs in reptiles, birds and mammals.",
        "Practical output: draw the tilapia brain, record region lengths, compare relative cerebrum size and relate observations to lifestyle."
      ],
      terms: ["CNS", "PNS", "forebrain", "midbrain", "hindbrain", "olfactory bulb", "cerebrum", "optic lobe", "cerebellum", "medulla oblongata", "cranial nerve", "dorsal root", "ventral root"],
      diagrams: ["Draw the tilapia brain and label the five main regions.", "Draw a spinal cord cross-section with dorsal and ventral roots."],
      questions: [
        ["Explain how the relative size of brain regions reflects an animal's lifestyle.", "Active swimmers have large optic lobes and cerebellum for vision and coordination; mammals have large cerebrums for learning and integration; birds have large optic lobes and cerebellum for flight and vision. Brain allocation matches sensory and motor demands.", "Explain"],
        ["Compare the brains of fish, frog, chicken and mammal.", "Fish: prominent optic lobes and cerebellum, small cerebrum. Frog: relatively larger cerebrum, prominent optic lobes. Chicken: large optic lobes and cerebellum, moderate cerebrum. Mammal: large folded cerebrum and cerebellum, prominent olfactory bulbs depending on species.", "Apply"],
        ["Why do fish and amphibians have 10 pairs of cranial nerves while reptiles, birds and mammals have 12?", "The additional pairs (XI accessory and XII hypoglossal) are associated with more complex head and neck musculature and tongue control in amniotes. The pattern reflects evolutionary specialization of the vertebrate head.", "Evaluate"]
      ],
      trap: "Confusing optic lobes with eyes; forgetting that the medulla continues into the spinal cord; mixing cranial nerve numbers.",
      bridgeIn: "Recall the brain regions from the theory lecture.",
      bridgeOut: "Friday's theory: neural development and encephalization.",
      linkQuestion: "How would you relate cerebellum size to swimming activity in two fish species?"
    },
    {
      title: "Practical 6: Cardiovascular system",
      source: "Chapter 6, slides 18–21",
      unit: "Practical 6",
      priority: "core",
      mustKnow: [
        "Cardiovascular system transports gases, nutrients, wastes and hormones.",
        "Heart organisation ranges from a two-chambered fish heart to a four-chambered bird/mammal heart.",
        "Circulation patterns are linked to respiratory mode and metabolic demand.",
        "Fish: one atrium and one ventricle, plus sinus venosus and bulbus/conus arteriosus; single circulation.",
        "Amphibians: two atria and one ventricle; partly double circulation.",
        "Most reptiles: three-chambered heart with partial ventricular septum; crocodilians have four chambers.",
        "Birds and mammals: two atria and two ventricles; complete double circulation.",
        "Fish flow: body → sinus venosus → atrium → ventricle → bulbus arteriosus → ventral aorta → gills → dorsal aorta → body.",
        "In birds and mammals, identify aorta, pulmonary trunk, venae cavae, pulmonary veins and four chambers.",
        "Left ventricle has a thicker wall because it pumps blood through the systemic circulation.",
        "Aortic arches: birds retain the right aortic arch; mammals retain the left.",
        "Use demonstrator-approved specimens, gloves and safe dissection technique."
      ],
      terms: ["atrium", "ventricle", "sinus venosus", "bulbus arteriosus", "conus arteriosus", "single circulation", "double circulation", "systemic circulation", "pulmonary circulation", "aortic arch", "vena cava"],
      diagrams: ["Draw fish, amphibian, reptile and mammal hearts and label the chambers.", "Draw the fish circulation pathway."],
      questions: [
        ["Explain why fish have a two-chambered heart and single circulation.", "Blood passes from the heart to the gills for oxygenation and then directly to the body, so one pump is sufficient. The heart receives only deoxygenated blood. This suits the lower metabolic demand of ectothermic fish.", "Explain"],
        ["Compare the hearts of amphibians, reptiles, birds and mammals.", "Amphibians: two atria, one ventricle, partly double circulation. Most reptiles: two atria, one ventricle with partial septum; crocodilians four chambers. Birds and mammals: two atria, two ventricles, complete double circulation with separate pulmonary and systemic circuits.", "Apply"],
        ["Why is the left ventricle thicker than the right ventricle in mammals?", "The left ventricle pumps blood at high pressure through the systemic circulation to the whole body; the right ventricle pumps to the lungs at lower pressure. The thicker muscle generates the higher pressure.", "Evaluate"]
      ],
      trap: "Confusing the left and right aortic arches in birds and mammals; thinking amphibians have a four-chambered heart; forgetting the sinus venosus in fish.",
      bridgeIn: "Recall the heart comparisons from the theory lecture.",
      bridgeOut: "Friday's theory: cardiogenesis and the evolution of double circulation.",
      linkQuestion: "How would you trace the path of blood through a fish heart and gills?"
    }
  ]
});
