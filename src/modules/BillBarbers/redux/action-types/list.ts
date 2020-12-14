import { AppError } from '@commons/types';

export const LIST_BILL_BARBER = 'LIST_BILL_BARBER';
export const LIST_BILL_BARBER_SUCCESS = 'LIST_BILL_BARBER_SUCCESS';
export const LIST_BILL_BARBER_ERROR = 'LIST_BILL_BARBER_ERROR';
export const LIST_BILL_BARBER_FILTER = 'LIST_BILL_BARBER_UPDATE_FILTER';
export const LIST_BILL_BARBER_FILTER_OUT = 'LIST_BILL_BARBER_UPDATE_FILTER_OUT';

export type BillFields = {
  id: string;
  idCity: string;
  idBranch: string;
  barberId?: string;
  barberName?: string;
  barberServices?: [];
  customerName?: string;
  customerPhone?: string;
  finalPrice: string;
  imageUrl?: string;
  salonAddress?: string;
  salonId?: string;
  salonName?: string;
  shoppingItemList?: [];
};

export interface ListBillBarberAction {
  type: typeof LIST_BILL_BARBER;
  from?: string;
  to?: string;
}

export interface ListBillBarberActionSuccess {
  type: typeof LIST_BILL_BARBER_SUCCESS;
  payload: BillFields[];
}

export interface ListBillBarberActionError {
  type: typeof LIST_BILL_BARBER_ERROR;
  payload: AppError;
}

export interface ListBillBarberFilterAction {
  type: typeof LIST_BILL_BARBER_FILTER;
  payload: string;
}

export interface ListBillBarberFilterOutAction {
  type: typeof LIST_BILL_BARBER_FILTER_OUT;
}

export type ListBillBarberActionTypes =
  | ListBillBarberAction
  | ListBillBarberActionSuccess
  | ListBillBarberActionError
  | ListBillBarberFilterAction
  | ListBillBarberFilterOutAction;
