import { all, takeLatest } from 'redux-saga/effects';
import { loginAsync, loginSuccessAsync } from './login';
import * as actionTypes from '../action-types';
import { logoutFlow } from './logout';

export default function* root() {
  return all([
    yield takeLatest(actionTypes.LOGIN, loginAsync),
    yield takeLatest(actionTypes.LOGIN_SUCCESS, loginSuccessAsync),
    yield takeLatest(actionTypes.LOGOUT, logoutFlow),
  ]);
}
