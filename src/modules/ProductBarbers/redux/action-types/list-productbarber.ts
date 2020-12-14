import { AppError } from '@commons/types';

export const LIST_PRODUCT_BARBER = 'LIST_PRODUCT_BARBER';
export const LIST_PRODUCT_BARBER_SUCCESS = 'LIST_PRODUCT_BARBER_SUCCESS';
export const LIST_PRODUCT_BARBER_ERROR = 'LIST_PRODUCT_BARBER_ERROR';
export const LIST_PRODUCT_BARBER_UPDATE_FILTER = 'LIST_PRODUCT_BARBER_UPDATE_FILTER';

export type ProductBarberFields = {
  idCol: string;
  id: string;
  image: string;
  name: string;
  price: string;
};

export interface ListProductBarberAction {
  type: typeof LIST_PRODUCT_BARBER;
}

export interface ListProductBarberActionSuccess {
  type: typeof LIST_PRODUCT_BARBER_SUCCESS;
  payload: ProductBarberFields[];
}

export interface ListProductBarberActionError {
  type: typeof LIST_PRODUCT_BARBER_ERROR;
  payload: AppError;
}

export type ListProductBarberActionTypes =
  | ListProductBarberAction
  | ListProductBarberActionSuccess
  | ListProductBarberActionError;
