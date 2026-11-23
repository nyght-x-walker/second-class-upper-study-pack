window.STUDY_DATA.courses.push({
  code: "BIOL 329",
  title: "Biostatistics",
  short: "Biostatistics",
  kind: "skills",
  subject: "Biostatistics & Research Methods",
  partner: "BIOL 307",
  color: "#ef6c00",
  status: "partial",
  credits: 3,
  assessment: { ca: 40, exam: 60 },
  source: "Comprehensive R Programming & Statistical Analysis Tutorial (12 pages)",
  note: "Built from the R tutorial. Add your lecturer's probability, distributions and experimental design notes when available.",
  bridge: {
    in: "Friday's BIOL 307 research design determines which test you should use tonight.",
    out: "Friday's research methods session applies tonight's test to a real study design.",
    linkQuestion: "A study compares exam scores between two teaching methods. State the study design, the appropriate statistical test, and two threats to validity."
  },
  sections: [
    {
      title: "R environment, packages, help and operators",
      source: "Tutorial sections 1–2",
      unit: "R basics",
      priority: "core",
      mustKnow: [
        "getwd() shows the working directory; setwd() changes it. Use forward slashes even on Windows.",
        "install.packages() installs once; library() loads a package every session.",
        "?function and help() open documentation; ??keyword searches; example() runs examples.",
        "Assignment operator <- stores values.",
        "Comparison operators: <, >, <=, >=, ==, !=. Logical operators: !, &, |.",
        "R is case-sensitive and indexing starts at 1."
      ],
      terms: ["working directory", "package", "library", "CRAN", "assignment", "logical operator", "comparison operator", "vectorisation"],
      diagrams: ["Write the R workflow: setwd → install → library → data → analysis."],
      questions: [
        ["Write the R commands to set your working directory to a folder called R_Projects and load the tidyverse.", "setwd(\"C:/Users/YourName/Documents/R_Projects\"); library(tidyverse). Use forward slashes and quotes.", "Apply"],
        ["Explain the difference between = and == in R.", "= is an assignment operator (and can be used in function arguments); == is a logical comparison that returns TRUE or FALSE. Using = where == is intended causes assignment or errors.", "Explain"],
        ["Why does R's 1-based indexing matter when translating code from Python or C?", "R's first element is at index 1, not 0. Loops and subsetting must start at 1. Off-by-one errors are common when translating algorithms.", "Evaluate"]
      ],
      trap: "Using = instead of ==; forgetting to load a package in a new session; using backslashes in Windows paths.",
      bridgeIn: "Recall the research question from the last BIOL 307 session.",
      bridgeOut: "Friday's research methods: choose a test before you write the R code.",
      linkQuestion: "How would you document your R analysis so a collaborator can reproduce it?"
    },
    {
      title: "Core data structures: vectors, factors, matrices, data frames and lists",
      source: "Tutorial section 3",
      unit: "R data structures",
      priority: "core",
      mustKnow: [
        "Vectors are one-dimensional arrays of the same type: numeric, character or logical; create with c().",
        "Factors store categorical data with levels; relevel with levels() or factor(..., levels=...).",
        "Matrices are two-dimensional, same type; matrix(data, nrow, ncol, byrow).",
        "Data frames are tables with columns of different types; access with $, [row, col] or [[ ]].",
        "Lists are flexible containers of different types and lengths; [[ ]] returns the element, [ ] returns a sub-list.",
        "Indexing starts at 1; negative indices drop elements; names can be used instead of positions.",
        "Use str(), class(), typeof() and summary() to inspect objects."
      ],
      terms: ["vector", "factor", "level", "matrix", "data frame", "list", "indexing", "coercion", "str()", "class()"],
      diagrams: ["Draw the five data structures and their dimensions."],
      questions: [
        ["Create a data frame with a numeric, a character and a logical column, then extract the second row and the character column using three different methods.", "df <- data.frame(num=c(1,2,3), char=c(\"a\",\"b\",\"c\"), logi=c(TRUE,FALSE,TRUE)); df[2,]; df$char; df[[\"char\"]]; df[, \"char\"].", "Apply"],
        ["Explain the difference between [ ], [[ ]] and $ when accessing a list.", "[ ] returns a sub-list; [[ ]] returns the element itself; $ accesses a named element. Using [ ] when you need the element changes the output type and can break functions.", "Explain"],
        ["A dataset has a Treatment column stored as character. Why convert it to a factor before ANOVA?", "ANOVA needs a categorical grouping variable with defined levels. A factor ensures correct grouping, ordering and model contrasts. A character column may be coerced unpredictably or treated as a continuous variable.", "Evaluate"]
      ],
      trap: "Using [ ] when [[ ]] is needed; forgetting that factors have levels; assuming data frame columns are all the same type.",
      bridgeIn: "Recall variable types from research methods.",
      bridgeOut: "Friday's design: identify the response and predictor variables and their types.",
      linkQuestion: "How would you check the structure of an imported dataset before analysis?"
    },
    {
      title: "Control flow, functions and the apply family",
      source: "Tutorial sections 5–6",
      unit: "R programming",
      priority: "core",
      mustKnow: [
        "Conditionals: if, else if, else, switch().",
        "Loops: for (over elements or indices) and while (condition true).",
        "Functions encapsulate reusable code: function(arguments) { body; return(value) }.",
        "sapply() applies a function and simplifies the output to a vector; lapply() always returns a list.",
        "apply() applies a function across rows (MARGIN = 1), columns (MARGIN = 2) or cells (MARGIN = 1:2).",
        "Vectorised code is usually faster and clearer than explicit loops.",
        "Use set.seed() for reproducible random sampling."
      ],
      terms: ["if/else", "for loop", "while loop", "function", "argument", "return", "sapply", "lapply", "apply", "MARGIN", "set.seed"],
      diagrams: ["Draw a flowchart for if/else and a for loop."],
      questions: [
        ["Write a function that takes a numeric vector and returns its mean and standard deviation.", "stats_fun <- function(x) { list(mean=mean(x, na.rm=TRUE), sd=sd(x, na.rm=TRUE)) }; stats_fun(c(1,2,3,4)).", "Apply"],
        ["Explain the difference between sapply, lapply and apply.", "sapply simplifies the result to a vector or matrix; lapply always returns a list; apply works on array margins (rows/columns). Use lapply when the output lengths differ, sapply when they match, apply for matrices.", "Explain"],
        ["Why is set.seed() important in a simulation or random sampling exercise?", "It makes the random number sequence reproducible, so you and your supervisor get the same results. Without it, every run differs and debugging is difficult.", "Evaluate"]
      ],
      trap: "Growing a vector inside a loop; forgetting that sapply may simplify unexpectedly; using a loop when a vectorised function exists.",
      bridgeIn: "Recall the data structures and indexing rules.",
      bridgeOut: "Friday's research methods: automate a repeated calculation across groups.",
      linkQuestion: "How would you apply the same summary function to every column of a data frame?"
    },
    {
      title: "Data import and tidyverse wrangling",
      source: "Tutorial sections 7–8",
      unit: "Data handling",
      priority: "core",
      mustKnow: [
        "Import: read_csv() for CSV, read_tsv() for TSV, read_delim() for other delimiters, read_excel() for Excel, read_sav()/read_dta()/read_sas() for statistical files via haven.",
        "saveRDS() and readRDS() store and load a single R object.",
        "Tidyverse workflow: import → tidy (tidyr) → transform (dplyr) → visualise (ggplot2) → model → communicate.",
        "dplyr verbs: filter(), select(), mutate(), group_by(), summarise(), arrange().",
        "The pipe %>% or |> passes the output of one function into the next.",
        "Always check the imported data with str(), summary(), head() and missing-value counts."
      ],
      terms: ["read_csv", "read_excel", "read_sav", "saveRDS", "pipe", "filter", "select", "mutate", "group_by", "summarise", "arrange", "tidy data"],
      diagrams: ["Draw the tidyverse workflow."],
      questions: [
        ["Write a dplyr pipeline that filters a data frame to adults over 18, groups by sex, and calculates the mean height.", "df %>% filter(Age > 18) %>% group_by(Sex) %>% summarise(mean_height = mean(Height, na.rm = TRUE)).", "Apply"],
        ["Explain what makes a dataset 'tidy'.", "Each variable is a column, each observation is a row, and each type of observational unit is a table. Tidy data makes filtering, grouping and modelling straightforward.", "Explain"],
        ["Why should you inspect a dataset immediately after import?", "To check column types, missing values, unusual codes, duplicate rows and parsing errors. Errors caught early prevent wrong analyses. Use str(), summary(), head() and missing-value counts.", "Evaluate"]
      ],
      trap: "Assuming read_csv parsed every column correctly; forgetting na.rm = TRUE; using the wrong delimiter.",
      bridgeIn: "Recall variable types and data structures.",
      bridgeOut: "Friday's research methods: design the data collection sheet to be tidy.",
      linkQuestion: "How would you record field data so it can be imported directly into R?"
    },
    {
      title: "Visualisation with ggplot2",
      source: "Tutorial section 8",
      unit: "Data handling",
      priority: "core",
      mustKnow: [
        "ggplot2 builds plots layer by layer using the grammar of graphics: data → aesthetics → geometries → facets → statistics → coordinates → theme.",
        "ggplot(data, aes(x=..., y=..., fill=...)) + geom_...() + labs() + theme_minimal().",
        "Use geom_bar(stat=\"identity\") when the y values are already summary values.",
        "Facets split plots by a categorical variable: facet_wrap() or facet_grid().",
        "Labels and titles are not optional; they make the figure interpretable.",
        "Choose the geometry to match the data: bar for categories, boxplot for distributions, scatter for relationships, line for trends."
      ],
      terms: ["ggplot2", "aesthetics", "geometry", "facet", "stat", "coordinate", "theme", "geom_bar", "geom_boxplot", "geom_point", "geom_line"],
      diagrams: ["Draw the seven layers of the grammar of graphics."],
      questions: [
        ["Build a ggplot bar chart of survival percentage by sex from a summary data frame.", "ggplot(pct_surv, aes(x=Sex, y=pct_sex_survive, fill=Sex)) + geom_bar(stat=\"identity\") + labs(title=\"Survival by sex\", x=\"Sex\", y=\"Survival (%)\") + theme_minimal().", "Apply"],
        ["When would you use a boxplot instead of a bar chart?", "Use a boxplot to show the distribution, median, quartiles and outliers of a continuous variable across groups. A bar chart shows only a summary value and hides the distribution.", "Explain"],
        ["Why is a misleading y-axis or missing label a scientific problem, not just a cosmetic one?", "It can exaggerate differences, hide uncertainty and mislead interpretation. Clear axes, units, sample sizes and titles are part of honest reporting and reproducibility.", "Evaluate"]
      ],
      trap: "Forgetting stat=\"identity\" for summary values; using a bar chart for paired data; omitting units.",
      bridgeIn: "Recall the tidy data structure needed for plotting.",
      bridgeOut: "Friday's research methods: choose the figure before collecting data.",
      linkQuestion: "Which plot would best show the relationship between rainfall and plant height?"
    },
    {
      title: "Descriptive statistics and assumptions",
      source: "Tutorial section 9A–9B",
      unit: "Statistical analysis",
      priority: "core",
      mustKnow: [
        "Summarise data with n, mean, SD, median, IQR, min and max.",
        "Normality hypotheses: H0 = data are normally distributed; H1 = not normal.",
        "Shapiro-Wilk test is best for n < 5000; p > 0.05 means no significant departure from normality.",
        "Visual checks: histogram and Q-Q plot; points should follow the line.",
        "Homogeneity of variance: H0 = equal variances; Bartlett (normal data), Levene (robust), Fligner-Killeen (non-parametric).",
        "Assumption checks decide between parametric and non-parametric tests.",
        "Always report the test, statistic, df, p-value and effect size."
      ],
      terms: ["mean", "median", "standard deviation", "IQR", "normality", "Shapiro-Wilk", "Q-Q plot", "homogeneity of variance", "Bartlett", "Levene", "Fligner-Killeen"],
      diagrams: ["Draw a normal Q-Q plot and describe ideal vs skewed patterns."],
      questions: [
        ["A Shapiro-Wilk test gives p = 0.03. What do you conclude and what test would you choose for two independent groups?", "The data depart significantly from normality at α = 0.05. Use a non-parametric test such as Mann-Whitney U (wilcox.test) for two independent groups, unless the departure is mild and n is large.", "Apply"],
        ["Explain why you should not use Bartlett's test when the data are non-normal.", "Bartlett's test is sensitive to non-normality and can falsely reject equal variances. Levene's test or Fligner-Killeen is more robust when normality is doubtful.", "Explain"],
        ["Why is checking assumptions before choosing a test more defensible than always using a non-parametric test?", "Non-parametric tests may have less power when parametric assumptions hold. Checking assumptions lets you use the most powerful valid test. If assumptions fail, switch to the robust alternative.", "Evaluate"]
      ],
      trap: "Using p > 0.05 to 'prove' normality; ignoring outliers; choosing a test before checking assumptions.",
      bridgeIn: "Recall the variable types and groups in your dataset.",
      bridgeOut: "Friday's research methods: pre-specify the assumption checks.",
      linkQuestion: "How would you report a descriptive table for a field experiment?"
    },
    {
      title: "Parametric vs non-parametric tests and regression",
      source: "Tutorial section 9C–9G",
      unit: "Statistical analysis",
      priority: "core",
      mustKnow: [
        "Compare 2 independent groups: independent t-test (normal) vs Mann-Whitney U (non-normal).",
        "Compare 2 paired groups: paired t-test vs Wilcoxon signed-rank.",
        "Compare 3+ independent groups: one-way ANOVA vs Kruskal-Wallis; post-hoc Tukey HSD or pairwise Wilcoxon.",
        "Compare 3+ repeated groups: repeated-measures ANOVA vs Friedman.",
        "Correlation: Pearson (linear, normal) vs Spearman (rank, robust).",
        "Simple/multiple linear regression: lm(y ~ x1 + x2); check residual diagnostics.",
        "Quantile regression: rq() for median regression when normality fails.",
        "Categorical data: chi-square (expected counts ≥ 5) vs Fisher's exact test (< 5).",
        "Welch's ANOVA when variances are unequal.",
        "Always report effect size and confidence intervals, not only p-values."
      ],
      terms: ["t-test", "Mann-Whitney", "ANOVA", "Kruskal-Wallis", "Tukey HSD", "Pearson", "Spearman", "linear regression", "quantile regression", "chi-square", "Fisher exact", "effect size"],
      diagrams: ["Draw a decision tree for choosing a statistical test."],
      questions: [
        ["A study compares growth in three fertilizer treatments with unequal variances. Which test do you use and why?", "Use Welch's ANOVA (oneway.test with var.equal = FALSE) because variances differ. If the data are also non-normal, use Kruskal-Wallis. Follow with an appropriate post-hoc test.", "Apply"],
        ["Explain the difference between Pearson and Spearman correlation.", "Pearson measures the strength of a linear relationship between two continuous, normally distributed variables. Spearman measures the monotonic relationship using ranks and is robust to outliers and non-normality.", "Explain"],
        ["A chi-square test has an expected count below 5 in one cell. What should you do?", "Use Fisher's exact test instead of chi-square, because the chi-square approximation is unreliable with small expected counts. Report the exact p-value.", "Evaluate"]
      ],
      trap: "Using multiple t-tests instead of ANOVA; ignoring post-hoc correction; reporting p-values without effect sizes.",
      bridgeIn: "Recall the assumption checks from the previous session.",
      bridgeOut: "Friday's research methods: match the design to the test and report the result correctly.",
      linkQuestion: "How would you decide between a t-test, ANOVA and regression for a given dataset?"
    }
  ]
});
