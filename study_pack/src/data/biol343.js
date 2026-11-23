window.STUDY_DATA.courses.push({
  code: "BIOL 343",
  title: "Molecular Biology & Technology",
  short: "Molecular Biology",
  kind: "theory",
  subject: "Molecular Biology",
  partner: "BIOL 345",
  color: "#4527a0",
  status: "provisional",
  credits: 3,
  assessment: { ca: 40, exam: 60 },
  source: "Provisional — built from standard molecular biology syllabus",
  note: "No lecture slides were supplied. These sections follow a standard molecular biology and biotechnology sequence; check against the lecturer's notes and past questions.",
  bridge: {
    in: "Tuesday's BIOL 345 practical performed the technique; tonight's theory explains the principle and result.",
    out: "Next Tuesday's practical applies tonight's theory to a new technique.",
    linkQuestion: "You run a PCR and get no band. List three possible reasons and the control you would use to distinguish them."
  },
  sections: [
    {
      title: "DNA structure, replication and repair",
      source: "Provisional · standard syllabus",
      unit: "Module 1 · DNA",
      priority: "core",
      provisional: true,
      mustKnow: [
        "DNA is a double helix of antiparallel strands with complementary base pairing (A–T, G–C).",
        "Replication is semi-conservative: each daughter molecule has one old and one new strand.",
        "Key enzymes: helicase, primase, DNA polymerase, ligase, topoisomerase.",
        "Leading strand is synthesized continuously; lagging strand is synthesized in Okazaki fragments.",
        "Proofreading and mismatch repair correct replication errors.",
        "DNA damage repair pathways: direct repair, excision repair, mismatch repair, double-strand break repair.",
        "Telomeres protect chromosome ends; telomerase extends them in germ and cancer cells."
      ],
      terms: ["double helix", "semi-conservative", "helicase", "polymerase", "primase", "ligase", "Okazaki fragment", "proofreading", "mismatch repair", "telomere", "telomerase"],
      diagrams: ["Draw a replication fork and label the leading and lagging strands.", "Draw base pairing and the antiparallel strands."],
      questions: [
        ["Explain why replication is described as semi-conservative and why this matters.", "Each new double helix contains one parental strand and one newly synthesized strand. This preserves the original sequence and allows accurate copying, with each strand serving as a template.", "Explain"],
        ["What would happen if DNA ligase were non-functional?", "Okazaki fragments and repaired nicks would not be sealed. The lagging strand would remain fragmented, replication would be incomplete and DNA damage repair would fail, leading to genome instability.", "Apply"]
      ],
      trap: "Saying replication is conservative; forgetting that DNA polymerase needs a primer; mixing leading and lagging strands.",
      bridgeIn: "Recall the DNA extraction and gel results from Tuesday's practical.",
      bridgeOut: "Tuesday's practical: PCR and restriction digests depend on DNA structure.",
      linkQuestion: "How would you detect DNA degradation on an agarose gel?"
    },
    {
      title: "Transcription and RNA processing",
      source: "Provisional · standard syllabus",
      unit: "Module 2 · Transcription",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Transcription copies DNA into RNA using RNA polymerase.",
        "Promoters determine where and in which direction transcription starts.",
        "In prokaryotes, transcription and translation are coupled; in eukaryotes they are separated by the nuclear envelope.",
        "Eukaryotic mRNA processing: 5′ cap, poly-A tail and splicing of introns.",
        "Alternative splicing produces multiple proteins from one gene.",
        "RNA types: mRNA, tRNA, rRNA, snRNA, miRNA, lncRNA.",
        "Transcription is regulated by transcription factors and chromatin state."
      ],
      terms: ["transcription", "RNA polymerase", "promoter", "intron", "exon", "splicing", "5′ cap", "poly-A tail", "alternative splicing", "transcription factor"],
      diagrams: ["Draw the transcription bubble and the mRNA processing steps."],
      questions: [
        ["Compare transcription in prokaryotes and eukaryotes.", "Prokaryotes have a single RNA polymerase, coupled transcription–translation and no introns. Eukaryotes have three RNA polymerases, nuclear transcription, mRNA processing (cap, tail, splicing) and separate translation in the cytoplasm.", "Explain"],
        ["Why is alternative splicing important for proteome diversity?", "It joins different exon combinations from the same gene, producing multiple mRNA variants and proteins. This expands the proteome without increasing gene number and allows tissue-specific regulation.", "Apply"]
      ],
      trap: "Thinking RNA polymerase needs a primer; confusing introns with exons; forgetting the 5′ cap.",
      bridgeIn: "Recall DNA structure and base pairing.",
      bridgeOut: "Tuesday's practical: RT-PCR and expression analysis depend on mRNA.",
      linkQuestion: "How would you measure the expression level of a gene?"
    },
    {
      title: "Translation and protein synthesis",
      source: "Provisional · standard syllabus",
      unit: "Module 3 · Translation",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Translation converts mRNA codons into amino acid sequences on ribosomes.",
        "The genetic code is triplet, degenerate, non-overlapping and universal.",
        "tRNA brings amino acids; the anticodon pairs with the mRNA codon.",
        "Ribosome sites: A (aminoacyl), P (peptidyl), E (exit).",
        "Initiation, elongation and termination require initiation factors, GTP and release factors.",
        "Post-translational modifications: folding, cleavage, glycosylation, phosphorylation, ubiquitination.",
        "Protein targeting directs proteins to the nucleus, mitochondria, ER, chloroplast or secretion."
      ],
      terms: ["translation", "codon", "anticodon", "tRNA", "ribosome", "A site", "P site", "E site", "initiation factor", "release factor", "post-translational modification"],
      diagrams: ["Draw the ribosome with A, P and E sites and a growing polypeptide."],
      questions: [
        ["Explain why the genetic code is called degenerate and why this is advantageous.", "Multiple codons can specify the same amino acid. This buffers some mutations (especially third-base changes) and reduces the chance that a point mutation changes the protein. It also allows wobble pairing.", "Explain"],
        ["How can a single nucleotide change cause a disease?", "It can change a codon (missense), create a stop codon (nonsense), shift the reading frame (frameshift) or alter splicing/regulation. The result can be a non-functional or mislocalised protein.", "Apply"]
      ],
      trap: "Confusing codons with anticodons; thinking one codon can specify multiple amino acids; ignoring reading frame.",
      bridgeIn: "Recall transcription and mRNA processing.",
      bridgeOut: "Tuesday's practical: Western blot detects the protein product.",
      linkQuestion: "How would you predict the effect of a frameshift mutation?"
    },
    {
      title: "Gene regulation and mutation",
      source: "Provisional · standard syllabus",
      unit: "Module 4 · Regulation and mutation",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Prokaryotic regulation: operons (lac, trp), repressors, activators, catabolite repression.",
        "Eukaryotic regulation: chromatin remodelling, histone modification, DNA methylation, transcription factors, enhancers, silencers.",
        "Post-transcriptional regulation: miRNA, RNA stability, alternative splicing.",
        "Mutation types: substitution (missense, nonsense, silent), insertion, deletion, frameshift, duplication, inversion.",
        "Mutagens: UV, ionizing radiation, chemicals, viruses.",
        "Repair systems counteract mutation; failure leads to genome instability and cancer.",
        "Genetic variation is the raw material of evolution but can also cause disease."
      ],
      terms: ["operon", "repressor", "activator", "chromatin", "methylation", "enhancer", "miRNA", "missense", "nonsense", "frameshift", "mutagen"],
      diagrams: ["Draw the lac operon in repressed and induced states.", "Draw the classes of point mutations."],
      questions: [
        ["Explain the lac operon in the presence and absence of lactose.", "Without lactose, the repressor binds the operator and blocks transcription. With lactose, the inducer binds the repressor, which releases the operator; RNA polymerase transcribes the genes. CAP-cAMP adds positive control when glucose is low.", "Explain"],
        ["Compare a silent, missense and nonsense mutation.", "Silent: codon changes but amino acid stays the same. Missense: amino acid changes. Nonsense: codon becomes a stop codon, truncating the protein. Effects range from none to severe.", "Apply"]
      ],
      trap: "Thinking all mutations are harmful; forgetting epigenetic regulation; confusing an operon with a single gene.",
      bridgeIn: "Recall transcription and translation.",
      bridgeOut: "Tuesday's practical: mutation detection and sequencing.",
      linkQuestion: "How would you determine whether a mutation is pathogenic?"
    },
    {
      title: "Recombinant DNA, PCR and sequencing",
      source: "Provisional · standard syllabus",
      unit: "Module 5 · Biotechnology",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Recombinant DNA joins DNA fragments from different sources.",
        "Restriction enzymes cut DNA at specific recognition sites; sticky ends allow ligation.",
        "Plasmids are vectors with an origin of replication, selectable marker and multiple cloning site.",
        "Transformation introduces recombinant DNA into bacteria; selection uses antibiotics.",
        "PCR: denaturation, annealing, extension; requires template, primers, dNTPs, Taq polymerase, buffer and Mg2+.",
        "Gel electrophoresis separates DNA by size; DNA is negatively charged and moves toward the anode.",
        "Sanger sequencing uses dideoxynucleotides to terminate chains; next-generation sequencing is massively parallel.",
        "Blotting: Southern (DNA), Northern (RNA), Western (protein)."
      ],
      terms: ["recombinant DNA", "restriction enzyme", "sticky end", "ligase", "plasmid", "vector", "transformation", "PCR", "primer", "Taq polymerase", "gel electrophoresis", "Sanger sequencing", "Southern blot", "Northern blot", "Western blot"],
      diagrams: ["Draw the PCR cycle.", "Draw a plasmid vector with its key features."],
      questions: [
        ["Explain the three steps of PCR and why each temperature is needed.", "Denaturation (~95 °C) separates strands; annealing (~50–65 °C) lets primers bind; extension (~72 °C) lets Taq polymerase synthesize DNA. Cycling amplifies the target exponentially.", "Explain"],
        ["You run a PCR and get no band. List three possible reasons and the control you would use to distinguish them.", "Possible reasons: degraded template, wrong primers/annealing temperature, missing reagent or inhibitor. Controls: a positive control with known template, a no-template control, and a housekeeping primer pair. Also check gel loading and cycling conditions.", "Apply"]
      ],
      trap: "Forgetting the no-template control; confusing Southern/Northern/Western; thinking PCR can amplify any sequence without primers.",
      bridgeIn: "Recall DNA replication and base pairing.",
      bridgeOut: "Tuesday's practical: perform PCR, digest and gel electrophoresis.",
      linkQuestion: "How would you confirm that a PCR product is the intended target?"
    },
    {
      title: "CRISPR, genomics and bioinformatics",
      source: "Provisional · standard syllabus",
      unit: "Module 6 · Modern biotechnology",
      priority: "support",
      provisional: true,
      mustKnow: [
        "CRISPR-Cas9 uses a guide RNA to target a specific DNA sequence and Cas9 to cut it.",
        "Repair after cutting can knock out a gene (NHEJ) or insert a sequence (HDR).",
        "Applications: gene therapy, crop improvement, functional genomics, diagnostics.",
        "Ethical issues: off-target effects, germline editing, equity and regulation.",
        "Genomics: whole-genome sequencing, assembly, annotation and comparative genomics.",
        "Bioinformatics tools: BLAST, sequence alignment, phylogenetic analysis, databases (GenBank, UniProt).",
        "Multi-omics: genomics, transcriptomics, proteomics, metabolomics."
      ],
      terms: ["CRISPR", "Cas9", "guide RNA", "NHEJ", "HDR", "off-target", "genomics", "BLAST", "alignment", "phylogenetics", "multi-omics"],
      diagrams: ["Draw the CRISPR-Cas9 targeting complex.", "Draw the omics workflow from sample to interpretation."],
      questions: [
        ["Explain how CRISPR-Cas9 can knock out a gene.", "The guide RNA directs Cas9 to a complementary DNA sequence, where Cas9 makes a double-strand break. Error-prone NHEJ repairs the break, often creating insertions or deletions that disrupt the reading frame and knock out the gene.", "Explain"],
        ["Why are off-target effects a major safety concern for CRISPR therapy?", "Cas9 can cut similar sequences elsewhere in the genome, causing unintended mutations. These could disrupt tumour suppressors or essential genes. Careful guide design, delivery and off-target assays are required.", "Evaluate"]
      ],
      trap: "Thinking CRISPR only edits genes; ignoring off-target effects and ethics; confusing genomics with genetics.",
      bridgeIn: "Recall recombinant DNA and PCR.",
      bridgeOut: "Tuesday's practical: sequence analysis and bioinformatics.",
      linkQuestion: "How would you check a guide RNA for potential off-target sites?"
    }
  ]
});

