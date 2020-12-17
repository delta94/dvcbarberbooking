import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { createProductBarberError, createProductBarberSuccess } from '../actions/create';
import { CreateProductBarberAction } from '../action-types';
import { createProductBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { getListProduct } from '@helpers/url';

export function* createProductBarberSaga(action: CreateProductBarberAction) {
  try {
    yield call(createProductBarberFirebase, action.payload);
    yield put(createProductBarberSuccess());
    NotificationSuccess('Thông báo', 'Thêm mới sản phẩm thành công');
    getHistory().push(getListProduct());
  } catch (error) {
    yield put(createProductBarberError(error));
  }
}
