import {
  CREATE_PRODUCT_BARBER,
  CREATE_PRODUCT_BARBER_ERROR,
  CREATE_PRODUCT_BARBER_SUCCESS,
  CreateProductBarberActionTypes,
  ProductBarberFields,
} from '../action-types';

export interface CreateProductBarberState {
  loading: boolean;
  data?: ProductBarberFields;
}

const initialState = {
  loading: false,
};

export default function CreateProductBarber(
  state = initialState,
  action: CreateProductBarberActionTypes,
): CreateProductBarberState {
  switch (action.type) {
    case CREATE_PRODUCT_BARBER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PRODUCT_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_PRODUCT_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
