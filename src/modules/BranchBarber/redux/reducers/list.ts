import {
  LIST_BRANCH_BARBER,
  LIST_BRANCH_BARBER_ERROR,
  LIST_BRANCH_BARBER_SUCCESS,
  ListBranchBarberActionTypes,
  branchFields,
  LIST_BRANCH_BARBER_BY_CITY,
  LIST_BRANCH_BARBER_BY_CITY_SUCCESS,
  LIST_BRANCH_BARBER_BY_CITY_ERROR,
} from '../action-types/list';

export interface ListBranchBarberState {
  loading: boolean;
  items: branchFields[];
  itemsBranchByCity: branchFields[];
  deletingItems: string[];
}

const initialState: ListBranchBarberState = {
  loading: true,
  items: [],
  deletingItems: [],
  itemsBranchByCity: [],
};

export default function ListBranch(state = initialState, action: ListBranchBarberActionTypes): ListBranchBarberState {
  switch (action.type) {
    case LIST_BRANCH_BARBER:
      return {
        ...state,
        loading: true,
      };

    case LIST_BRANCH_BARBER_BY_CITY:
      return {
        ...state,
        loading: true,
      };

    case LIST_BRANCH_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
      };

    case LIST_BRANCH_BARBER_BY_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        itemsBranchByCity: action.payload || [],
      };

    case LIST_BRANCH_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    case LIST_BRANCH_BARBER_BY_CITY_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
