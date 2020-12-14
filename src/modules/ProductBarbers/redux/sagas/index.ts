import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { listProductBarberSaga } from './list';

export default function* bookingSagas() {
  return all([yield takeLatest(actionTypes.LIST_PRODUCT_BARBER, listProductBarberSaga)]);
}
