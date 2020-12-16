import { AppError } from '@commons/types';

export const LIST_BOOKING = 'LIST_BOOKING';
export const LIST_BOOKING_SUCCESS = 'LIST_BOOKING_SUCCESS';
export const LIST_BOOKING_ERROR = 'LIST_BOOKING_ERROR';
export const LIST_BOOKING_FILTER = 'LIST_BOOKING_FILTER';
export const LIST_BOOKING_FILTER_OUT = 'LIST_BOOKING_FILTER_OUT';

export type cartItem = {
  producId: string;
  productImage: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  userPhone: string;
};

export type BookingFields = {
  idCol: string;
  id: string;
  barberId: string;
  barberName: string;
  cartItemList: cartItem[];
  cityBook: string;
  customerName: string;
  customerPhone: string;
  done: boolean;
  salonAddress: string;
  salonId: string;
  salonName: string;
  slot: number;
  time: string;
  timestamp: string;
};

export interface ListBookingAction {
  type: typeof LIST_BOOKING;
  year?: string;
}

export interface ListBookingActionSuccess {
  type: typeof LIST_BOOKING_SUCCESS;
  payload: BookingFields[];
  arr: any;
}

export interface ListBookingActionError {
  type: typeof LIST_BOOKING_ERROR;
  payload: AppError;
}

export interface ListBookingFilterActions {
  type: typeof LIST_BOOKING_FILTER;
  payload: string;
}

export interface ListBookingFilterOutActions {
  type: typeof LIST_BOOKING_FILTER_OUT;
}

export type ListBookingActionTypes =
  | ListBookingAction
  | ListBookingActionSuccess
  | ListBookingActionError
  | ListBookingFilterActions
  | ListBookingFilterOutActions;
