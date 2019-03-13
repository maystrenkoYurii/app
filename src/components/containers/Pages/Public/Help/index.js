import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class HelpContainer extends Component {
  render() {
    const help = import('../../../../../components/presentational/Pages/Public/Help');

    return <Loadable dynamicImport={help} />;
  }
}

export default HelpContainer;
