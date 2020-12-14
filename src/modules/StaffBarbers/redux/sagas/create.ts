import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { createStaffFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { CreateStaffBarberAction } from '../action-types';
import { CreateStaffBarberError, CreateStaffBarberSuccess } from '../actions/create';

export function* CreateStaffSaga(action: CreateStaffBarberAction) {
  try {
    yield call(createStaffFirebase, action.payload);
    yield put(CreateStaffBarberSuccess());
    NotificationSuccess('Thông báo', 'Thêm nhân viên thành công');
    getHistory().push('/staff');
  } catch (error) {
    yield put(CreateStaffBarberError(error));
  }
}
