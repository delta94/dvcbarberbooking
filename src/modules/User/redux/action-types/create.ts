import { AppError } from '@commons/types';
import { User } from './list-users';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export interface CreateUserAction {
  type: typeof CREATE_USER;
  payload: User;
}

export interface CreateUserActionSuccess {
  type: typeof CREATE_USER_SUCCESS;
}

export interface CreateUserActionError {
  type: typeof CREATE_USER_ERROR;
  payload: AppError;
}

export type CreateUserActionTypes = CreateUserAction | CreateUserActionSuccess | CreateUserActionError;
