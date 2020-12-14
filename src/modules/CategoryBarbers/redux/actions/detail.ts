import { AppError } from '@commons/types';
import { CategoriesFields } from '../action-types';
import {
  GET_CATEGORY_BARBER,
  GET_CATEGORY_BARBER_ERROR,
  GET_CATEGORY_BARBER_SUCCESS,
  GetCategoryBarberActionTypes,
} from '../action-types/detail';

export const GetCategoryBarber = (payload: string): GetCategoryBarberActionTypes => ({
  type: GET_CATEGORY_BARBER,
  payload,
});

export const GetCategoryBarberError = (payload: AppError): GetCategoryBarberActionTypes => ({
  type: GET_CATEGORY_BARBER_ERROR,
  payload,
});

export const GetCategoryBarberSuccess = (payload?: CategoriesFields): GetCategoryBarberActionTypes => ({
  type: GET_CATEGORY_BARBER_SUCCESS,
  payload,
});
