import { AppError } from '@commons/types';
import {
  CategoriesFields,
  LIST_CATEGORY_BARBER,
  LIST_CATEGORY_BARBER_ERROR,
  LIST_CATEGORY_BARBER_SUCCESS,
  ListCategoriesBarberActionTypes,
} from '../action-types/list-category-barber';

export const listCategotyBarber = (): ListCategoriesBarberActionTypes => ({
  type: LIST_CATEGORY_BARBER,
});

export const listCategotyBarberError = (payload: AppError): ListCategoriesBarberActionTypes => ({
  type: LIST_CATEGORY_BARBER_ERROR,
  payload,
});

export const listCategotyBarberSuccess = (payload: CategoriesFields[]): ListCategoriesBarberActionTypes => ({
  type: LIST_CATEGORY_BARBER_SUCCESS,
  payload,
});
