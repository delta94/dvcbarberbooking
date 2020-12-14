import { combineReducers } from 'redux';

import listBooking, { ListBookingState } from './list';
import detailBooking, { DetailBookingState } from './detail';

export interface bookingModuleState {
  listBooking: ListBookingState;
  detailBooking: DetailBookingState;
}

export default combineReducers<bookingModuleState>({
  listBooking,
  detailBooking,
});
