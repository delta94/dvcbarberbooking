import { call, put } from 'redux-saga/effects';
import { DeleteCityBarberError, DeleteCityBarberSuccess } from '../actions/delete';
import { DeleteCityBarberAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listCityBarber } from '../actions/list-city';
import { DeleteCityFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* deleteCityBarberSaga(action: DeleteCityBarberAction) {
  try {
    const res: any = yield call(DeleteCityFirebase, action.payload);
    yield put(DeleteCityBarberSuccess(res));
    NotificationSuccess('Thông báo', 'Xóa thành công');
    yield put(listCityBarber());
  } catch (error) {
    yield put(DeleteCityBarberError(error, action.payload));
  }
}
