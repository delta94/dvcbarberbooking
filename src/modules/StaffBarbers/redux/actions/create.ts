import { AppError } from '@commons/types';
import {
  CREATE_STAFF_BARBER,
  CREATE_STAFF_BARBER_ERROR,
  CREATE_STAFF_BARBER_SUCCESS,
  CreateStaffBarberActionTypes,
} from '../action-types/create';
import { StaffFields } from '../action-types/list';

export const CreateStaffBarber = (payload: StaffFields): CreateStaffBarberActionTypes => ({
  type: CREATE_STAFF_BARBER,
  payload,
});

export const CreateStaffBarberError = (payload: AppError): CreateStaffBarberActionTypes => ({
  type: CREATE_STAFF_BARBER_ERROR,
  payload,
});

export const CreateStaffBarberSuccess = (): CreateStaffBarberActionTypes => ({
  type: CREATE_STAFF_BARBER_SUCCESS,
});
