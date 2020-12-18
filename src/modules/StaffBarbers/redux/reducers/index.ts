import { combineReducers } from 'redux';

import listStaffBarber, { ListStaffBarberState } from './list';
import deleteStaffBarber, { DeleteStaffBarberState } from './delete';
import updateStaffBarber, { UpdateStaffBarberState } from './update';
import detailStaffBarber, { DetailStaffBarberState } from './detail';
import createStaffBarber, { CreateStaffBarberState } from './create';

export interface StaffBarberModuleState {
  listStaffBarber: ListStaffBarberState;
  detailStaffBarber: DetailStaffBarberState;
  createStaffBarber: CreateStaffBarberState;
  updateStaffBarber: UpdateStaffBarberState;
  deleteStaffBarber: DeleteStaffBarberState;
}

export default combineReducers<StaffBarberModuleState>({
  listStaffBarber,
  detailStaffBarber,
  createStaffBarber,
  updateStaffBarber,
  deleteStaffBarber,
});
