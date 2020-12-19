import { call, put } from 'redux-saga/effects';
import { branchFields, ListBranchByCityAction } from '../action-types';
import { ListBranchByCityError, ListBranchByCitySuccess } from '../actions/list-branch';
import { getBranchByCityFromFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* ListBranchByCitySaga(action: ListBranchByCityAction) {
  try {
    const data: branchFields[] = yield call(getBranchByCityFromFirebase, action.payload);
    yield put(ListBranchByCitySuccess(data));
  } catch (error) {
    yield put(ListBranchByCityError(error));
  }
}
