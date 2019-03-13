import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import AppHelmet from '../../containers/Helmet';
import Toolbar from '../../containers/Wrapper/Toolbar';
import Offer from '../../containers/Wrapper/Offer';
import Footer from '../../containers/Wrapper/Footer';

import './styles.pcss';

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
  };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <AppHelmet />
        <div className="app-wrapper">
          <Toolbar className="app-wrapper_toolbar" />
          <main className="app-wrapper_main">
            <div className="app-wrapper_toolbar" />
            {children}
            <Offer />
          </main>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Wrapper;
