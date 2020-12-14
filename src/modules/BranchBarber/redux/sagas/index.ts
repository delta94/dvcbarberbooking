import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { ListBranchSaga } from './list';
import { DetailBranchBarberSaga } from './detail';
import { ListBranchByCitySaga } from './listByCity';
import { createBranchBarberSaga } from './create';

export default function* BranchBarberSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_BRANCH_BARBER, ListBranchSaga),
    yield takeLatest(actionTypes.DETAIL_BRANCH_BARBER, DetailBranchBarberSaga),
    yield takeLatest(actionTypes.LIST_BRANCH_BARBER_BY_CITY, ListBranchByCitySaga),
    yield takeLatest(actionTypes.CREATE_BRANCH_BARBER, createBranchBarberSaga),
  ]);
}
