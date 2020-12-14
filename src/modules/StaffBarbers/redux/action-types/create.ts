import { AppError } from '@commons/types';
import { StaffFields } from './list';

export const CREATE_STAFF_BARBER = 'CREATE_STAFF_BARBER';
export const CREATE_STAFF_BARBER_SUCCESS = 'CREATE_STAFF_BARBER_SUCCESS';
export const CREATE_STAFF_BARBER_ERROR = 'CREATE_STAFF_BARBER_ERROR';

export interface CreateStaffBarberAction {
  type: typeof CREATE_STAFF_BARBER;
  payload: StaffFields;
}

export interface CreateStaffBarberActionSuccess {
  type: typeof CREATE_STAFF_BARBER_SUCCESS;
}

export interface CreateStaffBarberActionError {
  type: typeof CREATE_STAFF_BARBER_ERROR;
  payload: AppError;
}

export type CreateStaffBarberActionTypes =
  | CreateStaffBarberAction
  | CreateStaffBarberActionSuccess
  | CreateStaffBarberActionError;
