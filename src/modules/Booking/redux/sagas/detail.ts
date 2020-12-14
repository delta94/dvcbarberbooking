// import { getAllProductApi } from '@modules/Product/service/apis';
import { call, put } from 'redux-saga/effects';
import { GetBookingAction } from '../action-types/detail';
import { getDetailsBookingError, getDetailsBookingSuccess } from '../actions/detail';
import { getDetailBookingFromFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* getBookingSaga(action: GetBookingAction) {
  try {
    const data: any = yield call(getDetailBookingFromFirebase, action.payload, action.idCol);
    yield put(getDetailsBookingSuccess(data || undefined));
  } catch (error) {
    yield put(getDetailsBookingError(error));
  }
}
