import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Router from '../../components/Routes';

import { isLoadingDataBasket } from '../../core/functions/loadingPage';

const mapStateToProps = state => {
  return {
    authUser: state.fetch.user,
  };
};

@compose(
  withRouter,
  connect(mapStateToProps),
)
class RoutesContainer extends Component {
  static propTypes = {
    authUser: PropTypes.object,
    fetching: PropTypes.object,
  };

  static defaultProps = {
    fetching: { isFetch: false, type: '' },
  };

  render() {
    const {
      authUser,
      fetching: { isFetch, type },
    } = this.props;

    return (
      <Router
        isLoadingBasket={isLoadingDataBasket(isFetch, type)}
        authUser={authUser}
      />
    );
  }
}

export default RoutesContainer;
