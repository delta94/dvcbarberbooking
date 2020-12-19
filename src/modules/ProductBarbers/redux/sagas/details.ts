import { DetailProductBarberFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { DetailProductAction } from '../action-types';
import { DetailProductError, DetailProductSuccess } from '../actions/details';

export function* DetailProductSaga(action: DetailProductAction) {
  try {
    const res: any = yield call(DetailProductBarberFirebase, action.id, action.idCate);
    yield put(DetailProductSuccess(res));
  } catch (error) {
    yield put(DetailProductError(error, action.id));
  }
}
