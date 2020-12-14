import { combineReducers } from 'redux';

import listCategoryBarber, { ListCategoryBarberState } from './list';
import createCategoryBarber, { CreateCategoryBarberState } from './create';
import detailCategoryBarber, { DetailCategotyBarberState } from './detail';

export interface CategoryBarberModuleState {
  listCategoryBarber: ListCategoryBarberState;
  createCategoryBarber: CreateCategoryBarberState;
  detailCategoryBarber: DetailCategotyBarberState;
}

export default combineReducers<CategoryBarberModuleState>({
  listCategoryBarber,
  createCategoryBarber,
  detailCategoryBarber,
});
