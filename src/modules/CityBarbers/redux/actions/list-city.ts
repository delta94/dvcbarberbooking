import { AppError } from '@commons/types';
import {
  CityFields,
  LIST_CITY_BARBER,
  LIST_CITY_BARBER_ERROR,
  LIST_CITY_BARBER_SUCCESS,
  ListCityBarberActionTypes,
} from '../action-types/list-city-barber';

export const listCityBarber = (): ListCityBarberActionTypes => ({
  type: LIST_CITY_BARBER,
});

export const listCityBarberError = (payload: AppError): ListCityBarberActionTypes => ({
  type: LIST_CITY_BARBER_ERROR,
  payload,
});

export const listCityBarberSuccess = (payload: CityFields[]): ListCityBarberActionTypes => ({
  type: LIST_CITY_BARBER_SUCCESS,
  payload,
});
