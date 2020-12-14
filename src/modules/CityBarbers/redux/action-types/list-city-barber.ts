import { AppError } from '@commons/types';

export const LIST_CITY_BARBER = 'LIST_CITY_BARBER';
export const LIST_CITY_BARBER_SUCCESS = 'LIST_CITY_BARBER_SUCCESS';
export const LIST_CITY_BARBER_ERROR = 'LIST_CITY_BARBER_ERROR';
export const LIST_CITY_BARBER_UPDATE_FILTER = 'LIST_CITY_BARBER_UPDATE_FILTER';

export type CityFields = {
  id: string;
  name?: string;
  status: boolean;
};

export interface ListCityBarberAction {
  type: typeof LIST_CITY_BARBER;
}

export interface ListCityBarberActionSuccess {
  type: typeof LIST_CITY_BARBER_SUCCESS;
  payload: CityFields[];
}

export interface ListCityBarberActionError {
  type: typeof LIST_CITY_BARBER_ERROR;
  payload: AppError;
}

export type ListCityBarberActionTypes = ListCityBarberAction | ListCityBarberActionSuccess | ListCityBarberActionError;
