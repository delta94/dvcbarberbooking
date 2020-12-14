import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { ListBillSaga } from './list';

export default function* BranchBarberSagas() {
  return all([yield takeLatest(actionTypes.LIST_BILL_BARBER, ListBillSaga)]);
}
