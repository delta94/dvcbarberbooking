import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { CreateCityBarberError, CreateCityBarberSuccess } from '../actions/create';
import { CreateCityBarberAction } from '../action-types';
import { createCityBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* createCityBarberSaga(action: CreateCityBarberAction) {
  try {
    yield call(createCityBarberFirebase, action.payload);
    yield put(CreateCityBarberSuccess());
    NotificationSuccess('Thông báo', 'Thêm mới thành phố thành công');
    getHistory().push('/citybarber');
  } catch (error) {
    yield put(CreateCityBarberError(error));
  }
}
