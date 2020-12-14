import { AppError } from '@commons/types';
import { CityFields } from '../action-types';
import {
  DETAIL_CITY_BARBER,
  DETAIL_CITY_BARBER_ERROR,
  DETAIL_CITY_BARBER_SUCCESS,
  DetailCityBarberActionTypes,
} from '../action-types/detail';

export const DetailCityBarber = (payload: string): DetailCityBarberActionTypes => ({
  type: DETAIL_CITY_BARBER,
  payload,
});

export const DetailCityBarberError = (payload: AppError): DetailCityBarberActionTypes => ({
  type: DETAIL_CITY_BARBER_ERROR,
  payload,
});

export const DetailCityBarberSuccess = (payload: CityFields): DetailCityBarberActionTypes => ({
  type: DETAIL_CITY_BARBER_SUCCESS,
  payload,
});
