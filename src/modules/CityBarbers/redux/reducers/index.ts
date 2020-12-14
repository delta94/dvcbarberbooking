import { combineReducers } from 'redux';

import listCityBarber, { ListCityBarberState } from './list';
import updateCityBarber, { UpdateCityBarberState } from './update';
import createCityBarber, { CreateCityBarberState } from './create';
import detailCityBarber, { DetailCityBarberState } from './detail';

export interface CityBarberModuleState {
  listCityBarber: ListCityBarberState;
  createCityBarber: CreateCityBarberState;
  detailCityBarber: DetailCityBarberState;
  updateCityBarber: UpdateCityBarberState;
}

export default combineReducers<CityBarberModuleState>({
  listCityBarber,
  createCityBarber,
  detailCityBarber,
  updateCityBarber,
});
