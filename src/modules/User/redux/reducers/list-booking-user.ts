import {
  BookingUserFields,
  LIST_BOOKING_USER,
  LIST_BOOKING_USER_ERROR,
  LIST_BOOKING_USER_SUCCESS,
  LIST_BOOKING_USERS_FILTER,
  LIST_BOOKING_USERS_FILTER_OUT,
  ListBookingUserActionTypes,
} from '../action-types/list-booking-user';

export interface ListBookingUserState {
  loading: boolean;
  saving: boolean;
  data?: BookingUserFields[];
  itemsFilter: BookingUserFields[];
}

const initialState: ListBookingUserState = {
  loading: true,
  saving: false,
  itemsFilter: [],
};

export default function listBooking(state = initialState, action: ListBookingUserActionTypes): ListBookingUserState {
  switch (action.type) {
    case LIST_BOOKING_USER:
      return {
        ...state,
        loading: true,
      };

    case LIST_BOOKING_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        itemsFilter: action.payload || [],
      };

    case LIST_BOOKING_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    case LIST_BOOKING_USERS_FILTER:
      console.log(action.payload);
      const it = state.itemsFilter.filter(
        (items) =>
          items.barberName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.customerName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.salonName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.cityBook?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.customerPhone?.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        data: [...it],
      };

    case LIST_BOOKING_USERS_FILTER_OUT:
      return {
        ...state,
        data: [...state.itemsFilter],
      };

    default:
      return state;
  }
}
