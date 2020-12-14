import {
  LIST_STAFF_BARBER,
  LIST_STAFF_BARBER_ERROR,
  LIST_STAFF_BARBER_FILTER,
  LIST_STAFF_BARBER_FILTER_OUT,
  LIST_STAFF_BARBER_SUCCESS,
  ListStaffBarberActionTypes,
  StaffFields,
} from '../action-types/list';

export interface ListStaffBarberState {
  loading: boolean;
  items: StaffFields[];
  itemsFilter: StaffFields[];
  deletingItems: string[];
}

const initialState: ListStaffBarberState = {
  loading: true,
  items: [],
  itemsFilter: [],
  deletingItems: [],
};

export default function ListStaff(state = initialState, action: ListStaffBarberActionTypes): ListStaffBarberState {
  switch (action.type) {
    case LIST_STAFF_BARBER:
      return {
        ...state,
        loading: true,
      };

    case LIST_STAFF_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
        itemsFilter: action.payload || [],
      };
    case LIST_STAFF_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    case LIST_STAFF_BARBER_FILTER:
      const filter = state.itemsFilter.filter((items) =>
        items.name?.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        items: [...filter],
      };

    case LIST_STAFF_BARBER_FILTER_OUT:
      return {
        ...state,
        items: [...state.itemsFilter],
      };

    default:
      return state;
  }
}
