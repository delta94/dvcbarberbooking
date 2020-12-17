import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { listUsersSaga } from './list';
import { deleteUserSaga } from './delete';
import { getUserSaga } from './detail';
import { createUserSaga } from './create';
import { UpdateUserSaga } from './update';
import { listBookingUserSaga } from './list-booking-user';

export default function* userSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_USERS, listUsersSaga),
    yield takeLatest(actionTypes.LIST_BOOKING_USER, listBookingUserSaga),
    yield takeLatest(actionTypes.DELETE_USER, deleteUserSaga),
    yield takeLatest(actionTypes.GET_USER, getUserSaga),
    yield takeLatest(actionTypes.CREATE_USER, createUserSaga),
    yield takeLatest(actionTypes.UPDATE_USER, UpdateUserSaga),
  ]);
}