window.STUDY_DATA.courses.push({
  code: "BIOL 345",
  title: "Molecular Biology Practical",
  short: "Molecular Practical",
  kind: "practical",
  subject: "Molecular Biology",
  partner: "BIOL 343",
  color: "#283593",
  status: "provisional",
  credits: 2,
  assessment: { ca: 60, exam: 40 },
  source: "Provisional — standard molecular biology practical syllabus",
  note: "No practical manual was supplied. These are the standard techniques; check the manual for exact protocols, recipes and calculations.",
  bridge: {
    in: "Saturday's BIOL 343 theory explains the principle behind today's technique.",
    out: "Next Saturday's theory consolidates the practical results.",
    linkQuestion: "You run a PCR and get no band. List three possible reasons and the control you would use to distinguish them."
  },
  sections: [
    {
      title: "DNA extraction and agarose gel electrophoresis",
      source: "Provisional · standard practical",
      unit: "Practical 1",
      priority: "core",
      provisional: true,
      mustKnow: [
        "DNA extraction: lyse cells, remove proteins and RNA, precipitate DNA, resuspend in buffer.",
        "Key reagents: lysis buffer, detergent, proteinase K, phenol/chloroform or column, ethanol/isopropanol, TE buffer.",
        "Agarose gel electrophoresis separates DNA by size; DNA is negatively charged and moves toward the anode.",
        "Agarose concentration determines resolution: higher % for small fragments, lower % for large fragments.",
        "Loading dye contains tracking dye and glycerol; a DNA ladder provides size reference.",
        "Ethidium bromide or safer stains visualize DNA under UV.",
        "Purity: A260/A280 ratio ~1.8 for DNA; lower indicates protein contamination."
      ],
      terms: ["lysis", "proteinase K", "phenol-chloroform", "ethanol precipitation", "agarose", "electrophoresis", "loading dye", "DNA ladder", "A260/A280"],
      diagrams: ["Draw a gel electrophoresis setup and a typical gel result."],
      questions: [
        ["Explain why DNA moves toward the anode during electrophoresis.", "DNA's phosphate backbone is negatively charged at neutral pH, so it migrates toward the positive electrode (anode). Smaller fragments move faster through the gel matrix, allowing size separation.", "Explain"],
        ["A DNA sample has A260/A280 = 1.4. What does this suggest and how would you improve it?", "The ratio is below the expected ~1.8, suggesting protein or phenol contamination. Reprecipitate or purify with a column, wash with 70% ethanol and resuspend in TE. Recheck the ratio.", "Apply"]
      ],
      trap: "Loading too much DNA; forgetting the ladder; using the wrong agarose percentage.",
      bridgeIn: "Recall DNA structure and charge.",
      bridgeOut: "Saturday's theory: restriction enzymes and cloning.",
      linkQuestion: "How would you estimate the size of an unknown DNA band?"
    },
    {
      title: "PCR and restriction digestion",
      source: "Provisional · standard practical",
      unit: "Practical 2",
      priority: "core",
      provisional: true,
      mustKnow: [
        "PCR mix: template DNA, forward and reverse primers, dNTPs, Taq polymerase, buffer, MgCl2, nuclease-free water.",
        "Cycling: initial denaturation, 25–35 cycles of denaturation/annealing/extension, final extension, hold.",
        "Annealing temperature depends on primer Tm; too low gives non-specific bands, too high gives no product.",
        "Controls: positive control, no-template control, internal control.",
        "Restriction enzymes cut specific palindromic sequences; star activity can occur under non-optimal conditions.",
        "Restriction digest is used for cloning, mapping and genotyping.",
        "Analyse products by gel electrophoresis with a ladder."
      ],
      terms: ["PCR", "primer", "Tm", "annealing", "Taq", "dNTP", "MgCl2", "restriction enzyme", "palindrome", "star activity", "restriction digest"],
      diagrams: ["Draw a PCR cycle and a restriction map."],
      questions: [
        ["Explain how you would optimise a PCR that produces multiple non-specific bands.", "Increase the annealing temperature, reduce cycle number, adjust Mg2+ and primer concentration, use touchdown PCR or redesign primers. Include a no-template control and check primer specificity.", "Apply"],
        ["Why is a no-template control essential in PCR?", "It detects contamination of reagents or workspace with template or amplicons. A band in the no-template control means the result is unreliable and the experiment must be repeated after cleaning.", "Explain"]
      ],
      trap: "Forgetting the no-template control; using the wrong annealing temperature; over-digesting with restriction enzyme.",
      bridgeIn: "Recall PCR theory and primer design.",
      bridgeOut: "Saturday's theory: cloning and transformation.",
      linkQuestion: "How would you confirm a restriction digest worked?"
    },
    {
      title: "Cloning and transformation",
      source: "Provisional · standard practical",
      unit: "Practical 3",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Cloning: insert DNA into a vector, transform host cells, select and screen recombinants.",
        "Vector features: origin of replication, selectable marker, promoter, multiple cloning site.",
        "Ligation joins insert and vector using DNA ligase; compatible sticky ends improve efficiency.",
        "Transformation methods: heat shock, electroporation, chemical competence.",
        "Selection: antibiotic resistance; screening: blue-white colony, PCR, restriction digest or sequencing.",
        "Controls: vector-only, insert-only, no-DNA.",
        "Efficiency depends on insert:vector ratio, ligation time, competent cell quality and recovery."
      ],
      terms: ["cloning", "vector", "insert", "ligation", "transformation", "competent cell", "heat shock", "selectable marker", "blue-white screening", "colony PCR"],
      diagrams: ["Draw the cloning workflow from insert to screened colony."],
      questions: [
        ["Explain the role of the selectable marker in cloning.", "It allows only cells carrying the vector to grow on selective medium. Without it, non-transformed cells would overgrow the culture. Antibiotic resistance is the most common marker.", "Explain"],
        ["A transformation gives no colonies. List three possible causes and a control.", "Possible causes: poor competent cells, failed ligation, wrong antibiotic or recovery time. Controls: vector-only transformation, no-DNA transformation and a known supercoiled plasmid. Check plate antibiotic and incubation.", "Apply"]
      ],
      trap: "Forgetting the vector-only control; using too much insert; ignoring recovery time.",
      bridgeIn: "Recall restriction digestion and ligation.",
      bridgeOut: "Saturday's theory: recombinant DNA and selection.",
      linkQuestion: "How would you distinguish a recombinant from a non-recombinant colony?"
    },
    {
      title: "Protein analysis: SDS-PAGE and Western blot",
      source: "Provisional · standard practical",
      unit: "Practical 4",
      priority: "support",
      provisional: true,
      mustKnow: [
        "SDS-PAGE separates proteins by molecular weight; SDS denatures and gives a uniform negative charge.",
        "Stacking gel concentrates proteins; resolving gel separates them.",
        "Protein ladder provides size reference; loading dye contains tracking dye and reducing agent.",
        "Coomassie or silver staining visualizes total protein.",
        "Western blot transfers proteins to a membrane, blocks, incubates with primary and secondary antibodies, and detects with substrate or chemiluminescence.",
        "Controls: positive, negative, loading control (e.g., actin, GAPDH).",
        "Quantification requires a standard curve and consistent loading."
      ],
      terms: ["SDS-PAGE", "stacking gel", "resolving gel", "Coomassie", "Western blot", "transfer", "blocking", "primary antibody", "secondary antibody", "chemiluminescence", "loading control"],
      diagrams: ["Draw the SDS-PAGE and Western blot workflow."],
      questions: [
        ["Explain why SDS is used in SDS-PAGE.", "SDS denatures proteins and binds them in proportion to mass, giving a uniform negative charge. Proteins then migrate mainly by size through the gel, allowing molecular weight estimation.", "Explain"],
        ["Why is a loading control essential in a Western blot?", "It shows that equal amounts of protein were loaded and that transfer worked. Without it, differences in band intensity could reflect loading error rather than biological change.", "Apply"]
      ],
      trap: "Overloading the gel; forgetting the loading control; interpreting a blot without a ladder.",
      bridgeIn: "Recall translation and protein structure.",
      bridgeOut: "Saturday's theory: gene expression and protein function.",
      linkQuestion: "How would you quantify a protein band relative to a control?"
    }
  ]
});
