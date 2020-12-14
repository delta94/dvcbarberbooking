import { call, put } from 'redux-saga/effects';
import { deleteUserSuccess } from '../actions/delete';
import { DeleteUserAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listUsers } from '../actions/list-users';
import { deleteUserFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* deleteUserSaga(action: DeleteUserAction) {
  try {
    yield call(deleteUserFirebase, action.payload);
    yield put(deleteUserSuccess(action.payload));
    NotificationSuccess('Thông báo', 'Xóa trò chơi thành công');
    yield put(listUsers());
  } catch (error) {
    yield put(deleteUserSuccess(error));
  }
}
