import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { DetailBranchBarberError, DetailBranchBarberSuccess } from '../actions/detail';
import { branchFields, DetailBranchBarberAction } from '../action-types';
import { getDetailBranchFromFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* DetailBranchBarberSaga(action: DetailBranchBarberAction) {
  try {
    const data: branchFields = yield call(getDetailBranchFromFirebase, action.id, action.idCity);
    yield put(DetailBranchBarberSuccess(data));
    getHistory().push('/branchBarber');
  } catch (error) {
    yield put(DetailBranchBarberError(error));
  }
}
