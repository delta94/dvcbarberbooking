import { AppError } from '@commons/types';
import {
  LIST_BOOKING,
  LIST_BOOKING_ERROR,
  LIST_BOOKING_SUCCESS,
  LIST_BOOKING_FILTER,
  LIST_BOOKING_FILTER_OUT,
  ListBookingActionTypes,
  BookingFields,
} from '../action-types/list-booking';

export const listBooking = (from?: string, to?: string): ListBookingActionTypes => ({
  type: LIST_BOOKING,
  from,
  to,
});

export const listBookingError = (payload: AppError): ListBookingActionTypes => ({
  type: LIST_BOOKING_ERROR,
  payload,
});

export const listBookingSuccess = (payload: BookingFields[]): ListBookingActionTypes => ({
  type: LIST_BOOKING_SUCCESS,
  payload,
});

export const listBookingFilter = (payload: string): ListBookingActionTypes => ({
  type: LIST_BOOKING_FILTER,
  payload,
});

export const listBookingOut = (): ListBookingActionTypes => ({
  type: LIST_BOOKING_FILTER_OUT,
});
