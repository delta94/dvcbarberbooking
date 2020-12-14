import { AppError } from '@commons/types';
import { branchFields } from './list';

export const CREATE_BRANCH_BARBER = 'CREATE_BRANCH_BARBER';
export const CREATE_BRANCH_BARBER_SUCCESS = 'CREATE_BRANCH_BARBER_SUCCESS';
export const CREATE_BRANCH_BARBER_ERROR = 'CREATE_BRANCH_BARBER_ERROR';

export interface CreateBranchBarberAction {
  type: typeof CREATE_BRANCH_BARBER;
  payload: branchFields;
}

export interface CreateBranchBarberActionSuccess {
  type: typeof CREATE_BRANCH_BARBER_SUCCESS;
}

export interface CreateBranchBarberActionError {
  type: typeof CREATE_BRANCH_BARBER_ERROR;
  payload: AppError;
}

export type CreateBranchBarberActionTypes =
  | CreateBranchBarberAction
  | CreateBranchBarberActionSuccess
  | CreateBranchBarberActionError;
