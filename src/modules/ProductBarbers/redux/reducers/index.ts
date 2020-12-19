import { combineReducers } from 'redux';

import listProductBarber, { ListProductBarberState } from './list';
import deleteProductBarber, { DeleteProductBarberState } from './delete';
import createProductBarber, { CreateProductBarberState } from './create';
import detailProductBarber, { DetailProductBarberState } from './detail';

export interface ProductBarberModuleState {
  listProductBarber: ListProductBarberState;
  createProductBarber: CreateProductBarberState;
  deleteProductBarber: DeleteProductBarberState;
  detailProductBarber: DetailProductBarberState;
}

export default combineReducers<ProductBarberModuleState>({
  listProductBarber,
  createProductBarber,
  deleteProductBarber,
  detailProductBarber,
});
