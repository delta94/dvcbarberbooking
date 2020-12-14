import { AppError } from '@commons/types';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

export interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: string;
}

export interface DeleteUserActionSuccess {
  type: typeof DELETE_USER_SUCCESS;
  // id of product
  payload: string;
}

export interface DeleteUserActionError {
  type: typeof DELETE_USER_ERROR;
  payload: AppError;
  // id of product
  target: string;
}

export type DeleteUserActionTypes = DeleteUserAction | DeleteUserActionSuccess | DeleteUserActionError;
