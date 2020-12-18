import { NotificationSuccess } from '@commons/components/Notification';
import { getDeleteStaffFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { DeleteStaffBarberAction } from '../action-types';
import { DeleteStaffBarberError, DeleteStaffBarberSuccess } from '../actions/delete';
import { ListStaffBarber } from '../actions/list-staff';

export function* DeleteStaffSaga(action: DeleteStaffBarberAction) {
  try {
    yield call(getDeleteStaffFromFirebase, action.id, action.idCity, action.idBranch);
    yield put(DeleteStaffBarberSuccess());
    NotificationSuccess('Thông báo', 'Xóa nhân viên thành công');
    yield put(ListStaffBarber());
  } catch (error) {
    yield put(DeleteStaffBarberError(error));
  }
}
