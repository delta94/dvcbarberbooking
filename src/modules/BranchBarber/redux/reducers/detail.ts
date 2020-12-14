import {
  DETAIL_BRANCH_BARBER,
  DETAIL_BRANCH_BARBER_ERROR,
  DETAIL_BRANCH_BARBER_SUCCESS,
  DetailBranchBarberActionTypes,
  branchFields,
} from '../action-types';

export interface DetailBranchBarberState {
  loading: boolean;
  data?: branchFields;
}

const initialState = {
  loading: false,
};

export default function DetailBranchBarber(
  state = initialState,
  action: DetailBranchBarberActionTypes,
): DetailBranchBarberState {
  switch (action.type) {
    case DETAIL_BRANCH_BARBER:
      return {
        ...state,
        loading: true,
      };

    case DETAIL_BRANCH_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DETAIL_BRANCH_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
