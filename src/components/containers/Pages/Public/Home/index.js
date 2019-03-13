import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class HomeContainer extends Component {
  render() {
    const home = import('../../../../../components/presentational/Pages/Public/Home');

    return <Loadable dynamicImport={home} />;
  }
}

export default HomeContainer;
