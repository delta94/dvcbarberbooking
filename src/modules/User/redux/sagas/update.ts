import { NotificationSuccess } from '@commons/components/Notification';
import { UpdateStaffFirebase, UpdateUserFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { UpdateUserAction } from '../action-types';
import { updateUserSuccess, updateUserError } from '../actions/update';

export function* UpdateUserSaga(action: UpdateUserAction) {
  try {
    yield call(UpdateUserFirebase, action.payload);
    yield put(updateUserSuccess());
    NotificationSuccess('Thông báo', 'Chỉnh sửa thành công');
  } catch (error) {
    yield put(updateUserError(error));
  }
}
