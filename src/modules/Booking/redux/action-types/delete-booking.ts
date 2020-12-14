import { AppError } from '@commons/types';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const DELETE_BOOKING_SUCCESS = 'DELETE_BOOKING_SUCCESS';
export const DELETE_BOOKING_ERROR = 'DELETE_BOOKING_ERROR';

export interface DeleteBookingAction {
  type: typeof DELETE_BOOKING;
  payload: string;
  idCol: string;
}

export interface DeleteBookingActionSuccess {
  type: typeof DELETE_BOOKING_SUCCESS;
  payload: string;
}

export interface DeleteBookingActionError {
  type: typeof DELETE_BOOKING_ERROR;
  payload: AppError;
  // id of product
  target: string;
}

export type DeleteBookingActionTypes = DeleteBookingAction | DeleteBookingActionSuccess | DeleteBookingActionError;
