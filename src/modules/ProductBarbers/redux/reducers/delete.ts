import {
  DELETE_PRODUCT,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  DeleteProductActionTypes,
  ProductBarberFields,
} from '../action-types';

export interface DeleteProductBarberState {
  loading: boolean;
  data?: ProductBarberFields;
}

const initialState = {
  loading: false,
};

export default function DeleteProductBarber(
  state = initialState,
  action: DeleteProductActionTypes,
): DeleteProductBarberState {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
