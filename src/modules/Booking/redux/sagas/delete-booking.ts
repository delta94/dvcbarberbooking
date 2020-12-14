import { call, put } from 'redux-saga/effects';
import { deleteBookingError, deleteBookingSuccess } from '../actions/delete-booking';
import { DeleteBookingAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listBooking } from '../actions/list-booking';
import { DeleteBookingFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* deleteBookingSaga(action: DeleteBookingAction) {
  try {
    const res: any = yield call(DeleteBookingFirebase, action.payload, action.idCol);
    yield put(deleteBookingSuccess(res));
    NotificationSuccess('Thông báo', 'Xóa lịch thành công');
    yield put(listBooking());
  } catch (error) {
    yield put(deleteBookingError(error, action.payload));
  }
}
