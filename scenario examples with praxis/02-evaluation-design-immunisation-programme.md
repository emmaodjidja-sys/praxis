# Econometric Impact Evaluation Design: Health Insurance Subsidy Programme

## Scenario

**Test prompt**: "We are designing a prospective impact evaluation for a government health insurance subsidy programme (HISP) targeting poor households in a lower-middle-income country. The programme provides a full subsidy for health insurance premiums to households below the poverty line, covering primary care visits, essential medicines, maternal and child health services, and hospitalisation. The programme will be rolled out in phases across 200 districts. In Phase 1, 100 districts are randomly assigned to receive the programme; the remaining 100 districts will receive it in Phase 2 (18 months later). Within treatment districts, all households below the poverty line are eligible. We have a pre-programme household survey covering all 200 districts (n=9,000 households) with data on health expenditure, health outcomes, utilisation of services, and socioeconomic characteristics. The government wants to know: (a) What is the causal impact of the subsidy on out-of-pocket health expenditure, health service utilisation, and health outcomes? (b) Is the programme more effective for certain subgroups? (c) What is the cost-effectiveness?"

---

## Impact Evaluation Design

### 1. Evaluation Questions

- EQ1: What is the average causal effect of the health insurance subsidy on out-of-pocket (OOP) health expenditure among eligible households?
- EQ2: What is the effect on health service utilisation (number of outpatient visits, preventive care uptake, facility-based deliveries, hospitalisation rates)?
- EQ3: What is the effect on health outcomes (self-reported health status, days of restricted activity due to illness, child nutritional status, under-5 mortality)?
- EQ4: Are there heterogeneous treatment effects by household characteristics (income quintile within eligible population, household head gender, rural/urban, household size, pre-programme health status)?
- EQ5: What is the cost per unit improvement in key outcomes (cost-effectiveness)?

### 2. Identification Strategy

#### Primary Design: Cluster Randomised Controlled Trial

The phased rollout with random assignment of districts to Phase 1 (treatment) and Phase 2 (control) creates a natural cluster RCT. This is the strongest available identification strategy.

**Randomisation unit**: District (cluster). 200 districts, 100 per arm.

**Assignment mechanism**: Random assignment of districts to Phase 1 (treatment) vs. Phase 2 (delayed treatment/control). Randomisation should be stratified by region, urbanisation, baseline poverty rate, and baseline health facility density to improve balance.

**Eligibility**: Within treatment districts, all households below the poverty line are eligible. Within control districts, no subsidies are offered during the evaluation period.

**Evaluation timeline**: Baseline survey (pre-programme), endline survey (12-15 months after programme launch in treatment districts, before Phase 2 rollout begins in control districts).

#### Intent-to-Treat (ITT) and Treatment-on-Treated (TOT)

The ITT estimate captures the effect of living in a district where the programme is offered, regardless of whether the household actually enrolled. This is the policy-relevant estimate (what happens when you make the programme available?).

The TOT estimate captures the effect of actually receiving the subsidy. Because not all eligible households will enrol (imperfect take-up), ITT will underestimate the effect on those who actually participate. TOT can be estimated using random assignment as an instrument for actual enrolment (Wald estimator / 2SLS).

### 3. Econometric Specifications

#### Specification 1: Simple Difference (Cross-Sectional at Endline)

The simplest estimator compares mean outcomes between treatment and control districts at endline:

Y_i = alpha + beta * Treatment_d + epsilon_i

Where Y_i is the outcome for household i, Treatment_d is a binary indicator for whether district d was assigned to Phase 1, and beta is the ITT estimate.

This is valid under random assignment but does not exploit baseline data. Standard errors must be clustered at the district level (the unit of randomisation).

#### Specification 2: Difference-in-Differences (Preferred)

Exploits both the randomisation and the baseline data for improved precision:

Y_idt = alpha + beta_1 * Treatment_d + beta_2 * Post_t + beta_3 * (Treatment_d x Post_t) + X_i * gamma + epsilon_idt

Where:
- Y_idt is the outcome for household i in district d at time t
- Treatment_d is the district treatment assignment (time-invariant)
- Post_t is a binary indicator for the endline period
- Treatment_d x Post_t is the interaction term; its coefficient (beta_3) is the DiD estimator of the ITT effect
- X_i is a vector of household-level covariates (to improve precision, not for identification)
- Standard errors clustered at the district level

beta_3 measures the average change in the outcome for treatment districts relative to the average change in control districts. Under random assignment, beta_1 should be approximately zero (baseline balance). If it is not, DiD adjusts for pre-existing differences.

**Panel vs. repeated cross-section**: If the same households are surveyed at baseline and endline (panel), this is a standard panel DiD. Include household fixed effects for additional precision:

