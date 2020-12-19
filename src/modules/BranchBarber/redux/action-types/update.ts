import { AppError } from '@commons/types';
import { branchFields } from './list';

export const UPDATE_BRANCH_BARBER = 'UPDATE_BRANCH_BARBER';
export const UPDATE_BRANCH_BARBER_SUCCESS = 'UPDATE_BRANCH_BARBER_SUCCESS';
export const UPDATE_BRANCH_BARBER_ERROR = 'UPDATE_BRANCH_BARBER_ERROR';

export interface UpdateBranchBarberAction {
  type: typeof UPDATE_BRANCH_BARBER;
  payload: branchFields;
}

export interface UpdateBranchBarberActionSuccess {
  type: typeof UPDATE_BRANCH_BARBER_SUCCESS;
}

export interface UpdateBranchBarberActionError {
  type: typeof UPDATE_BRANCH_BARBER_ERROR;
  payload: AppError;
}

export type UpdateBranchBarberActionTypes =
  | UpdateBranchBarberAction
  | UpdateBranchBarberActionSuccess
  | UpdateBranchBarberActionError;
