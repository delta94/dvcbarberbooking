import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { createBranchBarberError, createBranchBarberSuccess } from '../actions/create';
import { CreateBranchBarberAction } from '../action-types';
import { createBranchBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* createBranchBarberSaga(action: CreateBranchBarberAction) {
  try {
    yield call(createBranchBarberFirebase, action.payload);
    yield put(createBranchBarberSuccess());
    NotificationSuccess('Thông báo', 'Thêm mới chi nhánh thành công');
    getHistory().push('/branchBarber');
  } catch (error) {
    yield put(createBranchBarberError(error));
  }
}
