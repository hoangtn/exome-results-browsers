export default {
  browserTitle: 'BipEx: Bipolar Exomes Browser',
  navBarTitle: 'BipEx: Bipolar Exomes Browser',
  homePageHeading: 'BipEx: Bipolar Exomes',
  navBarColor: '#c24100',
  referenceGenome: 'GRCh38',
  elasticsearch: {
    geneResults: {
      index: 'bipex_gene_results_200421',
      type: 'documents',
    },
    variants: {
      index: 'bipex_variant_results_200421',
      type: 'documents',
    },
  },
  geneResults: {
    resultsPageHeading: 'Gene results',
    views: {
      manhattan: false,
      qq: false,
    },
    groups: {
      options: [
        'bipolar_disorder',
        'bipolar_disorder_1',
        'bipolar_disorder_2',
        'bipolar_disorder_with_psychosis',
        'bipolar_disorder_without_psychosis',
        'bipolar_disorder_including_schizoaffective',
      ],
      labels: {
        bipolar_disorder: 'Bipolar Disorder',
        bipolar_disorder_1: 'Bipolar Disorder 1',
        bipolar_disorder_2: 'Bipolar Disorder 2',
        bipolar_disorder_with_psychosis: 'Bipolar Disorder with Psychosis',
        bipolar_disorder_without_psychosis: 'Bipolar Disorder without Psychosis',
        bipolar_disorder_including_schizoaffective: 'Bipolar Disorder (including Schizoaffective)',
      },
    },
    defaultSortColumn: 'ptv_fisher_gnom_non_psych_pval',
    columns: [
      {
        key: 'n_cases',
        heading: 'Cases',
        minWidth: 80,
        grow: 0,
        type: 'int',
      },
      {
        key: 'n_controls',
        heading: 'Controls',
        minWidth: 80,
        grow: 0,
        type: 'int',
      },
      {
        key: 'ptv_case_count',
        heading: 'PTV Case Count',
        minWidth: 65,
        grow: 0,
        type: 'int',
      },
      {
        key: 'ptv_control_count',
        heading: 'PTV Control Count',
        minWidth: 65,
        grow: 0,
        type: 'int',
      },
      {
        key: 'ptv_fisher_gnom_non_psych_pval',
        heading: 'PTV Fisher p\u2011val',
        minWidth: 85,
        grow: 0,
      },
      {
        key: 'ptv_fisher_gnom_non_psych_OR',
        heading: 'PTV Fisher odds ratio',
        minWidth: 85,
        grow: 0,
        type: 'string',
        // eslint-disable-next-line no-nested-ternary
        render: val => (val === 'Inf' ? '∞' : Number(val) === 0 ? '0' : Number(val).toPrecision(3)),
      },
      {
        key: 'damaging_missense_case_count',
        heading: 'Damaging Missense Case Count',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'damaging_missense_control_count',
        heading: 'Damaging Missense Control Count',
        minWidth: 70,
        grow: 0,
        type: 'int',
      },
      {
        key: 'damaging_missense_fisher_gnom_non_psych_pval',
        heading: 'Damaging Missense Fisher p\u2011val',
        minWidth: 85,
        grow: 0,
      },
      {
        key: 'damaging_missense_fisher_gnom_non_psych_OR',
        heading: 'Damaging Missense Fisher odds ratio',
        minWidth: 85,
        grow: 0,
        type: 'string',
        // eslint-disable-next-line no-nested-ternary
        render: val => (val === 'Inf' ? '∞' : Number(val) === 0 ? '0' : Number(val).toPrecision(3)),
      },
    ],
  },
  variants: {
    groups: {
      options: [
        'bipolar_disorder',
        'bipolar_disorder_1',
        'bipolar_disorder_2',
        'bipolar_disorder_with_psychosis',
        'bipolar_disorder_without_psychosis',
        'bipolar_disorder_including_schizoaffective',
      ],
      labels: {
        bipolar_disorder: 'Bipolar Disorder',
        bipolar_disorder_1: 'Bipolar Disorder 1',
        bipolar_disorder_2: 'Bipolar Disorder 2',
        bipolar_disorder_with_psychosis: 'Bipolar Disorder with Psychosis',
        bipolar_disorder_without_psychosis: 'Bipolar Disorder without Psychosis',
        bipolar_disorder_including_schizoaffective: 'Bipolar Disorder (including Schizoaffective)',
      },
    },
    consequences: [
      {
        term: 'damaging_missense',
        label: 'Damaging Missense',
        category: 'missense',
      },
      {
        term: 'non_coding',
        label: 'Non-coding',
        category: 'other',
      },
      {
        term: 'other_missense',
        label: 'Other Missense',
        category: 'missense',
      },
      {
        term: 'ptv',
        label: 'Protein-truncating',
        category: 'lof',
      },
      {
        term: 'synonymous',
        label: 'Synonymous',
        category: 'synonymous',
      },
      {
        term: 'NA',
        label: '',
        category: 'other',
      },
    ],
    columns: [
      {
        key: 'estimate',
        heading: 'Estimate',
        minWidth: 80,
        showOnGenePage: true,
      },
      {
        key: 'chi_sq_stat',
        heading: 'χ²',
        minWidth: 65,
        showOnGenePage: true,
      },
      {
        key: 'p_value',
        heading: 'P\u2011Value',
        minWidth: 65,
        showOnGenePage: true,
      },
      {
        key: 'in_analysis',
        heading: 'In Analysis',
        minWidth: 85,
        render: value => (value ? 'yes' : ''),
        renderForCSV: value => (value ? 'yes' : ''),
        showOnDetails: false,
        showOnGenePage: true,
      },
    ],
  },
  pages: [],
}
