import { AppError } from '@commons/types';
import { User } from '../action-types';
import { UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS, UpdateUserActionTypes } from '../action-types/update';

export const updateUser = (payload: User): UpdateUserActionTypes => ({
  type: UPDATE_USER,
  payload,
});

export const updateUserError = (payload: AppError): UpdateUserActionTypes => ({
  type: UPDATE_USER_ERROR,
  payload,
});

export const updateUserSuccess = (): UpdateUserActionTypes => ({
  type: UPDATE_USER_SUCCESS,
});
