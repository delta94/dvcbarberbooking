import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { UpdateBranchBarberError, UpdateBranchBarberSuccess } from '../actions/update';
import { branchFields, UpdateBranchBarberAction } from '../action-types';
import { getUpdateBranchFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { NotificationSuccess } from '@commons/components/Notification';

export function* UpdateBranchBarberSaga(action: UpdateBranchBarberAction) {
  try {
    const data: branchFields = yield call(getUpdateBranchFromFirebase, action.payload);
    yield put(UpdateBranchBarberSuccess());
    NotificationSuccess('Thông báo', 'Chỉnh sửa thành công');
    getHistory().push('/branchBarber');
  } catch (error) {
    yield put(UpdateBranchBarberError(error));
  }
}
