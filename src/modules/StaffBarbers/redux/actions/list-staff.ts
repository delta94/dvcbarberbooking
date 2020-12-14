import { AppError } from '@commons/types';
import {
  LIST_STAFF_BARBER,
  LIST_STAFF_BARBER_ERROR,
  LIST_STAFF_BARBER_FILTER,
  LIST_STAFF_BARBER_FILTER_OUT,
  LIST_STAFF_BARBER_SUCCESS,
  ListStaffBarberActionTypes,
  StaffFields,
} from '../action-types/list';

export const ListStaffBarber = (): ListStaffBarberActionTypes => ({
  type: LIST_STAFF_BARBER,
});

export const ListStaffBarberError = (payload: AppError): ListStaffBarberActionTypes => ({
  type: LIST_STAFF_BARBER_ERROR,
  payload,
});

export const ListStaffBarberSuccess = (payload: StaffFields[]): ListStaffBarberActionTypes => ({
  type: LIST_STAFF_BARBER_SUCCESS,
  payload,
});

export const ListStaffBarberFilter = (payload: string): ListStaffBarberActionTypes => ({
  type: LIST_STAFF_BARBER_FILTER,
  payload,
});

export const ListStaffbarberFilterOut = (): ListStaffBarberActionTypes => ({
  type: LIST_STAFF_BARBER_FILTER_OUT,
});
