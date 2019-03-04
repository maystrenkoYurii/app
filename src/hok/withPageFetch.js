import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { basketActionsAsync } from '../flux-saga/bus/fetch/basket/saga/asyncActions';

import { types } from '../flux-saga/bus/fetch/basket/types';

import {
  isClient,
  isLoadingPage,
  getFetchingWithReselect,
} from '../core/functions';
import { constants } from '../core/constants/index';

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
      location: state.router.location,
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
      location: PropTypes.object,
      fetching: PropTypes.object,
    };

    getPageFetchForLocation = () => {
      const { location, actions } = this.props;

      if (isClient()) {
        const path = location.pathname;

        switch (path) {
          case constants.PATCH_URL_BASKET:
            return actions.setFetchBasketProductsAsync();

          default:
            return () => null;
        }
      }
    };

    render() {
      const {
        fetching: { isFetch, type },
      } = this.props;

      const isLoadingBasket = isLoadingPage(
        isFetch,
        type,
        types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      );

      return (
        <Enchanced
          getPageFetch={this.getPageFetchForLocation}
          isLoadingBasket={isLoadingBasket}
          {...this.props}
        />
      );
    }
  }

  return withPageFetch;
};
