import { AppError } from '@commons/types';

export const GET_BOOKING = 'GET_BOOKING';
export const GET_BOOKING_SUCCESS = 'GET_BOOKING_SUCCESS';
export const GET_BOOKING_ERROR = 'GET_BOOKING_ERROR';

export interface GetBookingAction {
  type: typeof GET_BOOKING;
  payload: string;
  idCol: string;
}

export interface GetBookingActionSuccess {
  type: typeof GET_BOOKING_SUCCESS;
  payload?: any;
}

export interface GetBookingActionError {
  type: typeof GET_BOOKING_ERROR;
  payload: AppError;
}

export type GetBookingActionTypes = GetBookingAction | GetBookingActionSuccess | GetBookingActionError;
