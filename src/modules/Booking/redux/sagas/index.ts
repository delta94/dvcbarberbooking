import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { deleteBookingSaga } from './delete-booking';
import { getBookingSaga } from './detail';
import { listBookingSaga } from './list';

export default function* bookingSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_BOOKING, listBookingSaga),
    yield takeLatest(actionTypes.DELETE_BOOKING, deleteBookingSaga),
    yield takeLatest(actionTypes.GET_BOOKING, getBookingSaga),
  ]);
}
