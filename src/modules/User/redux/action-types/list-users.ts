import { AppError } from '@commons/types';

export const LIST_USERS = 'LIST_USERS';
export const LIST_USERS_SUCCESS = 'LIST_USERS_SUCCESS';
export const LIST_USERS_ERROR = 'LIST_USERS_ERROR';
export const LIST_USERS_FILTER = 'LIST_USERS_FILTER';
export const LIST_USERS_FILTER_OUT = 'LIST_USERS_FILTER_OUT';

export type User = {
  id: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
  role?: number;
  status?: boolean;
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

export interface FilterUsersAction {
  type: typeof LIST_USERS_FILTER;
  payload: string;
}
export interface FilterOutUsersAction {
  type: typeof LIST_USERS_FILTER_OUT;
}

export type ListUsersActionTypes =
  | ListUsersAction
  | ListUsersActionSuccess
  | ListUsersActionError
  | FilterUsersAction
  | FilterOutUsersAction;
