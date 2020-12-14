import { call, put } from 'redux-saga/effects';
import { branchFields, ListBranchBarberAction } from '../action-types';
import { ListBranchBarberError, ListBranchBarberSuccess } from '../actions/list-branch';
import { getAllBranchFromFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* ListBranchSaga(action: ListBranchBarberAction) {
  try {
    const data: branchFields[] = yield call(getAllBranchFromFirebase);

    yield put(ListBranchBarberSuccess(data));
  } catch (error) {
    yield put(ListBranchBarberError(error));
  }
}
