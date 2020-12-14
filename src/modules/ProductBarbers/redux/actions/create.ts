import { AppError } from '@commons/types';
import {
  CREATE_PRODUCT_BARBER,
  CREATE_PRODUCT_BARBER_ERROR,
  CREATE_PRODUCT_BARBER_SUCCESS,
  CreateProductBarberActionTypes,
  ProductBarberFields,
} from '../action-types';

export const createProductBarber = (payload: ProductBarberFields): CreateProductBarberActionTypes => ({
  type: CREATE_PRODUCT_BARBER,
  payload,
});

export const createProductBarberError = (payload: AppError): CreateProductBarberActionTypes => ({
  type: CREATE_PRODUCT_BARBER_ERROR,
  payload,
});

export const createProductBarberSuccess = (): CreateProductBarberActionTypes => ({
  type: CREATE_PRODUCT_BARBER_SUCCESS,
});