Y_idt = alpha_i + lambda_t + beta * (Treatment_d x Post_t) + epsilon_idt

If different households are surveyed (repeated cross-section), use the standard DiD without household fixed effects.

#### Specification 3: ANCOVA (Analysis of Covariance)

If using panel data, ANCOVA regresses endline outcomes on treatment assignment and baseline outcomes:

Y_i,endline = alpha + beta * Treatment_d + delta * Y_i,baseline + X_i * gamma + epsilon_i

ANCOVA is often more efficient than DiD for estimating treatment effects in RCTs with baseline data, particularly when autocorrelation of outcomes across time is moderate (McKenzie, 2012).

#### Specification 4: Regression Discontinuity (Supplementary)

Within treatment districts, eligibility is determined by the poverty line. Households just above and just below the threshold are likely similar in all respects except programme eligibility. This creates a sharp RDD:

Y_i = alpha + beta * Eligible_i + f(PovertyScore_i) + epsilon_i

Where Eligible_i = 1 if the household's poverty score is below the threshold, and f(PovertyScore_i) is a flexible function of the running variable (poverty score) fitted separately on each side of the threshold.

This estimates the local average treatment effect at the eligibility cutoff. It is narrower than the ITT (applies only to households near the threshold) but provides a robustness check against threats to the RCT (e.g., if randomisation is compromised).

**Diagnostics**: Test for manipulation of the poverty score near the threshold (McCrary density test). Examine covariate balance across the threshold. Plot outcomes against the running variable to visualise the discontinuity.

#### Specification 5: Propensity Score Matching (Supplementary)

If attrition or contamination threatens the RCT, PSM can provide a non-experimental comparison:

1. Estimate the propensity score using baseline covariates (logistic regression)
2. Match treatment and control households on propensity score (nearest neighbour, caliper)
3. Verify balance on covariates post-matching
4. Estimate the ATT on matched sample

PSM is not the primary identification strategy (the RCT is stronger), but serves as a robustness check if the experimental design is compromised.

### 4. Sample Size and Power

**Power calculation parameters**:
- Significance level: 0.05
- Power: 0.80
- Clusters: 200 districts (100 per arm)
- Minimum detectable effect size: 0.15 SD for continuous outcomes (health expenditure), 5 percentage points for binary outcomes (utilisation)
- ICC: Assume 0.02-0.05 for health outcomes at the district level (estimate from baseline data)
- Design effect: DE = 1 + (m-1) * ICC, where m = average number of sampled households per district

With n=9,000 (45 households per district), ICC=0.03:
- Design effect = 1 + (45-1) * 0.03 = 2.32
- Effective sample size per arm = (4,500 / 2.32) = ~1,940
- MDE for continuous outcome = 2.8 * sqrt(2/1940) * SD = ~0.09 SD (well powered)

For binary outcomes with baseline prevalence of 50%:
- MDE = ~3.5 percentage points (well powered for utilisation outcomes)

**Planned attrition**: Budget for 20% attrition. Oversample accordingly at baseline.

### 5. Heterogeneity Analysis

#### Subgroup Analysis

Pre-specify subgroups in a pre-analysis plan:
- Income quintile within the eligible population
- Household head gender (female-headed vs. male-headed)
- Rural vs. urban
- Baseline health status (chronic illness present vs. not)
- Household size (proxy for dependency ratio)
- Distance to nearest health facility

For each subgroup, estimate the treatment effect by interacting Treatment_d x Post_t with the subgroup indicator:

Y_idt = alpha + beta_1 * (Treatment_d x Post_t) + beta_2 * (Treatment_d x Post_t x Subgroup_i) + controls + epsilon_idt

beta_2 measures the differential treatment effect for the subgroup relative to the reference group.

**Multiple comparisons**: With multiple subgroups, the risk of false positives increases. Apply Bonferroni correction or Benjamini-Hochberg procedure to adjust p-values. Report both unadjusted and adjusted results.

#### Quantile Treatment Effects

If the policy question is about the distribution of effects (does the programme help the poorest more?), estimate quantile treatment effects at the 10th, 25th, 50th, 75th, and 90th percentiles of the outcome distribution.

#### Machine Learning for Heterogeneity Discovery

For Advanced users: Use causal forests (Athey and Imbens, 2016) or LASSO-based methods to discover heterogeneous treatment effects across many covariates simultaneously, without pre-specifying subgroups.

### 6. Threats to Validity and Robustness Checks

#### Internal Validity Threats

**Attrition**: Differential dropout between treatment and control districts. Test: Compare attrition rates between arms. Bound the treatment effect using Lee (2009) trimming bounds.

