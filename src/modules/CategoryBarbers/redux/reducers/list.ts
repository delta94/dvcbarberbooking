import {
  CategoriesFields,
  LIST_CATEGORY_BARBER,
  LIST_CATEGORY_BARBER_ERROR,
  LIST_CATEGORY_BARBER_SUCCESS,
  ListCategoriesBarberActionTypes,
} from '../action-types/list-category-barber';

import {
  DELETE_CATEGORY_BARBER,
  DELETE_CATEGORY_BARBER_ERROR,
  DELETE_CATEGORY_BARBER_SUCCESS,
  DeleteCategoryBarberActionTypes,
} from '../action-types/delete';

export interface ListCategoryBarberState {
  loading: boolean;
  items: CategoriesFields[];
  deletingItems: string[];
}

const initialState: ListCategoryBarberState = {
  loading: true,
  items: [],
  deletingItems: [],
};

export default function listCategory(
  state = initialState,
  action: ListCategoriesBarberActionTypes | DeleteCategoryBarberActionTypes,
): ListCategoryBarberState {
  switch (action.type) {
    case LIST_CATEGORY_BARBER:
      return {
        ...state,
        loading: true,
      };

    case LIST_CATEGORY_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
      };
    case LIST_CATEGORY_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    // Delete
    case DELETE_CATEGORY_BARBER:
      return {
        ...state,
        deletingItems: [...state.deletingItems, action.payload],
      };
    case DELETE_CATEGORY_BARBER_SUCCESS:
      return {
        ...state,
        deletingItems: state.deletingItems.filter((t) => t !== action.payload),
        items: state.items.filter((t) => t.id !== action.payload),
      };
    case DELETE_CATEGORY_BARBER_ERROR:
      return {
        ...state,
        deletingItems: state.deletingItems.filter((t) => t !== action.target),
      };

    default:
      return state;
  }
}
