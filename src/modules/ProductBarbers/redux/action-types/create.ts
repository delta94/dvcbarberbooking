import { AppError } from '@commons/types';
import { ProductBarberFields } from './list-productbarber';

export const CREATE_PRODUCT_BARBER = 'CREATE_PRODUCT_BARBER';
export const CREATE_PRODUCT_BARBER_SUCCESS = 'CREATE_PRODUCT_BARBER_SUCCESS';
export const CREATE_PRODUCT_BARBER_ERROR = 'CREATE_PRODUCT_BARBER_ERROR';

export interface CreateProductBarberAction {
  type: typeof CREATE_PRODUCT_BARBER;
  payload: ProductBarberFields;
}

export interface CreateProductBarberActionSuccess {
  type: typeof CREATE_PRODUCT_BARBER_SUCCESS;
}

export interface CreateProductBarberActionError {
  type: typeof CREATE_PRODUCT_BARBER_ERROR;
  payload: AppError;
}

export type CreateProductBarberActionTypes =
  | CreateProductBarberAction
  | CreateProductBarberActionSuccess
  | CreateProductBarberActionError;
