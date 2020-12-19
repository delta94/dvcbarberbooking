import { AppError } from '@commons/types';
import {
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  DeleteProductActionTypes,
} from '../action-types/delete';

export const DeleteProduct = (id: string, idCate: string): DeleteProductActionTypes => ({
  type: DELETE_PRODUCT,
  id,
  idCate,
});

export const DeleteProductError = (payload: AppError, target: string): DeleteProductActionTypes => ({
  type: DELETE_PRODUCT_ERROR,
  payload,
  target,
});

export const DeleteProductSuccess = (payload: string): DeleteProductActionTypes => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: payload,
});
