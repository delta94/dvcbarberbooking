import { AppError } from '@commons/types';
import {
  ListUsersActionTypes,
  LIST_USERS,
  LIST_USERS_ERROR,
  LIST_USERS_FILTER,
  LIST_USERS_FILTER_OUT,
  LIST_USERS_SUCCESS,
} from '../action-types/list-users';
import { User } from '@modules/User/redux/action-types/list-users';

export const listUsers = (): ListUsersActionTypes => ({
  type: LIST_USERS,
});

export const listUsersError = (payload: AppError): ListUsersActionTypes => ({
  type: LIST_USERS_ERROR,
  payload,
});

export const listUsersSuccess = (payload: User[]): ListUsersActionTypes => ({
  type: LIST_USERS_SUCCESS,
  payload,
});

export const listUsersFilter = (payload: string): ListUsersActionTypes => ({
  type: LIST_USERS_FILTER,
  payload,
});

export const listUsersFilterOut = (): ListUsersActionTypes => ({
  type: LIST_USERS_FILTER_OUT,
});
