import React, { Component } from 'react';

import Wrapper from '../../containers/Wrapper';
import Routes from '../../containers/Routes/index';

import { isClient } from '../../../core/functions/common';

class Root extends Component {
  componentDidMount() {
    if (isClient()) {
      const initialState = document.getElementById('initialState');
      if (initialState) {
        initialState.remove();
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Routes />
      </Wrapper>
    );
  }
}

export default Root;
