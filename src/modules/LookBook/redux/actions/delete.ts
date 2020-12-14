import { AppError } from '@commons/types';
import { DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, DeleteUserActionTypes } from '../action-types/delete';

export const deleteUser = (payload: string): DeleteUserActionTypes => ({
  type: DELETE_USER,
  payload,
});

export const deleteUserError = (payload: AppError, target: string): DeleteUserActionTypes => ({
  type: DELETE_USER_ERROR,
  payload,
  target,
});

export const deleteUserSuccess = (payload: string): DeleteUserActionTypes => ({
  type: DELETE_USER_SUCCESS,
  payload,
});
