import { AppError } from '@commons/types';
import {
  LIST_BOOKING_USER,
  LIST_BOOKING_USER_ERROR,
  LIST_BOOKING_USER_SUCCESS,
  ListBookingUserActionTypes,
  BookingUserFields,
} from '../action-types/list-booking-user';

export const listBookingUser = (payload: string): ListBookingUserActionTypes => ({
  type: LIST_BOOKING_USER,
  payload,
});

export const listBookingErrorUser = (payload: AppError): ListBookingUserActionTypes => ({
  type: LIST_BOOKING_USER_ERROR,
  payload,
});

export const listBookingSuccessUser = (payload?: BookingUserFields[]): ListBookingUserActionTypes => ({
  type: LIST_BOOKING_USER_SUCCESS,
  payload,
});
