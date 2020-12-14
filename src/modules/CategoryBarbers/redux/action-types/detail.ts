import { AppError } from '@commons/types';

export const GET_CATEGORY_BARBER = 'GET_CATEGORY_BARBER';
export const GET_CATEGORY_BARBER_SUCCESS = 'GET_CATEGORY_BARBER_SUCCESS';
export const GET_CATEGORY_BARBER_ERROR = 'GET_CATEGORY_BARBER_ERROR';

export interface GetCategoryBarberAction {
  type: typeof GET_CATEGORY_BARBER;
  payload: string;
}

export interface GetCategoryBarberActionSuccess {
  type: typeof GET_CATEGORY_BARBER_SUCCESS;
  payload?: any;
}

export interface GetCategoryBarberActionError {
  type: typeof GET_CATEGORY_BARBER_ERROR;
  payload: AppError;
}

export type GetCategoryBarberActionTypes =
  | GetCategoryBarberAction
  | GetCategoryBarberActionSuccess
  | GetCategoryBarberActionError;
