import { AppError } from '@commons/types';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface LogoutErrorAction {
  type: typeof LOGOUT_ERROR;
  payload: AppError;
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export type LogoutActionTypes = LogoutAction | LogoutErrorAction | LogoutSuccessAction;