**Contamination/spillover**: Control district residents seeking care in treatment districts, or control districts independently implementing similar programmes. Test: Monitor programme implementation in control districts. Check for geographic spillover by examining outcomes in control districts adjacent to treatment districts.

**Non-compliance**: Eligible households in treatment districts who do not enrol. Handled by: ITT analysis (main estimate), TOT using 2SLS with random assignment as instrument.

**Hawthorne/John Henry effects**: Treatment households behave differently because they know they are in a study; control households compensate by seeking more care. Difficult to test directly; mitigate by framing the endline survey identically in both arms.

**Manipulation of eligibility score**: Households or officials may manipulate poverty scores to qualify. Test: McCrary density test at the cutoff. Examine distribution of poverty scores for bunching.

#### Robustness Checks

1. Balance test: Compare baseline characteristics between treatment and control districts. Report a balance table with means, differences, and p-values.
2. Placebo test: Estimate the treatment effect using baseline data only (should be zero if randomisation succeeded).
3. Sensitivity to specification: Run the main model with and without covariates; with and without district fixed effects; with different standard error clustering (district, region).
4. Sensitivity to attrition: Estimate bounds under worst-case assumptions about missing data.
5. RDD estimate as cross-validation: Compare the RDD estimate at the eligibility cutoff with the ITT estimate from the randomisation. Convergence strengthens confidence.

### 7. Cost-Effectiveness Analysis

**Cost data**: Programme administrative costs (subsidy payments, enrolment costs, programme management) per enrolled household per year.

**Effectiveness measure**: Units of outcome improvement attributable to the programme (e.g., reduction in OOP expenditure, increase in outpatient visits, reduction in days of restricted activity).

**Cost-effectiveness ratio**: Total programme cost / Total units of outcome improvement.

**Benchmarking**: Compare with WHO-CHOICE thresholds and published cost-effectiveness estimates for health insurance programmes in similar settings.

**Sensitivity analysis**: Vary assumptions about take-up rates, subsidy levels, and health system capacity to assess how cost-effectiveness changes under different scenarios.

### 8. Pre-Analysis Plan

Register a pre-analysis plan (PAP) before endline data collection. The PAP should specify:
- Primary and secondary outcomes (with hierarchy)
- Main econometric specifications
- Pre-specified subgroup analyses
- Multiple comparison adjustments
- Rules for handling attrition, missing data, and outliers
- Decision rules for robustness checks

Register on the AEA RCT Registry, RIDIE, or OSF. The PAP protects against p-hacking and specification searching, and enhances the credibility of findings.

### 9. Ethical Considerations

- Random assignment of public services raises ethical questions. The phased rollout design mitigates this: all districts eventually receive the programme. The evaluation simply randomises the order, not whether the programme is delivered.
- Informed consent for survey participation (distinct from programme enrolment consent)
- Data protection for health-related information
- Results dissemination to all districts, including control districts, to inform their Phase 2 implementation
- IRB/ethics committee approval required

### 10. Reporting

Report following CONSORT guidelines adapted for cluster RCTs:
- CONSORT flow diagram (districts randomised, households surveyed, attrition)
- Balance table (baseline characteristics by treatment arm)
- ITT and TOT estimates with confidence intervals and effect sizes
- Subgroup analyses with adjusted p-values
- Robustness checks
- Cost-effectiveness estimates with sensitivity analysis
- Limitations discussion
- Policy implications

### 11. Stata/Python Analysis Code Outline

```
// Stata pseudocode for main specifications

// 1. Balance test
foreach var in health_exp utilisation health_status income {
    ttest `var' if baseline==1, by(treatment)
}

// 2. Simple difference at endline
reg health_exp_endline treatment, cluster(district_id)

// 3. DiD (panel)
xtset hh_id time
xtreg health_exp treatment##post, fe cluster(district_id)

// 4. ANCOVA
reg health_exp_endline treatment health_exp_baseline X_controls, cluster(district_id)

// 5. RDD (within treatment districts)
rdrobust health_exp_endline poverty_score if treatment==1, c(poverty_threshold)

// 6. TOT via 2SLS
ivregress 2sls health_exp_endline (enrolled = treatment) X_controls, cluster(district_id)

// 7. Heterogeneity
reg health_exp_endline c.treatment##c.post##i.female_head, cluster(district_id)
```

```python
# Python pseudocode
import statsmodels.api as sm
from linearmodels.panel import PanelOLS
from rdrobust import rdrobust

# DiD with panel FE
model = PanelOLS(y, X, entity_effects=True, time_effects=True)
result = model.fit(cov_type='clustered', cluster_entity=True)

# RDD
rd_result = rdrobust(y, running_var, c=threshold)
```
