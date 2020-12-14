import { combineReducers } from 'redux';

import listUsers, { ListUserState } from './list';
import detailUser, { DetailUserState } from './detail';
import createUser, { CreateUserState } from './create';
import listBookingUser, { ListBookingUserState } from './list-booking-user';

export interface UserModuleState {
  listUsers: ListUserState;
  detailUser: DetailUserState;
  createUser: CreateUserState;
  listBookingUser: ListBookingUserState;
}

export default combineReducers<UserModuleState>({
  listUsers,
  detailUser,
  createUser,
  listBookingUser,
});
