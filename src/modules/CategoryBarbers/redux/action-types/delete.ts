import { AppError } from '@commons/types';

export const DELETE_CATEGORY_BARBER = 'DELETE_CATEGORY_BARBER';
export const DELETE_CATEGORY_BARBER_SUCCESS = 'DELETE_CATEGORY_BARBER_SUCCESS';
export const DELETE_CATEGORY_BARBER_ERROR = 'DELETE_CATEGORY_BARBER_ERROR';

export interface DeleteCategoryBarberAction {
  type: typeof DELETE_CATEGORY_BARBER;
  payload: string;
}

export interface DeleteCategoryBarberActionSuccess {
  type: typeof DELETE_CATEGORY_BARBER_SUCCESS;
  payload: string;
}

export interface DeleteCategoryBarberActionError {
  type: typeof DELETE_CATEGORY_BARBER_ERROR;
  payload: AppError;
  target: string;
}

export type DeleteCategoryBarberActionTypes =
  | DeleteCategoryBarberAction
  | DeleteCategoryBarberActionSuccess
  | DeleteCategoryBarberActionError;
