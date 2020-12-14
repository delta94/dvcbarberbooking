import { LoginActionTypes, LoginState, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../action-types/login';
// import { getAuthLocalData } from '@helpers/token';
import { LogoutActionTypes, LOGOUT_SUCCESS } from '../action-types';

const initialState = {
  loading: false,
};

export default (state = initialState, action: LoginActionTypes | LogoutActionTypes): LoginState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...action.payload,
        },
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        userInfo: undefined,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        userInfo: undefined,
      };

    default:
      return state;
  }
};
