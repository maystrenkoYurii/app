import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Basket from '../../../../components/Pages/Public/Basket/index';

import { basketActionsAsync } from '../../../../flux-saga/bus/fetch/basket/saga/asyncActions';

import { isClient } from '../../../../core/functions';

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

const mapStateToProps = () => {
  return {};
};

@compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
class BasketContainer extends Component {
  static propTypes = {
    actions: PropTypes.object,
  };

  componentDidMount() {
    const { actions } = this.props;

    if (isClient()) {
      actions.setFetchBasketProductsAsync();
    }
  }

  render() {
    return <Basket />;
  }
}

export default BasketContainer;
