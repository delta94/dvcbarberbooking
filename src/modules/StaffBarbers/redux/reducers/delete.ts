import { StaffFields } from '../action-types';
import {
  DELETE_STAFF_BARBER,
  DELETE_STAFF_BARBER_ERROR,
  DELETE_STAFF_BARBER_SUCCESS,
  DeleteStaffBarberActionTypes,
} from '../action-types/delete';

export interface DeleteStaffBarberState {
  loading: boolean;
}

const initialState: DeleteStaffBarberState = {
  loading: true,
};

export default function DeleteStaff(
  state = initialState,
  action: DeleteStaffBarberActionTypes,
): DeleteStaffBarberState {
  switch (action.type) {
    case DELETE_STAFF_BARBER:
      return {
        ...state,
        loading: true,
      };

    case DELETE_STAFF_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_STAFF_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
