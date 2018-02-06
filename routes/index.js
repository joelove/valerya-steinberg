import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { AppContainer, HomeContainer } from 'containers';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer} />
  </Route>
);
