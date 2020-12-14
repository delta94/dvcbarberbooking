import { getListProductFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { ProductBarberFields, ListProductBarberAction } from '../action-types';
import { listProductBarberError, listProductBarberSuccess } from '../actions/list-product-barber';

export function* listProductBarberSaga(action: ListProductBarberAction) {
  try {
    const data: ProductBarberFields[] = yield call(getListProductFromFirebase);
    yield put(listProductBarberSuccess(data));
  } catch (error) {
    yield put(listProductBarberError(error));
  }
}
