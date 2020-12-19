import {
  DETAIL_PRODUCT,
  DETAIL_PRODUCT_ERROR,
  DETAIL_PRODUCT_SUCCESS,
  DetailProductActionTypes,
  ProductBarberFields,
} from '../action-types';

export interface DetailProductBarberState {
  loading: boolean;
  data?: ProductBarberFields;
}

const initialState = {
  loading: false,
};

export default function DetailProductBarber(
  state = initialState,
  action: DetailProductActionTypes,
): DetailProductBarberState {
  switch (action.type) {
    case DETAIL_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DETAIL_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
