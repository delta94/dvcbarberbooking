import { AppError } from '@commons/types';
import {
  DELETE_CATEGORY_BARBER,
  DELETE_CATEGORY_BARBER_ERROR,
  DELETE_CATEGORY_BARBER_SUCCESS,
  DeleteCategoryBarberActionTypes,
} from '../action-types/delete';

export const deleteCategoryBarber = (payload: string): DeleteCategoryBarberActionTypes => ({
  type: DELETE_CATEGORY_BARBER,
  payload,
});

export const deleteCategoryBarberError = (payload: AppError, target: string): DeleteCategoryBarberActionTypes => ({
  type: DELETE_CATEGORY_BARBER_ERROR,
  payload,
  target,
});

export const deleteCategoryBarberSuccess = (payload: string): DeleteCategoryBarberActionTypes => ({
  type: DELETE_CATEGORY_BARBER_SUCCESS,
  payload,
});
