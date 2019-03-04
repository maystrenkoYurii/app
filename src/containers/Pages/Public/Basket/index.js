import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

import Basket from '../../../../components/Pages/Public/Basket/index';

import { withPageFetch } from '../../../../hok/withPageFetch';

@compose(withPageFetch)
class BasketContainer extends Component {
  static propTypes = {
    getPageFetchForLocation: PropTypes.func,
  };

  componentDidMount() {
    const { getPageFetchForLocation } = this.props;
    getPageFetchForLocation();
  }

  render() {
    return <Basket />;
  }
}

export default BasketContainer;
