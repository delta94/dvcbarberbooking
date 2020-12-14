import { AppError } from '@commons/types';
import { branchFields } from './list';

export const DETAIL_BRANCH_BARBER = 'DETAIL_BRANCH_BARBER';
export const DETAIL_BRANCH_BARBER_SUCCESS = 'DETAIL_BRANCH_BARBER_SUCCESS';
export const DETAIL_BRANCH_BARBER_ERROR = 'DETAIL_BRANCH_BARBER_ERROR';

export interface DetailBranchBarberAction {
  type: typeof DETAIL_BRANCH_BARBER;
  id: string;
  idCity: string;
}

export interface DetailBranchBarberActionSuccess {
  type: typeof DETAIL_BRANCH_BARBER_SUCCESS;
  payload: branchFields;
}

export interface DetailBranchBarberActionError {
  type: typeof DETAIL_BRANCH_BARBER_ERROR;
  payload: AppError;
}

export type DetailBranchBarberActionTypes =
  | DetailBranchBarberAction
  | DetailBranchBarberActionSuccess
  | DetailBranchBarberActionError;
