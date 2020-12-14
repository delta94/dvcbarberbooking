import { AppError } from '@commons/types';
import { CityFields } from './list-city-barber';

export const CREATE_CITY_BARBER = 'CREATE_CITY_BARBER';
export const CREATE_CITY_BARBER_SUCCESS = 'CREATE_CITY_BARBER_SUCCESS';
export const CREATE_CITY_BARBER_ERROR = 'CREATE_CITY_BARBER_ERROR';

export interface CreateCityBarberAction {
  type: typeof CREATE_CITY_BARBER;
  payload: CityFields;
}

export interface CreateCityBarberActionSuccess {
  type: typeof CREATE_CITY_BARBER_SUCCESS;
}

export interface CreateCityBarberActionError {
  type: typeof CREATE_CITY_BARBER_ERROR;
  payload: AppError;
}

export type CreateCityBarberActionTypes =
  | CreateCityBarberAction
  | CreateCityBarberActionSuccess
  | CreateCityBarberActionError;
