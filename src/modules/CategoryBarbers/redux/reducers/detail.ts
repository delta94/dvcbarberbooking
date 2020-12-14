import { CategoriesFields } from '../action-types';
import {
  GET_CATEGORY_BARBER,
  GET_CATEGORY_BARBER_ERROR,
  GET_CATEGORY_BARBER_SUCCESS,
  GetCategoryBarberActionTypes,
} from '../action-types/detail';

export interface DetailCategotyBarberState {
  loading: boolean;
  saving: boolean;
  data?: CategoriesFields;
}

const initialState: DetailCategotyBarberState = {
  loading: true,
  saving: false,
};

export default function DetailCategotyBarber(
  state = initialState,
  action: GetCategoryBarberActionTypes,
): DetailCategotyBarberState {
  switch (action.type) {
    case GET_CATEGORY_BARBER:
      return {
        ...state,
        loading: true,
        data: undefined,
      };

    case GET_CATEGORY_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_CATEGORY_BARBER_ERROR:
      return {
        ...state,
        loading: false,
        data: undefined,
      };

    default:
      return state;
  }
}
