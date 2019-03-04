import { asyncTypes } from './asyncTypes';

export const basketActionsAsync = Object.freeze({
  setFetchBasketProductsAsync: () => ({
    type: asyncTypes.SET_FETCH_BASKET_PRODUCTS_ASYNC,
  }),
});
