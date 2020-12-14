import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { CreateCityBarberError, CreateCityBarberSuccess } from '../actions/create';
import { CreateCityBarberAction } from '../action-types';
import { updateCityBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { listCityBarber } from '../actions/list-city';

export function* updateCityBarberSaga(action: CreateCityBarberAction) {
  try {
    yield call(updateCityBarberFirebase, action.payload);
    yield put(CreateCityBarberSuccess());
    NotificationSuccess('Thông báo', 'Chỉnh sửa thành phố thành công');
    getHistory().push('/citybarber');
    yield put(listCityBarber());
  } catch (error) {
    yield put(CreateCityBarberError(error));
  }
}
