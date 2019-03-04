import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

import Basket from '../../../../components/Pages/Public/Basket/index';

import { withPageFetch } from '../../../../hok/withPageFetch';

@compose(withPageFetch)
class BasketContainer extends Component {
  static propTypes = {
    getPageFetch: PropTypes.func,
  };

  componentDidMount() {
    const { getPageFetch } = this.props;
    getPageFetch();
  }

  render() {
    return <Basket />;
  }
}

export default BasketContainer;
