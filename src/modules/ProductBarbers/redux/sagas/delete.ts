import { call, put } from 'redux-saga/effects';
import { DeleteProductError, DeleteProductSuccess } from '../actions/delete';
import { DeleteProductAction } from '../action-types';
import { NotificationSuccess } from '@commons/components/Notification';
import { listProductBarber } from '../actions/list-product-barber';
import { DeleteProductBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';

export function* deleteProductSaga(action: DeleteProductAction) {
  try {
    const res: any = yield call(DeleteProductBarberFirebase, action.id, action.idCate);
    yield put(DeleteProductSuccess(res));
    NotificationSuccess('Thông báo', 'Xóa sản phẩm thành công');
    yield put(listProductBarber());
  } catch (error) {
    yield put(DeleteProductError(error, action.id));
  }
}
