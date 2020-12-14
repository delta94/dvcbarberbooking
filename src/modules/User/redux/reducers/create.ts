import { CREATE_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS, CreateUserActionTypes, User } from '../action-types';

export interface CreateUserState {
  loading: boolean;
  data?: User;
}

const initialState = {
  loading: false,
};

export default function createUser(state = initialState, action: CreateUserActionTypes): CreateUserState {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
