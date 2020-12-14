import { AppError } from '@commons/types';
import {
  CategoriesFields,
  CREATE_CATEGORY_BARBER,
  CREATE_CATEGORY_BARBER_ERROR,
  CREATE_CATEGORY_BARBER_SUCCESS,
  CreateCategoryBarberActionTypes,
} from '../action-types';

export const createCategoryBarber = (payload: CategoriesFields): CreateCategoryBarberActionTypes => ({
  type: CREATE_CATEGORY_BARBER,
  payload,
});

export const createCategoryBarberError = (payload: AppError): CreateCategoryBarberActionTypes => ({
  type: CREATE_CATEGORY_BARBER_ERROR,
  payload,
});

export const createCategoryBarberSuccess = (): CreateCategoryBarberActionTypes => ({
  type: CREATE_CATEGORY_BARBER_SUCCESS,
});
