import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

import Loadable from '../../../../containers/Loadable';

import { withPageFetch } from '../../../../hok/withPageFetch';

@compose(withPageFetch)
class BasketContainer extends Component {
  static propTypes = {
    isLoadingBasket: PropTypes.bool,
    getFetchBasket: PropTypes.func,
  };

  componentDidMount() {
    const { getFetchBasket } = this.props;
    getFetchBasket();
  }

  render() {
    const { isLoadingBasket } = this.props;

    const basket = import('../../../../../components/presentational/Pages/Public/Basket');

    return <Loadable isLoading={isLoadingBasket} dynamicImport={basket} />;
  }
}

export default BasketContainer;
