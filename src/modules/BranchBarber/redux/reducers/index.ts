import { combineReducers } from 'redux';

import listBranchBarber, { ListBranchBarberState } from './list';
import detailBranchBarber, { DetailBranchBarberState } from './detail';
import createBranchBarber, { CreateBranchBarberState } from './create';

export interface BranchBarberModuleState {
  listBranchBarber: ListBranchBarberState;
  createBranchBarber: CreateBranchBarberState;
  detailBranchBarber: DetailBranchBarberState;
}

export default combineReducers<BranchBarberModuleState>({
  listBranchBarber,
  createBranchBarber,
  detailBranchBarber,
});
