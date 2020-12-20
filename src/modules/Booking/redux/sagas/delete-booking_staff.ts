import { call, put } from 'redux-saga/effects';
import { DeleteBookingStaffError, DeleteBookingStaffSuccess } from '../actions/delete-booking_staff';
import { DeleteBookingStaffAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listBooking } from '../actions/list-booking';
import { DeleteBookingStaffFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* DeleteBookingStaffSaga(action: DeleteBookingStaffAction) {
  try {
    yield call(
      DeleteBookingStaffFirebase,
      action.idCity,
      action.idBranch,
      action.idStaff,
      action.day,
      action.month,
      action.year,
      action.slot,
    );
    yield put(DeleteBookingStaffSuccess());
  } catch (error) {
    yield put(DeleteBookingStaffError(error, 'lOI'));
  }
}
