import { AppError } from '@commons/types';
import { ProductBarberFields } from './list-productbarber';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const DETAIL_PRODUCT_SUCCESS = 'DETAIL_PRODUCT_SUCCESS';
export const DETAIL_PRODUCT_ERROR = 'DETAIL_PRODUCT_ERROR';

export interface DetailProductAction {
  type: typeof DETAIL_PRODUCT;
  id: string;
  idCate: string;
}

export interface DetailProductActionSuccess {
  type: typeof DETAIL_PRODUCT_SUCCESS;
  payload: ProductBarberFields;
}

export interface DetailProductActionError {
  type: typeof DETAIL_PRODUCT_ERROR;
  payload: AppError;
  // id of product
  target: string;
}

export type DetailProductActionTypes = DetailProductAction | DetailProductActionSuccess | DetailProductActionError;
