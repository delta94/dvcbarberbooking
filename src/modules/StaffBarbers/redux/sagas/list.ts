import { getListStaffFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { StaffFields, ListStaffBarberAction } from '../action-types';
import { ListStaffBarberSuccess, ListStaffBarberError } from '../actions/list-staff';

export function* ListStaffSaga(action: ListStaffBarberAction) {
  try {
    const data: StaffFields[] = yield call(getListStaffFromFirebase);
    yield put(ListStaffBarberSuccess(data));
  } catch (error) {
    yield put(ListStaffBarberError(error));
  }
}
