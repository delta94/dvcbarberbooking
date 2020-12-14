import { AppError } from '@commons/types';
import {
  LIST_BRANCH_BARBER,
  LIST_BRANCH_BARBER_ERROR,
  LIST_BRANCH_BARBER_SUCCESS,
  LIST_BRANCH_BARBER_BY_CITY,
  LIST_BRANCH_BARBER_BY_CITY_ERROR,
  LIST_BRANCH_BARBER_BY_CITY_SUCCESS,
  ListBranchBarberActionTypes,
  branchFields,
} from '../action-types/list';

export const ListBranchBarber = (): ListBranchBarberActionTypes => ({
  type: LIST_BRANCH_BARBER,
});

export const ListBranchBarberError = (payload: AppError): ListBranchBarberActionTypes => ({
  type: LIST_BRANCH_BARBER_ERROR,
  payload,
});

export const ListBranchBarberSuccess = (payload: branchFields[]): ListBranchBarberActionTypes => ({
  type: LIST_BRANCH_BARBER_SUCCESS,
  payload,
});

export const ListBranchByCity = (payload: string): ListBranchBarberActionTypes => ({
  type: LIST_BRANCH_BARBER_BY_CITY,
  payload,
});

export const ListBranchByCityError = (payload: AppError): ListBranchBarberActionTypes => ({
  type: LIST_BRANCH_BARBER_BY_CITY_ERROR,
  payload,
});

export const ListBranchByCitySuccess = (payload: branchFields[]): ListBranchBarberActionTypes => ({
  type: LIST_BRANCH_BARBER_BY_CITY_SUCCESS,
  payload,
});
