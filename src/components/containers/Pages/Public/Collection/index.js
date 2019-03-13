import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class CollectionContainer extends Component {
  render() {
    const collection = import('../../../../../components/presentational/Pages/Public/Collection');

    return <Loadable dynamicImport={collection} />;
  }
}

export default CollectionContainer;
