import { AppError } from '@commons/types';
import { CREATE_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS, CreateUserActionTypes, User } from '../action-types';

export const createUser = (payload: User): CreateUserActionTypes => ({
  type: CREATE_USER,
  payload,
});

export const createUserError = (payload: AppError): CreateUserActionTypes => ({
  type: CREATE_USER_ERROR,
  payload,
});

export const createUserSuccess = (): CreateUserActionTypes => ({
  type: CREATE_USER_SUCCESS,
});
