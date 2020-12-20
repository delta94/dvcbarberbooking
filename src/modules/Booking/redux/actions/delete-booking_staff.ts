import { AppError } from '@commons/types';
import {
  DELETE_BOOKING_STAFF,
  DELETE_BOOKING_STAFF_ERROR,
  DELETE_BOOKING_STAFF_SUCCESS,
  DeleteBookingStaffActionTypes,
} from '../action-types/delete-booking_staff';

export const DeleteBookingStaff = (
  idCity: string,
  idBranch: string,
  idStaff: string,
  day: string,
  month: string,
  year: string,
  slot: string,
): DeleteBookingStaffActionTypes => ({
  type: DELETE_BOOKING_STAFF,
  idCity,
  idBranch,
  idStaff,
  day,
  month,
  year,
  slot,
});

export const DeleteBookingStaffError = (payload: AppError, target: string): DeleteBookingStaffActionTypes => ({
  type: DELETE_BOOKING_STAFF_ERROR,
  payload,
  target,
});

export const DeleteBookingStaffSuccess = (): DeleteBookingStaffActionTypes => ({
  type: DELETE_BOOKING_STAFF_SUCCESS,
});
