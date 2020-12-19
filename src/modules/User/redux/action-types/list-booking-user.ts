import { AppError } from '@commons/types';

export const LIST_BOOKING_USER = 'LIST_BOOKING_USER';
export const LIST_BOOKING_USER_SUCCESS = 'LIST_BOOKING_USER_SUCCESS';
export const LIST_BOOKING_USER_ERROR = 'LIST_BOOKING_USER_ERROR';
export const LIST_BOOKING_USER_UPDATE_FILTER = 'LIST_BOOKING_USER_UPDATE_FILTER';
export const LIST_BOOKING_USERS_FILTER = 'LIST_USERS_FILTER';
export const LIST_BOOKING_USERS_FILTER_OUT = 'LIST_USERS_FILTER_OUT';

export type cartItem = {
  producId: string;
  productImage: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
  userPhone: string;
};

export type BookingUserFields = {
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

export interface ListBookingUserAction {
  type: typeof LIST_BOOKING_USER;
  payload: string;
}

export interface ListBookingUserActionSuccess {
  type: typeof LIST_BOOKING_USER_SUCCESS;
  payload?: BookingUserFields[];
}

export interface ListBookingUserActionError {
  type: typeof LIST_BOOKING_USER_ERROR;
  payload: AppError;
}

export interface FilterBookingUsersAction {
  type: typeof LIST_BOOKING_USERS_FILTER;
  payload: string;
}
export interface FilterOutBookingUsersAction {
  type: typeof LIST_BOOKING_USERS_FILTER_OUT;
}

export type ListBookingUserActionTypes =
  | ListBookingUserAction
  | ListBookingUserActionSuccess
  | ListBookingUserActionError
  | FilterBookingUsersAction
  | FilterOutBookingUsersAction;
