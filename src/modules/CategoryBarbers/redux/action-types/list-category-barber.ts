import { AppError } from '@commons/types';

export const LIST_CATEGORY_BARBER = 'LIST_CATEGORY_BARBER';
export const LIST_CATEGORY_BARBER_SUCCESS = 'LIST_CATEGORY_BARBER_SUCCESS';
export const LIST_CATEGORY_BARBER_ERROR = 'LIST_CATEGORY_BARBER_ERROR';
export const LIST_CATEGORY_BARBER_UPDATE_FILTER = 'LIST_CATEGORY_BARBER_UPDATE_FILTER';

export type CategoriesFields = {
  id: string;
  name?: string;
};

export interface ListCategoriesBarberAction {
  type: typeof LIST_CATEGORY_BARBER;
}

export interface ListCategoriesBarberActionSuccess {
  type: typeof LIST_CATEGORY_BARBER_SUCCESS;
  payload: CategoriesFields[];
}

export interface ListCategoriesBarberActionError {
  type: typeof LIST_CATEGORY_BARBER_ERROR;
  payload: AppError;
}

export type ListCategoriesBarberActionTypes =
  | ListCategoriesBarberAction
  | ListCategoriesBarberActionSuccess
  | ListCategoriesBarberActionError;
