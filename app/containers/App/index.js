/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/MainPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  // display: flex;
  // min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="BTP Dr. Atul Jain"
        defaultTitle="BTP Dr. Atul Jain"
      >
        <meta name="description" content="BTP Dr. Atul Jain" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} /> */}
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
