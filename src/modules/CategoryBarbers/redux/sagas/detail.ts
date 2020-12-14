// import { getAllProductApi } from '@modules/Product/service/apis';
import { getDetailCategoryBarberFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { GetCategoryBarberAction } from '../action-types/detail';
import { GetCategoryBarberSuccess, GetCategoryBarberError } from '../actions/detail';

export function* getCategoryBarberSaga(action: GetCategoryBarberAction) {
  try {
    const data: any = yield call(getDetailCategoryBarberFromFirebase, action.payload);
    yield put(GetCategoryBarberSuccess(data || undefined));
  } catch (error) {
    yield put(GetCategoryBarberError(error));
  }
}
