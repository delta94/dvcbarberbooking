import { AppError } from '@commons/types';
import {
  DETAIL_BRANCH_BARBER,
  DETAIL_BRANCH_BARBER_ERROR,
  DETAIL_BRANCH_BARBER_SUCCESS,
  DetailBranchBarberActionTypes,
  branchFields,
} from '../action-types';

export const DetailBranchBarber = (id: string, idCity: string): DetailBranchBarberActionTypes => ({
  type: DETAIL_BRANCH_BARBER,
  id,
  idCity,
});

export const DetailBranchBarberError = (payload: AppError): DetailBranchBarberActionTypes => ({
  type: DETAIL_BRANCH_BARBER_ERROR,
  payload,
});

export const DetailBranchBarberSuccess = (payload: branchFields): DetailBranchBarberActionTypes => ({
  type: DETAIL_BRANCH_BARBER_SUCCESS,
  payload,
});
