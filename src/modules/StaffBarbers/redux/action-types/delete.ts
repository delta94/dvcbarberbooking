import { AppError } from '@commons/types';
import { StaffFields } from './list';

export const DELETE_STAFF_BARBER = 'DELETE_STAFF_BARBER';
export const DELETE_STAFF_BARBER_SUCCESS = 'DELETE_STAFF_BARBER_SUCCESS';
export const DELETE_STAFF_BARBER_ERROR = 'DELETE_STAFF_BARBER_ERROR';

export interface DeleteStaffBarberAction {
  type: typeof DELETE_STAFF_BARBER;
  id: string;
  idCity: string;
  idBranch: string;
}

export interface DeleteStaffBarberActionSuccess {
  type: typeof DELETE_STAFF_BARBER_SUCCESS;
}

export interface DeleteStaffBarberActionError {
  type: typeof DELETE_STAFF_BARBER_ERROR;
  payload: AppError;
}

export type DeleteStaffBarberActionTypes =
  | DeleteStaffBarberAction
  | DeleteStaffBarberActionSuccess
  | DeleteStaffBarberActionError;
