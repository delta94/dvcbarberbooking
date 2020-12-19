import { AppError } from '@commons/types';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';

export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  id: string;
  idCate: string;
}

export interface DeleteProductActionSuccess {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: string;
}

export interface DeleteProductActionError {
  type: typeof DELETE_PRODUCT_ERROR;
  payload: AppError;
  // id of product
  target: string;
}

export type DeleteProductActionTypes = DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError;
