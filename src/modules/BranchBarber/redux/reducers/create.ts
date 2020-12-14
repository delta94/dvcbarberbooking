import {
  CREATE_BRANCH_BARBER,
  CREATE_BRANCH_BARBER_ERROR,
  CREATE_BRANCH_BARBER_SUCCESS,
  CreateBranchBarberActionTypes,
  branchFields,
} from '../action-types';

export interface CreateBranchBarberState {
  loading: boolean;
  data?: branchFields;
}

const initialState = {
  loading: false,
};

export default function CreateBranchBarber(
  state = initialState,
  action: CreateBranchBarberActionTypes,
): CreateBranchBarberState {
  switch (action.type) {
    case CREATE_BRANCH_BARBER:
      return {
        ...state,
        loading: true,
      };

    case CREATE_BRANCH_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_BRANCH_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
