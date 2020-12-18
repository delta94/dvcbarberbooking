import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { ListStaffSaga } from './list';
import { CreateStaffSaga } from './create';
import { DetailStaffSaga } from './details';
import { UpdateStaffSaga } from './update';
import { DeleteStaffSaga } from './delete';

export default function* StaffBarberSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_STAFF_BARBER, ListStaffSaga),
    yield takeLatest(actionTypes.DETAIL_STAFF_BARBER, DetailStaffSaga),
    yield takeLatest(actionTypes.CREATE_STAFF_BARBER, CreateStaffSaga),
    yield takeLatest(actionTypes.UPDATE_STAFF_BARBER, UpdateStaffSaga),
    yield takeLatest(actionTypes.DELETE_STAFF_BARBER, DeleteStaffSaga),
  ]);
}
