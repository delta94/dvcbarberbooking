import { call, put } from 'redux-saga/effects';
import { deleteCategoryBarberError, deleteCategoryBarberSuccess } from '../actions/delete';
import { DeleteCategoryBarberAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listCategotyBarber } from '../actions/list-Category';
import { DeleteCategoryFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* deleteCategoryBarberSaga(action: DeleteCategoryBarberAction) {
  try {
    const res: any = yield call(DeleteCategoryFirebase, action.payload);
    yield put(deleteCategoryBarberSuccess(res));
    NotificationSuccess('Thông báo', 'Xóa thành công');
    yield put(listCategotyBarber());
  } catch (error) {
    yield put(deleteCategoryBarberError(error, action.payload));
  }
}
