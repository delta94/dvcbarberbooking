import {
  LIST_PRODUCT_BARBER,
  LIST_PRODUCT_BARBER_ERROR,
  LIST_PRODUCT_BARBER_SUCCESS,
  ListProductBarberActionTypes,
  ProductBarberFields,
} from '../action-types/list-productbarber';

export interface ListProductBarberState {
  loading: boolean;
  items: ProductBarberFields[];
  deletingItems: string[];
}

const initialState: ListProductBarberState = {
  loading: true,
  items: [],
  deletingItems: [],
};

export default function listProductBarber(
  state = initialState,
  action: ListProductBarberActionTypes,
): ListProductBarberState {
  switch (action.type) {
    case LIST_PRODUCT_BARBER:
      return {
        ...state,
        loading: true,
      };

    case LIST_PRODUCT_BARBER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        items: action.payload || [],
      };
    case LIST_PRODUCT_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
