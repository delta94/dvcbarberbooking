import { combineReducers } from 'redux';

import listStaffBarber, { ListStaffBarberState } from './list';
import updateStaffBarber, { UpdateStaffBarberState } from './update';
import detailStaffBarber, { DetailStaffBarberState } from './detail';
import createStaffBarber, { CreateStaffBarberState } from './create';

export interface StaffBarberModuleState {
  listStaffBarber: ListStaffBarberState;
  detailStaffBarber: DetailStaffBarberState;
  createStaffBarber: CreateStaffBarberState;
  updateStaffBarber: UpdateStaffBarberState;
}

export default combineReducers<StaffBarberModuleState>({
  listStaffBarber,
  detailStaffBarber,
  createStaffBarber,
  updateStaffBarber,
});
