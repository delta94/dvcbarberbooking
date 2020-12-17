import { User } from '../action-types';
import { UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS, UpdateUserActionTypes } from '../action-types/update';

export interface UpdateUserBarberState {
  loading: boolean;
  items: User;
}

const initialState: UpdateUserBarberState = {
  loading: true,
  items: {
    id: '',
  },
};

export default function UpdateUser(state = initialState, action: UpdateUserActionTypes): UpdateUserBarberState {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
