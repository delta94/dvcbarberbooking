import { call, put } from 'redux-saga/effects';
import { deleteUserSuccess } from '../actions/delete';
import { DeleteUserAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listUsers } from '../actions/list-users';
import firebase from '@modules/firebaseConnect/firebaseConnect';

const deleteDataFirebase = async (id: string) => {
  await firebase
    .firestore()
    .collection('User')
    .doc(id)
    .delete()
    .catch((err) => {
      console.log(err);
    });
};

export function* deleteUserSaga(action: DeleteUserAction) {
  try {
    yield call(deleteDataFirebase, action.payload);
    yield put(deleteUserSuccess(action.payload));
    NotificationSuccess('Thông báo', 'Xóa trò chơi thành công');
    yield put(listUsers());
  } catch (error) {
    yield put(deleteUserSuccess(error));
  }
}
