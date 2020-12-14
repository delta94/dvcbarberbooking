import { combineReducers } from 'redux';
import auth, { AuthModuleState } from '@modules/Auth/redux/reducers';
import user, { UserModuleState } from '@modules/User/redux/reducers';
import booking, { bookingModuleState } from '@modules/Booking/redux/reducers';
import categoryBarber, { CategoryBarberModuleState } from '@modules/CategoryBarbers/redux/reducers';
import productBarber, { ProductBarberModuleState } from '@modules/ProductBarbers/redux/reducers';
import cityBarber, { CityBarberModuleState } from '@modules/CityBarbers/redux/reducers';
import branchBarber, { BranchBarberModuleState } from '@modules/BranchBarber/redux/reducers';
import billBarber, { BillBarberModuleState } from '@modules/BillBarbers/redux/reducers';
import staffBarber, { StaffBarberModuleState } from '@modules/StaffBarbers/redux/reducers';

export interface RootState {
  auth: AuthModuleState;
  user: UserModuleState;
  booking: bookingModuleState;
  categoryBarber: CategoryBarberModuleState;
  productBarber: ProductBarberModuleState;
  cityBarber: CityBarberModuleState;
  branchBarber: BranchBarberModuleState;
  billBarber: BillBarberModuleState;
  staffBarber: StaffBarberModuleState;
}

export default combineReducers<RootState>({
  auth,
  user,
  booking,
  categoryBarber,
  productBarber,
  cityBarber,
  branchBarber,
  billBarber,
  staffBarber,
});
