import { AppError } from '@commons/types';
export const DELETE_BOOKING_STAFF = 'DELETE_BOOKING_STAFF';
export const DELETE_BOOKING_STAFF_SUCCESS = 'DELETE_BOOKING_STAFF_SUCCESS';
export const DELETE_BOOKING_STAFF_ERROR = 'DELETE_BOOKING_STAFF_ERROR';

export interface DeleteBookingStaffAction {
  type: typeof DELETE_BOOKING_STAFF;
  idCity: string;
  idBranch: string;
  idStaff: string;
  day: string;
  month: string;
  year: string;

  slot: string;
}

export interface DeleteBookingStaffActionSuccess {
  type: typeof DELETE_BOOKING_STAFF_SUCCESS;
}

export interface DeleteBookingStaffActionError {
  type: typeof DELETE_BOOKING_STAFF_ERROR;
  payload: AppError;
  // id of product
  target: string;
}

export type DeleteBookingStaffActionTypes =
  | DeleteBookingStaffAction
  | DeleteBookingStaffActionSuccess
  | DeleteBookingStaffActionError;
