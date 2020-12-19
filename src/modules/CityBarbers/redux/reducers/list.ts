import {
  CityFields,
  LIST_CITY_BARBER,
  LIST_CITY_BARBER_ERROR,
  LIST_CITY_BARBER_SUCCESS,
  ListCityBarberActionTypes,
} from '../action-types/list-city-barber';

import {
  DELETE_CITY_BARBER,
  DELETE_CITY_BARBER_ERROR,
  DELETE_CITY_BARBER_SUCCESS,
  DeleteCityBarberActionTypes,
} from '../action-types/delete';

export interface ListCityBarberState {
  loading: boolean;
  items: CityFields[];
  deletingItems: string[];
}

const initialState: ListCityBarberState = {
  loading: true,
  items: [],
  deletingItems: [],
};

export default function listCity(
  state = initialState,
  action: ListCityBarberActionTypes | DeleteCityBarberActionTypes,
): ListCityBarberState {
  switch (action.type) {
    case LIST_CITY_BARBER:
      return {
        ...state,
        loading: true,
      };

    case LIST_CITY_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
      };
    case LIST_CITY_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    // Delete
    case DELETE_CITY_BARBER:
      return {
        ...state,
        deletingItems: [...state.deletingItems, action.payload],
      };
    case DELETE_CITY_BARBER_SUCCESS:
      return {
        ...state,
        deletingItems: state.deletingItems.filter((t) => t !== action.payload),
        items: state.items.filter((t) => t.id !== action.payload),
      };
    case DELETE_CITY_BARBER_ERROR:
      return {
        ...state,
        deletingItems: state.deletingItems.filter((t) => t !== action.target),
      };

    default:
      return state;
  }
}
