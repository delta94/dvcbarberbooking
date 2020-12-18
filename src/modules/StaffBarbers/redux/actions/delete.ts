import { AppError } from '@commons/types';
import {
  DELETE_STAFF_BARBER,
  DELETE_STAFF_BARBER_ERROR,
  DELETE_STAFF_BARBER_SUCCESS,
  DeleteStaffBarberActionTypes,
} from '../action-types/delete';
import { StaffFields } from '../action-types/list';

export const DeleteStaffBarber = (id: string, idCity: string, idBranch: string): DeleteStaffBarberActionTypes => ({
  type: DELETE_STAFF_BARBER,
  id,
  idCity,
  idBranch,
});

export const DeleteStaffBarberError = (payload: AppError): DeleteStaffBarberActionTypes => ({
  type: DELETE_STAFF_BARBER_ERROR,
  payload,
});

export const DeleteStaffBarberSuccess = (): DeleteStaffBarberActionTypes => ({
  type: DELETE_STAFF_BARBER_SUCCESS,
});
