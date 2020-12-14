import { AppError } from '@commons/types';
import {
  DELETE_CITY_BARBER,
  DELETE_CITY_BARBER_ERROR,
  DELETE_CITY_BARBER_SUCCESS,
  DeleteCityBarberActionTypes,
} from '../action-types/delete';

export const DeleteCityBarber = (payload: string): DeleteCityBarberActionTypes => ({
  type: DELETE_CITY_BARBER,
  payload,
});

export const DeleteCityBarberError = (payload: AppError, target: string): DeleteCityBarberActionTypes => ({
  type: DELETE_CITY_BARBER_ERROR,
  payload,
  target,
});

export const DeleteCityBarberSuccess = (payload: string): DeleteCityBarberActionTypes => ({
  type: DELETE_CITY_BARBER_SUCCESS,
  payload,
});
