import { AppError } from '@commons/types';
import { CityFields } from './list-city-barber';

export const UPDATE_CITY_BARBER = 'UPDATE_CITY_BARBER';
export const UPDATE_CITY_BARBER_SUCCESS = 'UPDATE_CITY_BARBER_SUCCESS';
export const UPDATE_CITY_BARBER_ERROR = 'UPDATE_CITY_BARBER_ERROR';

export interface UpdateCityBarberAction {
  type: typeof UPDATE_CITY_BARBER;
  payload: CityFields;
}

export interface UpdateCityBarberActionSuccess {
  type: typeof UPDATE_CITY_BARBER_SUCCESS;
  payload: CityFields;
}

export interface UpdateCityBarberActionError {
  type: typeof UPDATE_CITY_BARBER_ERROR;
  payload: AppError;
}

export type UpdateCityBarberActionTypes =
  | UpdateCityBarberAction
  | UpdateCityBarberActionSuccess
  | UpdateCityBarberActionError;
