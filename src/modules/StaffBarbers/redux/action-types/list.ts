import { AppError } from '@commons/types';

export const LIST_STAFF_BARBER = 'LIST_STAFF_BARBER';
export const LIST_STAFF_BARBER_SUCCESS = 'LIST_STAFF_BARBER_SUCCESS';
export const LIST_STAFF_BARBER_ERROR = 'LIST_STAFF_BARBER_ERROR';
export const LIST_STAFF_BARBER_FILTER = 'LIST_STAFF_BARBER_UPDATE_FILTER';
export const LIST_STAFF_BARBER_FILTER_OUT = 'LIST_STAFF_BARBER_UPDATE_FILTER_OUT';

export type StaffFields = {
  id: string;
  idCity: string;
  idBranch: string;
  name: string;
  password: string;
  rating: number;
  ratingTimes: number;
  username: string;
  status: boolean;
  salary: number;
  avatar: string;
};

export interface ListStaffBarberAction {
  type: typeof LIST_STAFF_BARBER;
}

export interface ListStaffBarberActionSuccess {
  type: typeof LIST_STAFF_BARBER_SUCCESS;
  payload: StaffFields[];
}

export interface ListStaffBarberActionError {
  type: typeof LIST_STAFF_BARBER_ERROR;
  payload: AppError;
}

export interface ListStaffBarberFilterAction {
  type: typeof LIST_STAFF_BARBER_FILTER;
  payload: string;
}

export interface ListStaffBarberFilterOutAction {
  type: typeof LIST_STAFF_BARBER_FILTER_OUT;
}

export type ListStaffBarberActionTypes =
  | ListStaffBarberAction
  | ListStaffBarberActionSuccess
  | ListStaffBarberActionError
  | ListStaffBarberFilterAction
  | ListStaffBarberFilterOutAction;
