import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../action-types';
import { listCategorySaga } from './list';
import { createCategoryBarberSaga } from './create';
import { deleteCategoryBarberSaga } from './delete';
import { getCategoryBarberSaga } from './detail';

export default function* CategoryBarberSagas() {
  return all([
    yield takeLatest(actionTypes.LIST_CATEGORY_BARBER, listCategorySaga),
    yield takeLatest(actionTypes.CREATE_CATEGORY_BARBER, createCategoryBarberSaga),
    yield takeLatest(actionTypes.DELETE_CATEGORY_BARBER, deleteCategoryBarberSaga),
    yield takeLatest(actionTypes.GET_CATEGORY_BARBER, getCategoryBarberSaga),
  ]);
}
