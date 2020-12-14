import {
  CREATE_CITY_BARBER,
  CREATE_CITY_BARBER_ERROR,
  CREATE_CITY_BARBER_SUCCESS,
  CityFields,
  CreateCityBarberActionTypes,
} from '../action-types';

export interface CreateCityBarberState {
  loading: boolean;
  data?: CityFields;
}

const initialState = {
  loading: false,
};

export default function CreateCityBarber(
  state = initialState,
  action: CreateCityBarberActionTypes,
): CreateCityBarberState {
  switch (action.type) {
    case CREATE_CITY_BARBER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_CITY_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_CITY_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
