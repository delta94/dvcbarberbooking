import { AppError } from '@commons/types';
import { CityFields } from '../action-types';
import {
  UPDATE_CITY_BARBER,
  UPDATE_CITY_BARBER_ERROR,
  UPDATE_CITY_BARBER_SUCCESS,
  UpdateCityBarberActionTypes,
} from '../action-types/update';

export const UpdateCityBarber = (payload: CityFields): UpdateCityBarberActionTypes => ({
  type: UPDATE_CITY_BARBER,
  payload,
});

export const UpdateCityBarberError = (payload: AppError): UpdateCityBarberActionTypes => ({
  type: UPDATE_CITY_BARBER_ERROR,
  payload,
});

export const UpdateCityBarberSuccess = (payload: CityFields): UpdateCityBarberActionTypes => ({
  type: UPDATE_CITY_BARBER_SUCCESS,
  payload,
});
