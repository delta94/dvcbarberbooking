import { AppError } from '@commons/types';
import { CityFields } from './list-city-barber';

export const DETAIL_CITY_BARBER = 'DETAIL_CITY_BARBER';
export const DETAIL_CITY_BARBER_SUCCESS = 'DETAIL_CITY_BARBER_SUCCESS';
export const DETAIL_CITY_BARBER_ERROR = 'DETAIL_CITY_BARBER_ERROR';

export interface DetailCityBarberAction {
  type: typeof DETAIL_CITY_BARBER;
  payload: string;
}

export interface DetailCityBarberActionSuccess {
  type: typeof DETAIL_CITY_BARBER_SUCCESS;
  payload: CityFields;
}

export interface DetailCityBarberActionError {
  type: typeof DETAIL_CITY_BARBER_ERROR;
  payload: AppError;
}

export type DetailCityBarberActionTypes =
  | DetailCityBarberAction
  | DetailCityBarberActionSuccess
  | DetailCityBarberActionError;
