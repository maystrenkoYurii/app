import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticatedInterface } from '../../../core/functions';
import { constants } from '../../../core/constants/index';

import Home from '../../containers/Pages/Public/Home';
import Basket from '../../containers/Pages/Public/Basket';
import Collection from '../../containers/Pages/Public/Collection';
import Product from '../../containers/Pages/Public/Product';
import Help from '../../containers/Pages/Public/Help';
import Account from '../../containers/Pages/Private/Account';

class Routes extends Component {
  static propTypes = {
    authUser: PropTypes.object.isRequired,
  };

  render() {
    const { authUser } = this.props;

    return (
      <Switch>
        <Route exact path={constants.PATCH_URL_HOME} component={Home} />

        <Route exact path={constants.PATCH_URL_PRODUCT} component={Product} />

        <Route exact path={constants.PATCH_URL_BASKET} component={Basket} />

        <Route exact path={constants.PATCH_URL_HELP} component={Help} />

        <Route
          exact
          path={constants.PATCH_URL_COLLECTION}
          component={Collection}
        />

        {isAuthenticatedInterface(authUser) && (
          <Route exact path={constants.PATCH_URL_ACCOUNT} component={Account} />
        )}

        <Redirect to={constants.PATCH_URL_HOME} />
      </Switch>
    );
  }
}

export default Routes;
