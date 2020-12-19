import { AppError } from '@commons/types';

export const LIST_BRANCH_BARBER = 'LIST_BRANCH_BARBER';
export const LIST_BRANCH_BARBER_BY_CITY = 'LIST_BRANCH_BARBER_BY_CITY';
export const LIST_BRANCH_BARBER_SUCCESS = 'LIST_BRANCH_BARBER_SUCCESS';
export const LIST_BRANCH_BARBER_BY_CITY_SUCCESS = 'LIST_BRANCH_BARBER_BY_CITY_SUCCESS';
export const LIST_BRANCH_BARBER_ERROR = 'LIST_BRANCH_BARBER_ERROR';
export const LIST_BRANCH_BARBER_BY_CITY_ERROR = 'LIST_BRANCH_BARBER_BY_CITY_ERROR';
export const LIST_BRANCH_BARBER_UPDATE_FILTER = 'LIST_BRANCH_BARBER_UPDATE_FILTER';

export type branchFields = {
  idCity?: string;
  id: string;
  name?: string;
  address?: string;
  openHours?: string;
  phone?: string;
  website?: string;
  status: boolean;
};

export interface ListBranchBarberAction {
  type: typeof LIST_BRANCH_BARBER;
}

export interface ListBranchByCityAction {
  type: typeof LIST_BRANCH_BARBER_BY_CITY;
  payload: string;
}

export interface ListBranchBarberActionSuccess {
  type: typeof LIST_BRANCH_BARBER_SUCCESS;
  payload: branchFields[];
}

export interface ListBranchByCityActionSuccess {
  type: typeof LIST_BRANCH_BARBER_BY_CITY_SUCCESS;
  payload: branchFields[];
}

export interface ListBranchBarberActionError {
  type: typeof LIST_BRANCH_BARBER_ERROR;
  payload: AppError;
}

export interface ListBranchByCityActionError {
  type: typeof LIST_BRANCH_BARBER_BY_CITY_ERROR;
  payload: AppError;
}

export type ListBranchBarberActionTypes =
  | ListBranchBarberAction
  | ListBranchBarberActionSuccess
  | ListBranchBarberActionError
  | ListBranchByCityAction
  | ListBranchByCityActionError
  | ListBranchByCityActionSuccess;
