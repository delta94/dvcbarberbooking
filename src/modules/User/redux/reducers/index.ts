import { combineReducers } from 'redux';

import listUsers, { ListUserState } from './list';
import detailUser, { DetailUserState } from './detail';
import createUser, { CreateUserState } from './create';
import updateUser, { UpdateUserBarberState } from './update';
import listBookingUser, { ListBookingUserState } from './list-booking-user';

export interface UserModuleState {
  listUsers: ListUserState;
  detailUser: DetailUserState;
  createUser: CreateUserState;
  listBookingUser: ListBookingUserState;
  updateUser: UpdateUserBarberState;
}

export default combineReducers<UserModuleState>({
  listUsers,
  detailUser,
  createUser,
  listBookingUser,
  updateUser,
});
