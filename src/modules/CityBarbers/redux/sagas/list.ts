import { getListCityFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { CityFields, ListCityBarberAction } from '../action-types';
import { listCityBarberError, listCityBarberSuccess } from '../actions/list-city';

export function* listCitySaga(action: ListCityBarberAction) {
  try {
    const data: CityFields[] = yield call(getListCityFromFirebase);

    yield put(listCityBarberSuccess(data));
  } catch (error) {
    yield put(listCityBarberError(error));
  }
}
