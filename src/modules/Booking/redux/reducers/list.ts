import { DELETE_BOOKING, DELETE_BOOKING_ERROR, DELETE_BOOKING_SUCCESS } from '../action-types';
import {
  LIST_BOOKING,
  LIST_BOOKING_ERROR,
  LIST_BOOKING_SUCCESS,
  LIST_BOOKING_FILTER,
  LIST_BOOKING_FILTER_OUT,
  ListBookingActionTypes,
  BookingFields,
  DeleteBookingActionTypes,
} from '../action-types/index';

export interface ListBookingState {
  loading: boolean;
  items: BookingFields[];
  itemsFilter: BookingFields[];
  deletingItems: string[];
  arr: any;
}

const initialState: ListBookingState = {
  loading: true,
  items: [],
  itemsFilter: [],
  deletingItems: [],
  arr: [],
};

export default function listBooking(
  state = initialState,
  action: ListBookingActionTypes | DeleteBookingActionTypes,
): ListBookingState {
  switch (action.type) {
    case LIST_BOOKING:
      return {
        ...state,
        loading: true,
      };

    case LIST_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
        itemsFilter: action.payload || [],
        arr: action.arr,
      };
    case LIST_BOOKING_ERROR:
      return {
        ...state,
        loading: false,
      };

    // Delete
    case DELETE_BOOKING:
      return {
        ...state,
        deletingItems: [...state.deletingItems, action.payload],
      };
    case DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        deletingItems: state.deletingItems?.filter((t) => t !== action.payload),
        items: state.items.filter((t) => t.id !== action.payload),
      };
    case DELETE_BOOKING_ERROR:
      return {
        ...state,
        deletingItems: state.deletingItems?.filter((t) => t !== action.target),
      };

    case LIST_BOOKING_FILTER:
      const it = state.itemsFilter.filter(
        (items) =>
          items.customerName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.barberName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.customerPhone?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.salonAddress?.toLowerCase().includes(action.payload.toLowerCase()),
      );

      return {
        ...state,
        items: [...it],
      };

    case LIST_BOOKING_FILTER_OUT:
      return {
        ...state,
        items: [...state.itemsFilter],
      };

    default:
      return state;
  }
}
