import { AppError } from '@commons/types';
import {
  BillFields,
  LIST_BILL_BARBER,
  LIST_BILL_BARBER_ERROR,
  LIST_BILL_BARBER_SUCCESS,
  LIST_BILL_BARBER_FILTER,
  LIST_BILL_BARBER_FILTER_OUT,
  ListBillBarberActionTypes,
} from '../action-types/list';

export const ListBillBarber = (year?: string): ListBillBarberActionTypes => ({
  type: LIST_BILL_BARBER,
  year,
});

export const ListBillBarberError = (payload: AppError): ListBillBarberActionTypes => ({
  type: LIST_BILL_BARBER_ERROR,
  payload,
});

export const ListBillBarberSuccess = (payload: BillFields[]): ListBillBarberActionTypes => ({
  type: LIST_BILL_BARBER_SUCCESS,
  payload,
});

export const ListBillBarberFilter = (payload: string): ListBillBarberActionTypes => ({
  type: LIST_BILL_BARBER_FILTER,
  payload,
});

export const ListBillbarberFilterOut = (): ListBillBarberActionTypes => ({
  type: LIST_BILL_BARBER_FILTER_OUT,
});
