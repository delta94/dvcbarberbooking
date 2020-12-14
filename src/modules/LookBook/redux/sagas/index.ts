import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { listUsersSaga } from './list';
import { deleteUserSaga } from './delete-game';
import { getUserSaga } from './detail';
import { createUserSaga } from './create';

export default function* userSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_USERS, listUsersSaga),
    yield takeLatest(actionTypes.DELETE_USER, deleteUserSaga),
    yield takeLatest(actionTypes.GET_USER, getUserSaga),
    yield takeLatest(actionTypes.CREATE_USER, createUserSaga),
  ]);
}
