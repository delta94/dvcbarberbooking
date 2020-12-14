import { getListBookingFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { BookingFields, ListBookingAction } from '../action-types';
import { listBookingError, listBookingSuccess } from '../actions/list-booking';

export function* listBookingSaga(action: ListBookingAction) {
  try {
    const data: BookingFields[] = yield call(getListBookingFromFirebase, action.from, action.to);

    yield put(listBookingSuccess(data));
  } catch (error) {
    yield put(listBookingError(error));
  }
}
