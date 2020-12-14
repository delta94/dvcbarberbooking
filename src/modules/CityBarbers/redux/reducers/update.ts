import {
  UPDATE_CITY_BARBER,
  UPDATE_CITY_BARBER_ERROR,
  UPDATE_CITY_BARBER_SUCCESS,
  CityFields,
  UpdateCityBarberActionTypes,
} from '../action-types';

export interface UpdateCityBarberState {
  loading: boolean;
  data?: CityFields;
}

const initialState = {
  loading: false,
};

export default function UpdateCityBarber(
  state = initialState,
  action: UpdateCityBarberActionTypes,
): UpdateCityBarberState {
  switch (action.type) {
    case UPDATE_CITY_BARBER:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_CITY_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_CITY_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
