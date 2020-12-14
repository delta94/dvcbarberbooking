import { AppError } from '@commons/types';
import { BookingFields } from '../action-types';
import { GET_BOOKING, GET_BOOKING_ERROR, GET_BOOKING_SUCCESS, GetBookingActionTypes } from '../action-types/detail';

export const getDetailsBooking = (payload: string, idCol: string): GetBookingActionTypes => ({
  type: GET_BOOKING,
  payload,
  idCol,
});

export const getDetailsBookingError = (payload: AppError): GetBookingActionTypes => ({
  type: GET_BOOKING_ERROR,
  payload,
});

export const getDetailsBookingSuccess = (payload?: BookingFields): GetBookingActionTypes => ({
  type: GET_BOOKING_SUCCESS,
  payload,
});
