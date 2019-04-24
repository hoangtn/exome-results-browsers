import React from 'react'

import browserConfig from '@browser/config'

import Link from '../Link'

const baseColumns = [
  {
    key: 'gene_name',
    heading: 'Gene Name',
    isSortable: true,
    minWidth: 100,
    searchable: true,
    render: row => (
      <Link className="grid-cell-content" target="_blank" to={`/gene/${row.gene_name}`}>
        {row.gene_name}
      </Link>
    ),
  },
  {
    key: 'gene_description',
    heading: 'Description',
    isSortable: true,
    minWidth: 140,
  },
  {
    key: 'gene_id',
    heading: 'Gene ID',
    isSortable: true,
    minWidth: 140,
  },
]

const resultColumns = browserConfig.geneResults.columns.map(inputColumn => {
  const outputColumn = {
    isSortable: true,
    minWidth: 65,
    ...inputColumn,
  }

  if (inputColumn.render) {
    outputColumn.render = (row, key) => inputColumn.render(row[key])
  }

  if (inputColumn.renderForCSV) {
    outputColumn.renderForCSV = (row, key) => inputColumn.renderForCSV(row[key])
  }

  return outputColumn
})

const columns = [...baseColumns, ...resultColumns]

export default columns
