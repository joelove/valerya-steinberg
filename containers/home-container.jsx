import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBemClass from 'react-bem-builder';
import { HomeActions } from 'actions';
import { homeSelector } from 'selectors';

import 'styles/containers/home-container.scss';

export class HomeContainer extends Component {
  static defaultProps = {
    block: createBemClass('home'),
  }

  render() {
    const { block } = this.props;

    return (
      <h1 className={block()}>Home</h1>
    );
  }
}

export default connect(
  (state, props) => ({
    home: homeSelector(state, props),
  }), {
    ...HomeActions,
  },
)(HomeContainer);
