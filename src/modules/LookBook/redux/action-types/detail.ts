import { AppError } from '@commons/types';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export interface GetUserAction {
  type: typeof GET_USER;
  payload: string;
}

export interface GetUserActionSuccess {
  type: typeof GET_USER_SUCCESS;
  payload?: any;
}

export interface GetUserActionError {
  type: typeof GET_USER_ERROR;
  payload: AppError;
}

export type GetUserActionTypes = GetUserAction | GetUserActionSuccess | GetUserActionError;
