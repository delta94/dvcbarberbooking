import { AppError } from '@commons/types';
import {
  UPDATE_STAFF_BARBER,
  UPDATE_STAFF_BARBER_ERROR,
  UPDATE_STAFF_BARBER_SUCCESS,
  UpdateStaffBarberActionTypes,
} from '../action-types/update';
import { StaffFields } from '../action-types/list';

export const UpdateStaffBarber = (payload: StaffFields): UpdateStaffBarberActionTypes => ({
  type: UPDATE_STAFF_BARBER,
  payload,
});

export const UpdateStaffBarberError = (payload: AppError): UpdateStaffBarberActionTypes => ({
  type: UPDATE_STAFF_BARBER_ERROR,
  payload,
});

export const UpdateStaffBarberSuccess = (): UpdateStaffBarberActionTypes => ({
  type: UPDATE_STAFF_BARBER_SUCCESS,
});
