import { BookingFields } from '../action-types';
import { GET_BOOKING, GET_BOOKING_ERROR, GET_BOOKING_SUCCESS, GetBookingActionTypes } from '../action-types/detail';

export interface DetailBookingState {
  loading: boolean;
  saving: boolean;
  data?: BookingFields;
}

const initialState: DetailBookingState = {
  loading: true,
  saving: false,
};

export default function detailBooking(state = initialState, action: GetBookingActionTypes): DetailBookingState {
  switch (action.type) {
    case GET_BOOKING:
      return {
        ...state,
        loading: true,
      };

    case GET_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_BOOKING_ERROR:
      return {
        ...state,
        loading: false,
        data: undefined,
      };

    default:
      return state;
  }
}
