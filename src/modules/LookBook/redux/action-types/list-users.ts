import { AppError } from '@commons/types';

export const LIST_USERS = 'LIST_USERS';
export const LIST_USERS_SUCCESS = 'LIST_USERS_SUCCESS';
export const LIST_USERS_ERROR = 'LIST_USERS_ERROR';
export const LIST_USERS_UPDATE_FILTER = 'LIST_USERS_UPDATE_FILTER';

export type User = {
  id: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
};

export interface ListUsersAction {
  type: typeof LIST_USERS;
}

export interface ListUsersActionSuccess {
  type: typeof LIST_USERS_SUCCESS;
  payload: User[];
}

export interface ListUsersActionError {
  type: typeof LIST_USERS_ERROR;
  payload: AppError;
}

export type ListUsersActionTypes = ListUsersAction | ListUsersActionSuccess | ListUsersActionError;
