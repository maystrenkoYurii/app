import { types } from '../../flux-saga/bus/fetch/basket/types';

const isLoadingPage = (isFetch, type, typePage) => {
  return isFetch && type === typePage;
};

export const isLoadingDataBasket = (isFetch, type) => {
  return isLoadingPage(isFetch, type, types.SET_FETCH_BASKET_PRODUCTS_REQUEST);
};
