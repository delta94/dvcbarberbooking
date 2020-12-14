import {
  CREATE_CATEGORY_BARBER,
  CREATE_CATEGORY_BARBER_ERROR,
  CREATE_CATEGORY_BARBER_SUCCESS,
  CategoriesFields,
  CreateCategoryBarberActionTypes,
} from '../action-types';

export interface CreateCategoryBarberState {
  loading: boolean;
  data?: CategoriesFields;
}

const initialState = {
  loading: false,
};

export default function createCategoryBarber(
  state = initialState,
  action: CreateCategoryBarberActionTypes,
): CreateCategoryBarberState {
  switch (action.type) {
    case CREATE_CATEGORY_BARBER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CATEGORY_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_CATEGORY_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
