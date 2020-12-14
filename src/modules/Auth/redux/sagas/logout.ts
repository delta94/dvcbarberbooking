// import env from '@/env';
import { CommonPath } from '@commons/base-routes';
import { getHistory } from '@helpers/history';
import { put } from 'redux-saga/effects';
import { logoutError, logoutSuccess } from '../actions/logout';
// const TOKEN_KEY = env.tokenKey;

export function* logoutFlow() {
  try {
    yield put(logoutSuccess());

    // Redirect
    getHistory().push(CommonPath.LOGIN_PATH);
  } catch (error) {
    yield put(logoutError(error));
  }
}
