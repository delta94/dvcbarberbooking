import { User } from '../action-types';
import { GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, GetUserActionTypes } from '../action-types/detail';

export interface DetailUserState {
  loading: boolean;
  saving: boolean;
  data?: User;
}

const initialState: DetailUserState = {
  loading: true,
  saving: false,
};

export default function detailUser(state = initialState, action: GetUserActionTypes): DetailUserState {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
        data: undefined,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        data: undefined,
      };

    default:
      return state;
  }
}
