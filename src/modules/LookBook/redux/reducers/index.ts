import { combineReducers } from 'redux';

import listUsers, { ListUserState } from './list';
import detailUser, { DetailUserState } from './detail';
import createUser, { CreateUserState } from './create';

export interface UserModuleState {
  listUsers: ListUserState;
  detailUser: DetailUserState;
  createUser: CreateUserState;
}

export default combineReducers<UserModuleState>({
  listUsers,
  detailUser,
  createUser,
});
