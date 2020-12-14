import { AppError } from '@commons/types';
import {
  DELETE_BOOKING,
  DELETE_BOOKING_ERROR,
  DELETE_BOOKING_SUCCESS,
  DeleteBookingActionTypes,
} from '../action-types/delete-booking';

export const deleteBooking = (payload: string, idCol: string): DeleteBookingActionTypes => ({
  type: DELETE_BOOKING,
  payload,
  idCol,
});

export const deleteBookingError = (payload: AppError, target: string): DeleteBookingActionTypes => ({
  type: DELETE_BOOKING_ERROR,
  payload,
  target,
});

export const deleteBookingSuccess = (payload: string): DeleteBookingActionTypes => ({
  type: DELETE_BOOKING_SUCCESS,
  payload: payload,
});
