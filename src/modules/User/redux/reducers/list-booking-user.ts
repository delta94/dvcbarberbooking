import {
  BookingUserFields,
  LIST_BOOKING_USER,
  LIST_BOOKING_USER_ERROR,
  LIST_BOOKING_USER_SUCCESS,
  ListBookingUserActionTypes,
} from '../action-types/list-booking-user';

export interface ListBookingUserState {
  loading: boolean;
  saving: boolean;
  data?: BookingUserFields[];
}

const initialState: ListBookingUserState = {
  loading: true,
  saving: false,
};

export default function listBooking(state = initialState, action: ListBookingUserActionTypes): ListBookingUserState {
  switch (action.type) {
    case LIST_BOOKING_USER:
      return {
        ...state,
        loading: true,
      };

    case LIST_BOOKING_USER_SUCCESS:
      console.log('adadad12121212', action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LIST_BOOKING_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
