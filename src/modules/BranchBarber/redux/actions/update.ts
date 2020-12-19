import { AppError } from '@commons/types';
import {
  UPDATE_BRANCH_BARBER,
  UPDATE_BRANCH_BARBER_ERROR,
  UPDATE_BRANCH_BARBER_SUCCESS,
  UpdateBranchBarberActionTypes,
  branchFields,
} from '../action-types';

export const UpdateBranchBarber = (payload: branchFields): UpdateBranchBarberActionTypes => ({
  type: UPDATE_BRANCH_BARBER,
  payload,
});

export const UpdateBranchBarberError = (payload: AppError): UpdateBranchBarberActionTypes => ({
  type: UPDATE_BRANCH_BARBER_ERROR,
  payload,
});

export const UpdateBranchBarberSuccess = (): UpdateBranchBarberActionTypes => ({
  type: UPDATE_BRANCH_BARBER_SUCCESS,
});
