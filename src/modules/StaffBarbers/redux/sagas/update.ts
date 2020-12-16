import { NotificationSuccess } from '@commons/components/Notification';
import { UpdateStaffFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { UpdateStaffBarberAction } from '../action-types';
import { ListStaffBarber } from '../actions/list-staff';
import { UpdateStaffBarberError, UpdateStaffBarberSuccess } from '../actions/update';

export function* UpdateStaffSaga(action: UpdateStaffBarberAction) {
  try {
    yield call(UpdateStaffFirebase, action.payload);
    yield put(UpdateStaffBarberSuccess());
    NotificationSuccess('Thông báo', 'Chỉnh sửa thành công');
    yield put(ListStaffBarber());
  } catch (error) {
    yield put(UpdateStaffBarberError(error));
  }
}
