import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { listCitySaga } from './list';
import { updateCityBarberSaga } from './update';
import { createCityBarberSaga } from './create';
import { deleteCityBarberSaga } from './delete';
import { detailCityBarberSaga } from './detail';

export default function* CityBarberSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_CITY_BARBER, listCitySaga),
    yield takeLatest(actionTypes.UPDATE_CITY_BARBER, updateCityBarberSaga),
    yield takeLatest(actionTypes.CREATE_CITY_BARBER, createCityBarberSaga),
    yield takeLatest(actionTypes.DELETE_CITY_BARBER, deleteCityBarberSaga),
    yield takeLatest(actionTypes.DETAIL_CITY_BARBER, detailCityBarberSaga),
  ]);
}
