import {
  DETAIL_CITY_BARBER,
  DETAIL_CITY_BARBER_ERROR,
  DETAIL_CITY_BARBER_SUCCESS,
  DetailCityBarberActionTypes,
  CityFields,
} from '../action-types';

export interface DetailCityBarberState {
  loading: boolean;
  data?: CityFields;
}

const initialState = {
  loading: false,
};

export default function DetailCityBarber(
  state = initialState,
  action: DetailCityBarberActionTypes,
): DetailCityBarberState {
  switch (action.type) {
    case DETAIL_CITY_BARBER:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_CITY_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DETAIL_CITY_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
