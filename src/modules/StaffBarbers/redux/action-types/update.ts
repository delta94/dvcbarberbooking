import { AppError } from '@commons/types';
import { StaffFields } from './list';

export const UPDATE_STAFF_BARBER = 'UPDATE_STAFF_BARBER';
export const UPDATE_STAFF_BARBER_SUCCESS = 'UPDATE_STAFF_BARBER_SUCCESS';
export const UPDATE_STAFF_BARBER_ERROR = 'UPDATE_STAFF_BARBER_ERROR';

export interface UpdateStaffBarberAction {
  type: typeof UPDATE_STAFF_BARBER;
  payload: StaffFields;
}

export interface UpdateStaffBarberActionSuccess {
  type: typeof UPDATE_STAFF_BARBER_SUCCESS;
}

export interface UpdateStaffBarberActionError {
  type: typeof UPDATE_STAFF_BARBER_ERROR;
  payload: AppError;
}

export type UpdateStaffBarberActionTypes =
  | UpdateStaffBarberAction
  | UpdateStaffBarberActionSuccess
  | UpdateStaffBarberActionError;
