import {
  BillFields,
  LIST_BILL_BARBER,
  LIST_BILL_BARBER_ERROR,
  LIST_BILL_BARBER_SUCCESS,
  LIST_BILL_BARBER_FILTER,
  ListBillBarberActionTypes,
  LIST_BILL_BARBER_FILTER_OUT,
} from '../action-types/list';

export interface ListBillBarberState {
  loading: boolean;
  items: BillFields[];
  itemsFilter: BillFields[];
  deletingItems: string[];
}

const initialState: ListBillBarberState = {
  loading: true,
  items: [],
  itemsFilter: [],
  deletingItems: [],
};

export default function ListBill(state = initialState, action: ListBillBarberActionTypes): ListBillBarberState {
  switch (action.type) {
    case LIST_BILL_BARBER:
      return {
        ...state,
        loading: true,
      };

    case LIST_BILL_BARBER_SUCCESS:
      console.log('payload', action.payload);
      return {
        ...state,
        loading: false,
        items: action.payload || [],
        itemsFilter: action.payload || [],
      };
    case LIST_BILL_BARBER_ERROR:
      return {
        ...state,
        loading: false,
      };

    case LIST_BILL_BARBER_FILTER:
      const filter = state.itemsFilter.filter(
        (items) =>
          items.barberName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.customerName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.customerPhone?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.salonName?.toLowerCase().includes(action.payload.toLowerCase()) ||
          items.salonAddress?.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        items: [...filter],
      };

    case LIST_BILL_BARBER_FILTER_OUT:
      return {
        ...state,
        items: [...state.itemsFilter],
      };

    default:
      return state;
  }
}
