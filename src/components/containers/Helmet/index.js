import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Helmet from '../../presentational/Helmet';

const mapStateToProps = state => {
  return {
    location: state.router.location,
    language: state.ui.settings.language.language,
  };
};

@compose(connect(mapStateToProps))
class HelmetContainer extends Component {
  static propTypes = {
    location: PropTypes.object,
    language: PropTypes.string,
  };

  render() {
    const { location, language } = this.props;

    return <Helmet location={location} language={language} />;
  }
}

export default HelmetContainer;
