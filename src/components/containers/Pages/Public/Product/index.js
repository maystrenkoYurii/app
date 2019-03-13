import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class ProductContainer extends Component {
  render() {
    const product = import('../../../../../components/presentational/Pages/Public/Product');

    return <Loadable dynamicImport={product} />;
  }
}

export default ProductContainer;
