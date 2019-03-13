import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Layout from '../../../containers/Pages/Wrapper/Layout';
import About from '../../../containers/Wrapper/Footer/About';
import Navigation from '../../../containers/Wrapper/Footer/Navigation';
import Subscribe from '../../../containers/Wrapper/Footer/Subscribe';
import Other from '../../../containers/Wrapper/Footer/Other';

import './styles.pcss';

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(['footer', className])}>
        <Layout>
          <About className="footer_about" />
          <Navigation className="footer_navigation" />
          <Subscribe className="footer_subscribe" />
          <Other className="footer_other" />
        </Layout>
      </div>
    );
  }
}

export default Footer;
