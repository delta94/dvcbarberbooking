import { AppError } from '@commons/types';
import { ProductBarberFields } from '../action-types';
import {
  DETAIL_PRODUCT,
  DETAIL_PRODUCT_ERROR,
  DETAIL_PRODUCT_SUCCESS,
  DetailProductActionTypes,
} from '../action-types/detail';

export const DetailProduct = (id: string, idCate: string): DetailProductActionTypes => ({
  type: DETAIL_PRODUCT,
  id,
  idCate,
});

export const DetailProductError = (payload: AppError, target: string): DetailProductActionTypes => ({
  type: DETAIL_PRODUCT_ERROR,
  payload,
  target,
});

export const DetailProductSuccess = (payload: ProductBarberFields): DetailProductActionTypes => ({
  type: DETAIL_PRODUCT_SUCCESS,
  payload: payload,
});
