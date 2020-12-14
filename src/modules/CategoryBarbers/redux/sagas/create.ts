import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { createCategoryBarberError, createCategoryBarberSuccess } from '../actions/create';
import { CreateCategoryBarberAction } from '../action-types';
import { createCategoryBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* createCategoryBarberSaga(action: CreateCategoryBarberAction) {
  try {
    yield call(createCategoryBarberFirebase, action.payload);
    yield put(createCategoryBarberSuccess());
    NotificationSuccess('Thông báo', 'Thêm mới loại sản phẩm thành công');
    getHistory().push('/CategoryBarber');
  } catch (error) {
    yield put(createCategoryBarberError(error));
  }
}
