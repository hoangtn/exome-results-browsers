const renderPVal = value => {
  if (value === null) {
    return ''
  }
  const truncated = Number(value.toPrecision(3))
  if (truncated === 0) {
    return '0'
  }
  return truncated.toExponential()
}

export default {
  browserTitle: 'SCHEMA browser',
  navBarTitle: 'Schizophrenia exome meta-analysis',
  navBarColor: '#0a79bf',
  elasticsearch: {
    geneResults: {
      index: 'schema_gene_results_2019_04_15',
      type: 'result',
    },
    variants: {
      index: 'schema_variant_results_2019_04_15',
      type: 'variant',
    },
  },
  geneResults: {
    resultsPageHeading: 'Exome meta-analysis results',
    defaultSortColumn: 'pval_meta',
    columns: [
      {
        key: 'xcase_lof',
        heading: 'Case LoF',
        minWidth: 60,
        type: 'int',
      },
      {
        key: 'xctrl_lof',
        heading: 'Control LoF',
        minWidth: 60,
        type: 'int',
      },
      {
        key: 'pval_lof',
        heading: 'P-Val LoF',
        minWidth: 80,
        render: renderPVal,
      },
      {
        key: 'xcase_mis',
        heading: 'Case Missense',
        minWidth: 60,
        type: 'int',
      },
      {
        key: 'xctrl_mis',
        heading: 'Control Missense',
        minWidth: 60,
        type: 'int',
      },
      {
        key: 'pval_mis',
        heading: 'P-Val Missense',
        minWidth: 80,
        render: renderPVal,
      },
      {
        key: 'pval',
        heading: 'P-Val',
        minWidth: 80,
        render: renderPVal,
      },
      {
        key: 'pval_meta',
        heading: 'Meta P-Val',
        minWidth: 80,
        render: renderPVal,
      },
    ],
  },
  analysisGroups: {
    defaultGroup: 'meta',
    selectableGroups: ['meta'],
    labels: {
      afr_exomes: 'AFR (exomes)',
      afr_genomes: 'AFR (genomes)',
      afr_gnomad_genomes: 'AFR (gnomAD genomes)',
      amr_exomes: 'AMR (exomes)',
      amr_gnomad_exomes: 'AMR (gnomAD exomes)',
      ashkenazi_asj: 'Ashkenazi ASJ',
      asj_exomes: 'ASJ (exomes)',
      asj_gnomad_exomes: 'ASJ (gnomAD exomes)',
      bulgarian_eur: 'Bulgarian EUR',
      danish_eur: 'Danish EUR',
      eas_exomes: 'EAS (exomes)',
      eas_gnomad_exomes: 'EAS (gnomAD exomes)',
      eas_trios_exomes: 'EAS trios (exomes)',
      est_genomes: 'EST (genomes)',
      estonian_genome_est: 'Estonian genome EST',
      eur_exomes: 'EUR (exomes)',
      eur_gnomad_exomes: 'EUR (gnomAD exomes)',
      eur_n_exomes: 'EUR-N (exomes)',
      eur_trios_exomes: 'EUR trios (exomes)',
      external_trios_exomes: 'External trios (exomes)',
      fin_exomes: 'FIN (exomes)',
      fin_genomes: 'FIN (genomes)',
      fin_gnomad_exomes: 'FIN (gnomAD exomes)',
      finnish_genomes_fin: 'Finnish genomes FIN',
      gpc_genomes_afr: 'GPC genomes AFR',
      gpc_genomes_amr: 'GPC genomes AMR',
      gpc_genomes_eur: 'GPC genomes EUR',
      gpc_latino_amr: 'GPC Latino AMR',
      gpc_mclean_eur: 'GPC McLean EUR',
      meta_super: 'meta super',
      meta: 'meta',
      sas_exomes: 'SAS (exomes)',
      super_psychosis_fin: 'SUPER psychosis FIN',
      swedish_eur: 'Swedish EUR',
      swedish_fin: 'Swedish FIN',
      taiwanese_eas: 'Taiwanese EAS',
      uk_ireland_eur: 'UK Ireland EUR',
      uk_k_interval_eur: 'UK10K INTERVAL EUR',
      uk_k_nfbc_finrisk_fin: 'UK10K NFBC FINRISK FIN',
    },
  },
  variants: {
    consequences: [
      {
        term: 'lof',
        label: 'loss of function',
        category: 'lof',
      },
      {
        term: 'stoplost',
        label: 'stop lost',
        category: 'missense',
      },
      {
        term: 'startlost',
        label: 'start lost',
        category: 'missense',
      },
      {
        term: 'mis',
        label: 'missense',
        category: 'missense',
      },
      {
        term: 'ns',
        label: 'inframe indel',
        category: 'missense',
      },
      {
        term: 'syn',
        label: 'synonymous',
        category: 'synonymous',
      },
      {
        term: 'splice',
        label: 'splice region',
        category: 'other',
      },
    ],
    columns: [
      {
        key: 'n_denovos',
        heading: 'No. de novos',
        minWidth: 80,
        type: 'int',
        tooltip: 'Number of genotypes determined to de novo in origin.',
        showOnGenePage: true,
      },
      {
        key: 'p',
        heading: 'P-Val',
        minWidth: 65,
        tooltip: 'P-value from single variant association testing.',
        showOnGenePage: true,
      },
      {
        key: 'est',
        heading: 'Estimate',
        minWidth: 80,
        tooltip: 'Effect size from single variant association testing.',
        showOnGenePage: true,
      },
      {
        key: 'se',
        heading: 'SE',
      },
      {
        key: 'qp',
        heading: 'Qp',
      },
      {
        key: 'i2',
        heading: 'I2',
      },
      {
        key: 'source',
        heading: 'Source',
        type: 'string[]',
        render: value => value.join(', '),
        renderForCSV: value => value.join(', '),
      },
      {
        key: 'in_analysis',
        heading: 'In Analysis',
        minWidth: 85,
        tooltip: 'Was this variant used in gene burden analysis.',
        type: 'boolean',
        render: value => (value ? 'yes' : ''),
        renderForCSV: value => (value ? 'yes' : ''),
        showOnDetails: false,
        showOnGenePage: true,
      },
    ],
  },
}
