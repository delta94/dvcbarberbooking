import { AppError } from '@commons/types';
import {
  CREATE_BRANCH_BARBER,
  CREATE_BRANCH_BARBER_ERROR,
  CREATE_BRANCH_BARBER_SUCCESS,
  CreateBranchBarberActionTypes,
  branchFields,
} from '../action-types';

export const createBranchBarber = (payload: branchFields): CreateBranchBarberActionTypes => ({
  type: CREATE_BRANCH_BARBER,
  payload,
});

export const createBranchBarberError = (payload: AppError): CreateBranchBarberActionTypes => ({
  type: CREATE_BRANCH_BARBER_ERROR,
  payload,
});

export const createBranchBarberSuccess = (): CreateBranchBarberActionTypes => ({
  type: CREATE_BRANCH_BARBER_SUCCESS,
});
