import { StaffFields } from '../action-types';
import {
  DETAIL_STAFF_BARBER,
  DETAIL_STAFF_BARBER_ERROR,
  DETAIL_STAFF_BARBER_SUCCESS,
  DetailStaffBarberActionTypes,
} from '../action-types/detail';

export interface DetailStaffBarberState {
  loading: boolean;
  items: StaffFields;
}

const initialState: DetailStaffBarberState = {
  loading: true,
  items: {
    id: '',
    idBranch: '',
    idCity: '',
    name: '',
    password: '',
    rating: 0,
    ratingTimes: 0,
    username: '',
    status: false,
  },
};

export default function DetailStaff(
  state = initialState,
  action: DetailStaffBarberActionTypes,
): DetailStaffBarberState {
  switch (action.type) {
    case DETAIL_STAFF_BARBER:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_STAFF_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case DETAIL_STAFF_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
