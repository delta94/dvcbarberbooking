// import { getAllProductApi } from '@modules/Product/service/apis';
import { call, put } from 'redux-saga/effects';
import { GetUserAction } from '../action-types/detail';
import { getUserSuccess, getuserError } from '../actions/detail';
import { getDetailUserFromFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* getUserSaga(action: GetUserAction) {
  try {
    const data: any = yield call(getDetailUserFromFirebase, action.payload);
    yield put(getUserSuccess(data || undefined));
  } catch (error) {
    yield put(getuserError(error));
  }
}
