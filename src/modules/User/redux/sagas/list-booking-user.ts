import { getListBookingByUserFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { BookingUserFields, ListBookingUserAction } from '../action-types';
import { listBookingErrorUser, listBookingSuccessUser } from '../actions/list-booking-user';

export function* listBookingUserSaga(action: ListBookingUserAction) {
  try {
    const data: BookingUserFields[] = yield call(getListBookingByUserFromFirebase, action.payload);
    yield put(listBookingSuccessUser(data));
  } catch (error) {
    yield put(listBookingErrorUser(error));
  }
}
