import { getAllBillFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { BillFields, ListBillBarberAction } from '../action-types';
import { ListBillBarberSuccess, ListBillBarberError } from '../actions/list-bill';

export function* ListBillSaga(action: ListBillBarberAction) {
  try {
    const data: BillFields[] = yield call(getAllBillFromFirebase, action.year);
    yield put(ListBillBarberSuccess(data));
  } catch (error) {
    yield put(ListBillBarberError(error));
  }
}
