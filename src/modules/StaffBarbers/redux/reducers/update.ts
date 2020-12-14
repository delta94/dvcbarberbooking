import { StaffFields } from '../action-types';
import {
  UPDATE_STAFF_BARBER,
  UPDATE_STAFF_BARBER_ERROR,
  UPDATE_STAFF_BARBER_SUCCESS,
  UpdateStaffBarberActionTypes,
} from '../action-types/update';

export interface UpdateStaffBarberState {
  loading: boolean;
  items: StaffFields;
}

const initialState: UpdateStaffBarberState = {
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

export default function UpdateStaff(
  state = initialState,
  action: UpdateStaffBarberActionTypes,
): UpdateStaffBarberState {
  switch (action.type) {
    case UPDATE_STAFF_BARBER:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_STAFF_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_STAFF_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
