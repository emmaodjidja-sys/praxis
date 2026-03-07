# PRAXIS

**An open-source Claude skill for programme evaluation across any sector.**

PRAXIS (from the Greek *praxis*, meaning the practice of applying theory) turns Claude into an evaluation methodologist. It helps M&E practitioners design, implement, and report on programme evaluations grounded in international standards.

## What PRAXIS Does

PRAXIS is a structured set of instructions and reference materials that guides the production of:

- **Evaluation designs** spanning experimental, quasi-experimental, theory-based (realist evaluation, contribution analysis, process tracing, QCA), participatory, and complexity-responsive approaches
- **Evaluability assessments** using the Davies (2013) three-dimension framework
- **Theories of Change** with assumptions mapping and evidence ratings
- **Evaluation matrices** linking questions to criteria, indicators, data sources, and methods
- **Data collection instruments**: surveys, FGD/KII guides, observation checklists, with validated scales
- **Analysis plans** covering quantitative, qualitative, and mixed-methods integration
- **Evaluation reports** following UNEG and donor-specific standards

The skill adapts its depth to three experience levels (Foundation, Practitioner, Advanced) and covers evaluation in both stable contexts and fragile, conflict-affected, and violent (FCV) settings.

## Coverage

### Evaluation Approaches
Experimental (RCT, cluster RCT, stepped wedge) | Quasi-experimental (DiD, PSM, RDD, ITS, synthetic control, IV) | Realist evaluation (CMO/ICAMO configurations) | Contribution analysis | Process tracing | QCA (crisp, fuzzy, multi-value) | Developmental evaluation | Outcome harvesting | Outcome mapping | Most Significant Change | Participatory evaluation | Empowerment evaluation | Utilization-focused evaluation | Feminist evaluation | Appreciative inquiry | Positive deviance | SROI | Goal-free evaluation | Rapid evaluation

### Frameworks
OECD-DAC criteria (2019 revision) | UNEG norms and standards | Logframes and results frameworks (USAID, EU, FCDO, World Bank, UN) | Evaluability assessment (Davies/DFID framework)

### Validated Scales
FCS | HFIAS | FIES | CSI | WHO-5 | PHQ-9 | GAD-7 | GHQ-12 | PCL-5 | WHODAS 2.0 | BRAVE14 | GEM Scale | WEAI | PPI | MPI | SOCAT

## Installation

Download the `.skill` file from the [latest release](https://github.com/emmaodjidja-sys/praxis/releases) and install it in Claude.

Alternatively, clone this repository and point Claude at the `SKILL.md` file.

## Structure

```
praxis/
├── SKILL.md                              # Main skill file (start here)
├── references/
│   ├── frameworks.md                     # ToC, logframes, evaluation matrices, evaluation questions
│   ├── evaluation-designs.md             # Full design catalogue including FCV-adapted approaches
│   ├── data-collection.md                # Instruments, validated scales, consent, piloting
│   ├── analysis-reporting.md             # Quant/qual analysis, mixed-methods, reporting standards
│   ├── evaluability-assessment.md        # EA framework, checklists, decision support
│   └── case-based-evaluation.md          # Case study design, selection, within/cross-case analysis
├── examples/
│   ├── 01-evaluability-assessment-sahel-livelihoods.md
│   ├── 02-evaluation-design-immunisation-programme.md
│   ├── 03-evaluation-matrix-girls-education-conflict.md
│   ├── 04-realist-evaluation-rule-of-law-drc.md
│   ├── 05-fgd-guide-climate-adaptation.md
│   └── 06-econometric-impact-evaluation-health-insurance.md
├── README.md
└── LICENSE
```

## Worked Examples

The `/examples` folder contains full outputs produced by the skill from realistic test scenarios:

1. **Evaluability assessment** for a multi-country P/CVE livelihoods programme in the Sahel with disrupted midline data and access constraints
2. **Evaluation design** for a $45M Gavi-funded immunisation programme across Ethiopia, Mozambique, and Bangladesh, using DiD with DHIS2 data and mixed-methods contribution analysis
3. **Evaluation matrix** for a girls' education programme operating across three active conflict zones (northeast Nigeria, South Sudan, Afghanistan), with 10 evaluation questions across OECD-DAC criteria plus conflict sensitivity
4. **Realist evaluation design** for a multi-donor rule of law programme in eastern DRC, with full CMO configurations for five programme components
5. **FGD guide** for a climate adaptation programme endline in Malawi and Zambia, with parallel guides for programme participants and non-participants
6. **Econometric impact evaluation** for a national health insurance subsidy programme, with five econometric specifications (simple difference, DiD, ANCOVA, RDD, PSM), power calculations, heterogeneity analysis, pre-analysis plan guidance, and Stata/Python code outlines

## Usage Examples

**Quick request** (stays in chat):
> "What evaluation design would work for a three-country governance programme with no comparison group?"

**Structured deliverable** (produces a document):
> "Design an endline evaluation for a maternal health programme in South Sudan. We have baseline data from 2022, targeting 15 health facilities. The donor is USAID."

**Evaluability assessment**:
> "Our P/CVE programme in the Sahel has been running for 3 years. Midline was disrupted by insecurity. Help me assess whether we're ready for an endline evaluation."

## Contributing

Contributions are welcome. Areas where the skill would benefit from expansion:

- Sector-specific evaluation modules (health systems, education, climate adaptation)
- Additional donor-specific reporting formats and terminology
- Translated reference materials (French, Spanish, Arabic)
- Worked examples and test scenarios
- Integration with KoboToolbox and ODK form generation

To contribute, fork the repository, make your changes, and submit a pull request. Please include a brief description of what you changed and why.

## Background

Built by [Emmanuel Nene Odjidja](https://github.com/emmaodjidja-sys), a global health epidemiologist and M&E specialist with 12+ years of experience in programme evaluation across health, peacebuilding, and development contexts. Currently M&E lead at GCERF (Global Community Engagement and Resilience Fund) for the Sahel and Sri Lanka.

The skill draws on OECD-DAC evaluation standards, UNEG norms, and the methodological literature spanning Pawson and Tilley (realist evaluation), Mayne (contribution analysis), Patton (developmental and utilization-focused evaluation), Fetterman (empowerment evaluation), Davies (evaluability assessment), and others.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Roadmap

This is the open-source community edition of PRAXIS. Future development includes:

- Sector-specific premium modules (PRAXIS Health, PRAXIS PVE, PRAXIS Climate)
- Evaluation quality assurance checker
- Indicator library with adaptation guidance
- Integration with statistical analysis workflows (Python/Stata)

---

**If PRAXIS is useful to you**, star the repo and share it with your M&E colleagues. Feedback and issues welcome.
