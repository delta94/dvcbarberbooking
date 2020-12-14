import { call, put } from 'redux-saga/effects';
import { DetailCityBarberError, DetailCityBarberSuccess } from '../actions/detail';
import { CityFields, DetailCityBarberAction } from '../action-types';
import { getDetailCityBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* detailCityBarberSaga(action: DetailCityBarberAction) {
  try {
    const data: CityFields = yield call(getDetailCityBarberFirebase, action.payload);
    yield put(DetailCityBarberSuccess(data));
  } catch (error) {
    yield put(DetailCityBarberError(error));
  }
}
