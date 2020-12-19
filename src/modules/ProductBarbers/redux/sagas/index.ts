import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { listProductBarberSaga } from './list';
import { createProductBarberSaga } from './create';
import { deleteProductSaga } from './delete';
import { DetailProductSaga } from './details';

export default function* bookingSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_PRODUCT_BARBER, listProductBarberSaga),
    yield takeLatest(actionTypes.CREATE_PRODUCT_BARBER, createProductBarberSaga),
    yield takeLatest(actionTypes.DELETE_PRODUCT, deleteProductSaga),
    yield takeLatest(actionTypes.DETAIL_PRODUCT, DetailProductSaga),
  ]);
}
