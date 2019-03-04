//import CartsService from '@plasma-platform/tm-service-carts';

import { basketActions } from '../../actions';
import { fetchActionsAsync } from '../../../../ui/fetch/saga/asyncActions';

import { types } from '../../types';

//import { constants } from '../../../../../../core/constants/index';

import { put /*, select, call*/ } from 'redux-saga/effects';

export function* callFetchBasketProductsWorker() {
  try {
    yield put(basketActions.setFetchBasketProductsRequest());
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        isFetch: true,
        type: types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      }),
    );

    //const token = yield select(state => state.fetch.user.token);

    // const cartsService = new CartsService(constants.API_URL_BASKED, token);
    // const cart = yield call(cartsService.addNewCart, 'USD', {
    //   affiliate: 'colorlib',
    // });
    // console.log(cart);

    yield put(basketActions.setFetchBasketProductsSuccess());
  } catch (error) {
    yield put(basketActions.setFetchBasketProductsError());
    yield put(
      fetchActionsAsync.setFetchEmitErrorAsync({
        error: error,
        type: types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      }),
    );
  } finally {
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        type: types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      }),
    );
  }
}
