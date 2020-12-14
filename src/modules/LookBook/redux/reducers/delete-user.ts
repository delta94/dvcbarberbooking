import { DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, DeleteUserActionTypes } from '../action-types';

export interface DeleteUserState {
  loading: boolean;
  data?: any; //todo:
}

const initialState = {
  loading: false,
};

export default function deleteUser(state = initialState, action: DeleteUserActionTypes): DeleteUserState {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        loading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
