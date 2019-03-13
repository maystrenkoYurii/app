import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { basketActionsAsync } from '../../flux-saga/bus/fetch/basket/saga/asyncActions';

import { types } from '../../flux-saga/bus/fetch/basket/types';

import {
  isClient,
  isLoadingPage,
  getFetchingWithReselect,
} from '../../core/functions/index';

export const withPageFetch = Enchanced => {
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          ...basketActionsAsync,
        },
        dispatch,
      ),
    };
  };

  const mapStateToProps = state => {
    return {
      fetching: getFetchingWithReselect(state),
    };
  };

  @compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )
  class withPageFetch extends Component {
    static propTypes = {
      actions: PropTypes.object,
      fetching: PropTypes.object,
    };

    getFetchBasket = () => {
      const { actions } = this.props;
      if (isClient()) {
        actions.setFetchBasketProductAsync();
      }
    };

    render() {
      const {
        fetching: { isFetch, type },
        ...other
      } = this.props;

      const isLoadingBasket = isLoadingPage(
        isFetch,
        type,
        types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      );

      return (
        <Enchanced
          isLoadingBasket={isLoadingBasket}
          getFetchBasket={this.getFetchBasket}
          {...other}
        />
      );
    }
  }

  return withPageFetch;
};
