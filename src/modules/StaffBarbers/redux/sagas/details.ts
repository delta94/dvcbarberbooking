import { getDetailStaffFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { StaffFields, DetailStaffBarberAction } from '../action-types';
import { DetailStaffBarberSuccess, DetailStaffBarberError } from '../actions/detail';

export function* DetailStaffSaga(action: DetailStaffBarberAction) {
  try {
    const data: StaffFields = yield call(getDetailStaffFromFirebase, action.id, action.idCity, action.idBranch);

    yield put(DetailStaffBarberSuccess(data));
  } catch (error) {
    yield put(DetailStaffBarberError(error));
  }
}
