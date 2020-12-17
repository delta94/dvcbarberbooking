import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { listProductBarberSaga } from './list';
import { createProductBarberSaga } from './create';

export default function* bookingSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_PRODUCT_BARBER, listProductBarberSaga),
    yield takeLatest(actionTypes.CREATE_PRODUCT_BARBER, createProductBarberSaga),
  ]);
}
