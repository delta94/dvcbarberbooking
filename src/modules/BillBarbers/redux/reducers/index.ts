import { combineReducers } from 'redux';

import listBillBarber, { ListBillBarberState } from './list';

export interface BillBarberModuleState {
  listBillBarber: ListBillBarberState;
}

export default combineReducers<BillBarberModuleState>({
  listBillBarber,
});
