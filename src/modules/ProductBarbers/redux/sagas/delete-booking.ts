import { call, put } from 'redux-saga/effects';
import { deleteBookingError, deleteBookingSuccess } from '../actions/delete-booking';
import { DeleteBookingAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listProductBarber } from '../actions/list-product-barber';
import { DeleteProductBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* deleteBookingSaga(action: DeleteBookingAction) {
  try {
    const res: any = yield call(DeleteProductBarberFirebase, action.payload, action.idCol);
    yield put(deleteBookingSuccess(res));
    NotificationSuccess('Thông báo', 'Xóa lịch thành công');
    yield put(listProductBarber());
  } catch (error) {
    yield put(deleteBookingError(error, action.payload));
  }
}
