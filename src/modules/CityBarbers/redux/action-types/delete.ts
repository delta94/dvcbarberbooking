import { AppError } from '@commons/types';

export const DELETE_CITY_BARBER = 'DELETE_CITY_BARBER';
export const DELETE_CITY_BARBER_SUCCESS = 'DELETE_CITY_BARBER_SUCCESS';
export const DELETE_CITY_BARBER_ERROR = 'DELETE_CITY_BARBER_ERROR';

export interface DeleteCityBarberAction {
  type: typeof DELETE_CITY_BARBER;
  payload: string;
}

export interface DeleteCityBarberActionSuccess {
  type: typeof DELETE_CITY_BARBER_SUCCESS;
  payload: string;
}

export interface DeleteCityBarberActionError {
  type: typeof DELETE_CITY_BARBER_ERROR;
  payload: AppError;
  target: string;
}

export type DeleteCityBarberActionTypes =
  | DeleteCityBarberAction
  | DeleteCityBarberActionSuccess
  | DeleteCityBarberActionError;
