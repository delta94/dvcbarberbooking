import {
  UPDATE_BRANCH_BARBER,
  UPDATE_BRANCH_BARBER_ERROR,
  UPDATE_BRANCH_BARBER_SUCCESS,
  UpdateBranchBarberActionTypes,
  branchFields,
} from '../action-types';

export interface UpdateBranchBarberState {
  loading: boolean;
  data?: branchFields;
}

const initialState = {
  loading: false,
};

export default function UpdateBranchBarber(
  state = initialState,
  action: UpdateBranchBarberActionTypes,
): UpdateBranchBarberState {
  switch (action.type) {
    case UPDATE_BRANCH_BARBER:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_BRANCH_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_BRANCH_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
