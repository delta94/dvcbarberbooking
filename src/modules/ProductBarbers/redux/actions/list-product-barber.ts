import { AppError } from '@commons/types';
import {
  LIST_PRODUCT_BARBER,
  LIST_PRODUCT_BARBER_ERROR,
  LIST_PRODUCT_BARBER_SUCCESS,
  ListProductBarberActionTypes,
  ProductBarberFields,
} from '../action-types/list-productbarber';

export const listProductBarber = (): ListProductBarberActionTypes => ({
  type: LIST_PRODUCT_BARBER,
});

export const listProductBarberError = (payload: AppError): ListProductBarberActionTypes => ({
  type: LIST_PRODUCT_BARBER_ERROR,
  payload,
});

export const listProductBarberSuccess = (payload: ProductBarberFields[]): ListProductBarberActionTypes => ({
  type: LIST_PRODUCT_BARBER_SUCCESS,
  payload,
});
