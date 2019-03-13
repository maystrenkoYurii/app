import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';

import Root from '../../presentational/Root';

@compose(withRouter)
class RootContainer extends Component {
  render() {
    return <Root />;
  }
}

export default RootContainer;
