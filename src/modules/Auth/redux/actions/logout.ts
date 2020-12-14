import { LOGOUT, LogoutActionTypes, LOGOUT_ERROR, LOGOUT_SUCCESS } from '../action-types/logout';
import { AppError } from '@commons/types';

export const logout = (): LogoutActionTypes => ({
  type: LOGOUT,
});

export const logoutError = (payload: AppError): LogoutActionTypes => ({
  type: LOGOUT_ERROR,
  payload,
});

export const logoutSuccess = (): LogoutActionTypes => ({
  type: LOGOUT_SUCCESS,
});
