import { combineReducers } from 'redux';

import listProductBarber, { ListProductBarberState } from './list';
import createProductBarber, { CreateProductBarberState } from './create';

export interface ProductBarberModuleState {
  listProductBarber: ListProductBarberState;
  createProductBarber: CreateProductBarberState;
}

export default combineReducers<ProductBarberModuleState>({
  listProductBarber,
  createProductBarber,
});
