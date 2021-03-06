import React from 'react'
import styled from 'styled-components'

import { Page, PageHeading } from '@gnomad/ui'

import browserConfig from '@browser/config'
import HomePageContent from '@browser/HomePageContent'

import DocumentTitle from './DocumentTitle'
import Link from './Link'
import Searchbox from './Searchbox'

const HomePageHeading = styled(PageHeading)`
  margin: 3em 0 1em;
`

const HomePageWrapper = styled(Page)`
  max-width: 740px;
  font-size: 16px;

  p {
    margin: 0 0 1.5em;
    line-height: 1.5;
  }
`

const HomePage = () => (
  <HomePageWrapper>
    <DocumentTitle />
    <HomePageHeading>{browserConfig.homePageHeading}</HomePageHeading>
    {browserConfig.showSearchOnHomePage !== false && (
      <React.Fragment>
        <Searchbox width="100%" />
        <p style={{ marginTop: '0.25em' }}>
          Or <Link to="/results">view all results</Link>
        </p>
      </React.Fragment>
    )}
    <HomePageContent />
  </HomePageWrapper>
)

export default HomePage
