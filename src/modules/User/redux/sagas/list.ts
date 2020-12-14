import { getListUserFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { ListUsersAction, User } from '../action-types';
import { listUsersError, listUsersSuccess } from '../actions/list-users';

export function* listUsersSaga(action: ListUsersAction) {
  try {
    const data: User[] = yield call(getListUserFromFirebase);
    yield put(listUsersSuccess(data));
  } catch (error) {
    yield put(listUsersError(error));
  }
}
