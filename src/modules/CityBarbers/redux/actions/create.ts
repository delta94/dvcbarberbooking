import { AppError } from '@commons/types';
import {
  CREATE_CITY_BARBER,
  CREATE_CITY_BARBER_ERROR,
  CREATE_CITY_BARBER_SUCCESS,
  CityFields,
  CreateCityBarberActionTypes,
} from '../action-types';

export const CreateCityBarber = (payload: CityFields): CreateCityBarberActionTypes => ({
  type: CREATE_CITY_BARBER,
  payload,
});

export const CreateCityBarberError = (payload: AppError): CreateCityBarberActionTypes => ({
  type: CREATE_CITY_BARBER_ERROR,
  payload,
});

export const CreateCityBarberSuccess = (): CreateCityBarberActionTypes => ({
  type: CREATE_CITY_BARBER_SUCCESS,
});
