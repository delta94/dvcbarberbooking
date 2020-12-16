import { StaffFields } from '../action-types';
import {
  CREATE_STAFF_BARBER,
  CREATE_STAFF_BARBER_ERROR,
  CREATE_STAFF_BARBER_SUCCESS,
  CreateStaffBarberActionTypes,
} from '../action-types/create';

export interface CreateStaffBarberState {
  loading: boolean;
  items: StaffFields;
}

const initialState: CreateStaffBarberState = {
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
    salary: 0,
  },
};

export default function CreateStaff(
  state = initialState,
  action: CreateStaffBarberActionTypes,
): CreateStaffBarberState {
  switch (action.type) {
    case CREATE_STAFF_BARBER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_STAFF_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_STAFF_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
