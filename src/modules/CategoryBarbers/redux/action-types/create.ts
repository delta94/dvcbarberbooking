import { AppError } from '@commons/types';
import { CategoriesFields } from './list-category-barber';

export const CREATE_CATEGORY_BARBER = 'CREATE_CATEGORY_BARBER';
export const CREATE_CATEGORY_BARBER_SUCCESS = 'CREATE_CATEGORY_BARBER_SUCCESS';
export const CREATE_CATEGORY_BARBER_ERROR = 'CREATE_CATEGORY_BARBER_ERROR';

export interface CreateCategoryBarberAction {
  type: typeof CREATE_CATEGORY_BARBER;
  payload: CategoriesFields;
}

export interface CreateCategoryBarberActionSuccess {
  type: typeof CREATE_CATEGORY_BARBER_SUCCESS;
}

export interface CreateCategoryBarberActionError {
  type: typeof CREATE_CATEGORY_BARBER_ERROR;
  payload: AppError;
}

export type CreateCategoryBarberActionTypes =
  | CreateCategoryBarberAction
  | CreateCategoryBarberActionSuccess
  | CreateCategoryBarberActionError;
