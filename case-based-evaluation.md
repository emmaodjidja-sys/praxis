# Analysis and Reporting Reference

## Table of Contents
1. Analysis Planning
2. Quantitative Analysis Methods
3. Qualitative Analysis Methods
4. Mixed-Methods Integration
5. Evaluation Reporting Standards
6. Findings, Conclusions, and Recommendations
7. Quality Assurance in Analysis

---

## 1. Analysis Planning

An analysis plan should be written before data collection begins. It specifies, for each evaluation question:

- Data sources and variables
- Analytical method(s)
- Software/tools to be used
- Disaggregation dimensions (sex, age, geography, disability, etc.)
- How quantitative and qualitative findings will be integrated
- Quality assurance steps

### Analysis Plan Template

| Evaluation Question | Data Source | Key Variables/Themes | Analytical Method | Disaggregation | Software |
|---|---|---|---|---|---|
| EQ1: To what extent... | Household survey | Outcome variable X, covariates A, B, C | DiD with matched comparison | Sex, age group, region | Stata/Python |
| EQ2: How has... | KIIs, FGDs | Implementation processes, barriers, facilitators | Thematic analysis | Stakeholder type | NVivo/Atlas.ti/manual |

For Advanced users: Discuss pre-analysis plans (PAPs) and their role in reducing analytical flexibility and p-hacking. Registering PAPs for impact evaluations (AEA RCT Registry, RIDIE, OSF).

---

## 2. Quantitative Analysis Methods

### Descriptive Statistics

The foundation of all quantitative analysis. Always start here.

- Frequencies and percentages for categorical variables
- Means, medians, standard deviations for continuous variables
- Cross-tabulations with chi-square tests for associations
- Disaggregation by key dimensions
- Visualisations: bar charts, histograms, box plots, maps

### Pre-Post Comparisons

