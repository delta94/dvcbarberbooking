import { getListCategoryFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { CategoriesFields, ListCategoriesBarberAction } from '../action-types';
import { listCategotyBarberError, listCategotyBarberSuccess } from '../actions/list-Category';

export function* listCategorySaga(action: ListCategoriesBarberAction) {
  try {
    const data: CategoriesFields[] = yield call(getListCategoryFromFirebase);

    yield put(listCategotyBarberSuccess(data));
  } catch (error) {
    yield put(listCategotyBarberError(error));
  }
}
