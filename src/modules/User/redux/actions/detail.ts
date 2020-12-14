import { AppError } from '@commons/types';
import { User } from '../action-types';
import { GetUserActionTypes, GET_USER, GET_USER_ERROR, GET_USER_SUCCESS } from '../action-types/detail';

export const getUser = (payload: string): GetUserActionTypes => ({
  type: GET_USER,
  payload,
});

export const getuserError = (payload: AppError): GetUserActionTypes => ({
  type: GET_USER_ERROR,
  payload,
});

export const getUserSuccess = (payload?: User): GetUserActionTypes => ({
  type: GET_USER_SUCCESS,
  payload,
});