- Paired t-tests or Wilcoxon signed-rank tests for continuous outcomes
- McNemar's test for binary outcomes
- Effect sizes (Cohen's d, odds ratios) alongside p-values
- Always report confidence intervals

### Group Comparisons

- Independent t-tests or Mann-Whitney U for two-group comparisons
- ANOVA or Kruskal-Wallis for multi-group comparisons
- Chi-square or Fisher's exact test for categorical outcomes

### Regression Analysis

**When to use**: When you need to estimate the relationship between the programme and outcomes while controlling for confounders.

**Linear regression**: Continuous outcomes. Check assumptions (linearity, normality of residuals, homoscedasticity, no multicollinearity).

**Logistic regression**: Binary outcomes. Report odds ratios with confidence intervals.

**Ordinal/multinomial logistic regression**: Ordered or multi-category outcomes.

**Multilevel/mixed-effects models**: When data has a hierarchical structure (individuals nested in communities, schools, facilities). Essential for cluster-sampled or multi-site evaluations.

**Panel data methods**: Fixed effects, random effects, or first-differenced models for data with repeated observations on the same units.

For Foundation users: Explain regression as a way to "account for other factors" that might explain the outcome. Focus on interpreting key coefficients and p-values.

For Practitioner users: Discuss model specification, variable selection, diagnostics, and reporting conventions.

For Advanced users: Discuss endogeneity, instrumental variables, selection correction (Heckman), sensitivity analyses, and Bayesian approaches.

### Index Construction

When combining multiple indicators into a composite index:

- **Simple additive**: Sum or mean of standardised items. Transparent but assumes equal weighting.
- **Principal Component Analysis (PCA)**: Data-driven weighting. Common for asset indices. Report eigenvalues and explained variance.
- **Factor analysis**: Theory-driven. Confirmatory (CFA) for validated constructs, exploratory (EFA) for new constructs. Report factor loadings, model fit indices.
- **Weighted indices**: Expert or stakeholder-derived weights. Document the weighting process.

Always report internal consistency (Cronbach's alpha) and justify the aggregation method.

### Handling Missing Data

- Report missingness patterns (MCAR, MAR, MNAR)
- Complete case analysis is acceptable only if missingness is small (<5%) and MCAR
- Multiple imputation for MAR data
- Sensitivity analysis comparing results under different assumptions
- Never silently drop observations

### Statistical Software Guidance

When producing analysis code:
- **Stata**: Standard in development evaluation. Use for regression, panel data, survey-weighted analysis.
- **Python**: Preferred for data cleaning, visualisation, machine learning, and replicable pipelines. Use pandas, statsmodels, scipy, scikit-learn.
- **R**: Strong for advanced statistical methods, visualisation (ggplot2), and Bayesian analysis.
- **Excel**: Only for basic descriptive statistics and simple tabulations. Not for regression or hypothesis testing.

Produce clean, commented, reproducible code. Include data dictionary references.

---

## 3. Qualitative Analysis Methods

### Thematic Analysis

The most common qualitative analysis method in evaluation. Follows these steps:

1. **Familiarisation**: Read/listen to all data. Take initial notes.
2. **Coding**: Assign labels to meaningful segments of data. Start with descriptive codes, then move to interpretive codes.
3. **Theme development**: Group codes into themes. Themes should be coherent, distinct, and answer the evaluation questions.
4. **Review**: Check themes against the data. Ensure they're supported by sufficient evidence.
5. **Definition and naming**: Write a clear description of each theme.
6. **Writing up**: Present themes with illustrative quotes (anonymised) and analytical narrative.

**Deductive vs. inductive coding**:
- Deductive: Codes derived from the evaluation framework, ToC, or literature before analysis. Useful when evaluation questions are specific.
- Inductive: Codes emerge from the data. Useful for exploratory questions and capturing unexpected findings.
- Most evaluations use a combination: start with deductive codes, allow new inductive codes to emerge.

### Framework Analysis

Structured approach well-suited to evaluation:
1. Develop an analytical framework (matrix of themes x cases/respondents)
2. Index data to the framework
3. Chart data into the matrix
4. Interpret patterns across cases and themes

Advantages: Transparent, systematic, allows comparison across sites/groups. Works well for team-based analysis.

### Content Analysis

Systematic coding of text for frequency, patterns, and relationships. Can be quantitative (counting code frequencies) or qualitative (interpreting meaning). Useful for document review and media analysis.

### Narrative Analysis

Analyses stories and accounts holistically, attending to structure, sequence, and meaning-making. Useful for capturing individual experiences and change processes. Less common in standard evaluations, more appropriate for participatory and feminist evaluation approaches.

### Most Significant Change (MSC)

1. Collect stories of change from stakeholders
2. Select the most significant stories through facilitated panels at each level (field, programme, strategic)
3. Document why each story was selected
4. Analyse patterns across selected stories
5. Feed back to stakeholders

No pre-defined indicators required. Captures unexpected outcomes. Requires investment in facilitation and stakeholder engagement.

### Qualitative Rigour

Qualitative findings must be credible. Strategies:

- **Triangulation**: Multiple sources, methods, analysts
- **Member checking**: Share preliminary findings with participants for validation
- **Negative case analysis**: Actively seek cases that contradict emerging themes
- **Thick description**: Provide sufficient context for the reader to assess transferability
- **Audit trail**: Document analytical decisions
- **Reflexivity**: Acknowledge the evaluator's positionality and its potential influence
- **Inter-coder reliability**: Multiple coders independently code a subset; calculate agreement (kappa)

---

## 4. Mixed-Methods Integration

Integration is not just "doing both." Specify how quantitative and qualitative findings will be combined.

### Integration Points

**During data collection**: Qualitative findings inform survey design (sequential exploratory); survey patterns guide qualitative sampling (sequential explanatory).

**During analysis**: 
- Joint display matrices: Side-by-side presentation of quantitative and qualitative findings for each evaluation question
- Qualitative findings explain quantitative patterns
- Quantitative data tests generalisability of qualitative themes

**During interpretation**: 
- Convergence: Both methods point to the same conclusion (strengthens finding)
- Complementarity: Methods illuminate different dimensions of the same phenomenon
- Divergence: Methods produce contradictory findings (requires explanation, not dismissal)

### Joint Display Tables

| Evaluation Question | Quantitative Finding | Qualitative Finding | Integration / Meta-inference |
|---|---|---|---|
| EQ1 | 35% increase in knowledge scores (p<0.01) | Participants describe training as "eye-opening" but struggle to apply knowledge in practice | Knowledge gains confirmed, but translation to practice is incomplete. Barriers include workplace constraints and lack of follow-up support. |

---

## 5. Evaluation Reporting Standards

### Standard Report Structure

Follow UNEG or donor-specific guidelines. The default structure:

**Front matter**:
- Title page (evaluation title, programme, commissioner, evaluators, date)
- Acknowledgements
- Table of contents
- List of acronyms
- Executive summary (2-4 pages maximum; self-contained; includes key findings, conclusions, and recommendations)

**Main body**:
1. **Introduction**: Evaluation purpose, scope, intended audience
2. **Programme description**: Context, objectives, target population, implementation history
3. **Evaluation methodology**: Design, questions, methods, sampling, limitations, ethical approach
4. **Findings**: Organised by evaluation question or OECD-DAC criterion. Each finding supported by evidence from multiple sources. Distinguish between findings (evidence-based observations) and interpretations.
5. **Conclusions**: Interpretive judgements drawn from the findings. Linked clearly to findings. Address each evaluation criterion.
6. **Recommendations**: Specific, actionable, prioritised, addressed to specific stakeholders. Linked to conclusions. Distinguish between strategic and operational recommendations.
7. **Lessons learned**: Generalisable insights beyond this specific programme.

**Annexes**:
- Terms of Reference
- Evaluation matrix
- Data collection instruments
- List of persons interviewed / sites visited
- Detailed methodology notes
- Additional data tables
- Bibliography

### Report Quality Criteria

A high-quality evaluation report:
- Answers the evaluation questions with evidence
- Distinguishes between findings, conclusions, and recommendations
- Acknowledges limitations transparently
- Presents dissenting views where they exist
- Uses clear language appropriate for the intended audience
- Includes a usable executive summary
- Provides recommendations that are specific, actionable, and realistic
- Does not exceed 60-80 pages for main body (excluding annexes)

### UNEG Quality Checklist

When reviewing or producing evaluation reports, verify against UNEG quality standards:
- Is the evaluation purpose clearly stated?
- Is the methodology appropriate and clearly described?
- Are findings based on evidence?
- Are conclusions logically derived from findings?
- Are recommendations linked to conclusions?
- Are ethical standards maintained?
- Is the report well-written and accessible?

### Donor-Specific Formats

When the user specifies a donor, adapt the report structure:

**USAID**: Performance Evaluation Report format. Emphasis on learning questions, findings organised by evaluation questions, summary of findings table, "purpose and intended audience" section.

**EU/EC**: ROM or Results-Oriented Monitoring format. Structured around intervention logic and evaluation criteria. Scoring matrix for each criterion.

**FCDO**: Annual Review or Programme Completion Review format. Emphasis on value for money, adaptive management, and sustainability.

**World Bank**: ICR (Implementation Completion Report) or IEG format. Structured around Bank performance, borrower performance, and PDO achievement ratings.

---

## 6. Findings, Conclusions, and Recommendations

The most common quality issue in evaluation reports is conflating these three levels.

### Findings

Factual statements derived from evidence. They describe what was observed, measured, or documented. Findings should be:
- Specific and evidence-based
- Attributed to data sources
- Presented without evaluative judgement
- Disaggregated where data permits

Example: "68% of trained health workers reported using the new clinical guidelines at endline, compared to 23% at baseline. Qualitative data suggest that supervision support was the strongest enabler of adoption."

### Conclusions

Interpretive judgements that synthesise multiple findings into an overall assessment. Conclusions should:
- Draw on multiple findings (not restate a single finding)
- Provide an evaluative judgement (is this good? sufficient? concerning?)
- Directly address the evaluation questions or criteria
- Acknowledge uncertainty

Example: "The programme made a substantial contribution to improved clinical practice among trained health workers, but sustainability is at risk given the dependence on external supervision support that is not funded beyond the project period."

### Recommendations

Actionable proposals for specific stakeholders, derived from conclusions. Recommendations should:
- Be addressed to a specific actor with the authority and resources to act
- Be feasible within realistic constraints
- Be prioritised (critical vs. important vs. desirable)
- Include a timeframe
- Not introduce new findings or logic not present in the conclusions

Example: "The Ministry of Health should integrate supportive supervision for clinical guidelines into the existing district health management structure, with dedicated budget allocation, within 12 months of programme closure. RECOMMENDATION PRIORITY: Critical."

### Lessons Learned

Generalisable insights that go beyond this specific programme. Useful for other programmes, donors, or evaluators. Distinguish from recommendations: lessons learned are for the sector, not for a specific actor.

---

## 7. Quality Assurance in Analysis

### Data Quality

Before analysis, verify:
- Data completeness (missing values, skip logic consistency)
- Data accuracy (range checks, logical consistency checks)
- Data consistency (cross-variable checks, duplicates)
- Sampling coverage (compare achieved sample to planned sample)
- Enumerator effects (check for systematic patterns by enumerator)

### Analytical Quality

- Pre-registered analysis plan followed (or deviations justified)
- Multiple analysts review key findings
- Sensitivity analyses for key results (different model specifications, subgroup analyses, robustness checks)
- Disaggregation by sex, age, disability, geography at minimum
- Confidence intervals and effect sizes reported alongside p-values
- Qualitative findings supported by sufficient evidence (not cherry-picked quotes)

### Peer Review

For major evaluations:
- Internal quality assurance (evaluation manager reviews methods and findings)
- External quality assurance (independent reviewer assesses methodology and logic)
- Reference group / steering committee review (stakeholders review factual accuracy and contextual relevance)
- Management response from the commissioning organisation

### Reproducibility

For quantitative analysis:
- Clean, commented analysis code
- Data dictionary
- Clear variable naming conventions
- Version-controlled files
- Replicable pipeline from raw data to final outputs

For qualitative analysis:
- Codebook with definitions and examples
- Audit trail of analytical decisions
- Inter-coder reliability documentation
