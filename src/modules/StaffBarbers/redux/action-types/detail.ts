import { AppError } from '@commons/types';
import { StaffFields } from './list';

export const DETAIL_STAFF_BARBER = 'DETAIL_STAFF_BARBER';
export const DETAIL_STAFF_BARBER_SUCCESS = 'DETAIL_STAFF_BARBER_SUCCESS';
export const DETAIL_STAFF_BARBER_ERROR = 'DETAIL_STAFF_BARBER_ERROR';

export interface DetailStaffBarberAction {
  type: typeof DETAIL_STAFF_BARBER;
  id: string;
  idCity: string;
  idBranch: string;
}

export interface DetailStaffBarberActionSuccess {
  type: typeof DETAIL_STAFF_BARBER_SUCCESS;
  payload: StaffFields;
}

export interface DetailStaffBarberActionError {
  type: typeof DETAIL_STAFF_BARBER_ERROR;
  payload: AppError;
}

export type DetailStaffBarberActionTypes =
  | DetailStaffBarberAction
  | DetailStaffBarberActionSuccess
  | DetailStaffBarberActionError;
