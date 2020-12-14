import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { createUserError, createUserSuccess } from '../actions/create';
import { CreateUserAction } from '../action-types';
import { getListUserUrl } from '@helpers/url';
import { createUserFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* createUserSaga(action: CreateUserAction) {
  try {
    yield call(createUserFirebase, action.payload);
    yield put(createUserSuccess());
    NotificationSuccess('Thông báo', 'Thêm mới nhà cung cấp thành công');
    getHistory().push(getListUserUrl());
  } catch (error) {
    yield put(createUserError(error));
  }
}
