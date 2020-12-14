import {
  ListUsersActionTypes,
  LIST_USERS,
  LIST_USERS_ERROR,
  LIST_USERS_SUCCESS,
  LIST_USERS_FILTER,
  LIST_USERS_FILTER_OUT,
} from '../action-types/list-users';
import { DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, DeleteUserActionTypes } from '../action-types/delete';
import { User } from '@modules/User/redux/action-types/list-users';

export interface ListUserState {
  loading: boolean;
  items: User[];
  deletingItems: string[];
  itemsFilter: User[];
}

const initialState: ListUserState = {
  loading: true,
  items: [],
  deletingItems: [],
  itemsFilter: [],
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

    case LIST_USERS_FILTER:
      const it = state.itemsFilter.filter(
        (items) =>
          items.name?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.address?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.phoneNumber?.toLowerCase().includes(action.payload.toLowerCase()),
      );

      return {
        ...state,
        items: [...it],
      };

    case LIST_USERS_FILTER_OUT:
      return {
        ...state,
        items: [...state.itemsFilter],
      };

    case LIST_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
        itemsFilter: action.payload || [],
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
