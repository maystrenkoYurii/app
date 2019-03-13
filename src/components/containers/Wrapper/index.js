import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Wrapper from '../../presentational/Wrapper';

class WrapperContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
  };

  render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}

export default WrapperContainer;
