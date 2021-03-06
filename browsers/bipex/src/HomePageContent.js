import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from '@gnomad/ui'

import Link from '../../../src/client/Link'
import Searchbox from '../../../src/client/Searchbox'

import Logo from './bipex.svg'

const StyledLogo = styled(Logo)`
  display: block;
  height: 200px;
  margin: 0 auto 2em;
`

export default () => (
  <React.Fragment>
    <StyledLogo />

    <Searchbox width="100%" />
    <p style={{ marginTop: '0.25em' }}>
      Or <Link to="/results">view all results</Link>
    </p>

    <p style={{ textAlign: 'justify' }}>
      The Bipolar Exome (BipEx) sequencing project is a collaboration between multiple institutions
      across the globe, which aims to increase our understanding of the disease architecture of
      bipolar disorder.
    </p>

    <p style={{ textAlign: 'center' }}>
      Example genes: <Link to="gene/ENSG00000023516">AKAP11</Link>,{' '}
      <Link to="/gene/ENSG00000161681">SHANK1</Link>.
    </p>

    <p style={{ textAlign: 'justify' }}>
      The BipEx dataset currently consists of 14,210 cases and 14,422 controls after quality
      control. See our{' '}
      <ExternalLink href="https://astheeggeggs.github.io/BipEx/qc.html">GitHub page</ExternalLink>{' '}
      for full details of the curation process and breakdown of subtypes, geographies, and
      collaborative partners.
    </p>

    <p style={{ textAlign: 'justify' }}>
      In this browser, you can explore the results of our single variant and gene based analyses. On
      each of the gene specific pages, you can examine the burden of putatively damaging rare
      variants (minor allele count (MAC) &le; 5) across the gene in the ‘Gene Result’ table.
    </p>

    <p style={{ textAlign: 'justify' }}>
      Variant counts in cases and controls with associated test results (for variants with MAC &ge;
      10 in the overall cohort) can be found in the table at the foot of the page. Click on a
      variant to see the breakdown by bipolar analysis group.
    </p>

    <p style={{ textAlign: 'justify' }}>
      By clicking through the dropdown and tabs, you can restrict case samples to bipolar analysis
      groups for variant and gene level tests, respectively.
    </p>

    <p style={{ textAlign: 'justify' }}>
      Note that the BipEx dataset has been joint-called and aligned to the GRCh38 reference genome.
    </p>
  </React.Fragment>
)
