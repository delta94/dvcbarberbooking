import { AppError } from '@commons/types';
import {
  DETAIL_STAFF_BARBER,
  DETAIL_STAFF_BARBER_ERROR,
  DETAIL_STAFF_BARBER_SUCCESS,
  DetailStaffBarberActionTypes,
} from '../action-types/detail';
import { StaffFields } from '../action-types/list';

export const DetailStaffBarber = (id: string, idCity: string, idBranch: string): DetailStaffBarberActionTypes => ({
  type: DETAIL_STAFF_BARBER,
  id,
  idCity,
  idBranch,
});

export const DetailStaffBarberError = (payload: AppError): DetailStaffBarberActionTypes => ({
  type: DETAIL_STAFF_BARBER_ERROR,
  payload,
});

export const DetailStaffBarberSuccess = (payload: StaffFields): DetailStaffBarberActionTypes => ({
  type: DETAIL_STAFF_BARBER_SUCCESS,
  payload,
});
