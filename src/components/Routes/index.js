import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loadable from '../../containers/Pages/Loadable';

import { isAuthenticatedInterface } from '../../core/functions';
import { constants } from '../../core/constants/index';

import { withPageFetch } from '../../hok/withPageFetch';

@compose(withPageFetch)
class Routes extends Component {
  static propTypes = {
    isLoadingBasket: PropTypes.bool,
    authUser: PropTypes.object.isRequired,
  };

  render() {
    const { authUser, isLoadingBasket } = this.props;

    const home = import('../../containers/Pages/Public/Home');
    const aboutProduct = import('../../containers/Pages/Public/AboutProduct');
    const basket = import('../../containers/Pages/Public/Basket');
    const help = import('../../containers/Pages/Public/Help');
    const collection = import('../../containers/Pages/Public/Collection');
    const account = import('../../containers/Pages/Private/Account');

    return (
      <Switch>
        <Route
          exact
          path={constants.PATCH_URL_HOME}
          component={props => <Loadable dynamicImport={home} {...props} />}
        />

        <Route
          exact
          path={constants.PATCH_URL_ABOUT_PRODUCT}
          component={props => (
            <Loadable dynamicImport={aboutProduct} {...props} />
          )}
        />

        <Route
          exact
          path={constants.PATCH_URL_BASKET}
          component={props => (
            <Loadable
              isLoading={isLoadingBasket}
              dynamicImport={basket}
              {...props}
            />
          )}
        />

        <Route
          exact
          path={constants.PATCH_URL_HELP}
          component={props => <Loadable dynamicImport={help} {...props} />}
        />

        <Route
          exact
          path={constants.PATCH_URL_COLLECTION}
          component={props => (
            <Loadable dynamicImport={collection} {...props} />
          )}
        />

        {isAuthenticatedInterface(authUser) && (
          <Route
            exact
            path={constants.PATCH_URL_ACCOUNT}
            component={props => <Loadable dynamicImport={account} {...props} />}
          />
        )}

        <Redirect to={constants.PATCH_URL_HOME} />
      </Switch>
    );
  }
}

export default Routes;
