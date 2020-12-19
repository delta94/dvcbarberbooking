import { ListUsersActionTypes, LIST_USERS, LIST_USERS_ERROR, LIST_USERS_SUCCESS } from '../action-types/list-users';
import { DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, DeleteUserActionTypes } from '../action-types/delete';
import { User } from '@modules/User/redux/action-types/list-users';

export interface ListUserState {
  loading: boolean;
  items: User[];
  deletingItems: string[];
}

const initialState: ListUserState = {
  loading: true,
  items: [],
  deletingItems: [],
};

export default function listUsers(
  state = initialState,
  action: ListUsersActionTypes | DeleteUserActionTypes,
): ListUserState {
  switch (action.type) {
    case LIST_USERS:
      return {
        ...state,
        loading: true,
      };

    case LIST_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
      };
    case LIST_USERS_ERROR:
      return {
        ...state,
        loading: false,
      };

    // Delete
    case DELETE_USER:
      return {
        ...state,
        deletingItems: [...state.deletingItems, action.payload],
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deletingItems: state.deletingItems.filter((t) => t !== action.payload),
        items: state.items.filter((t) => t.id !== action.payload),
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        deletingItems: state.deletingItems.filter((t) => t !== action.target),
      };

    default:
      return state;
  }
}
