import {
  __action__(pascalCase)__model__(pascalCase)ActionTypes,
  __action__(constantCase)___model__(constantCase),
  __action__(constantCase)___model__(constantCase)_ERROR,
  __action__(constantCase)___model__(constantCase)_SUCCESS,
  __action__(constantCase)___model__(constantCase)_RESET,
} from '../action-types';

export interface __action__(pascalCase)__model__(pascalCase)State {
  loading: boolean;
  data?: any; //todo:
}

const initialState = {
  loading: false,
};

export default function __action__(camelCase)__model__(pascalCase)(state = initialState, action: __action__(pascalCase)__model__(pascalCase)ActionTypes): __action__(pascalCase)__model__(pascalCase)State {
  switch (action.type) {
    case __action__(constantCase)___model__(constantCase)_RESET:
      return initialState;
    
    case __action__(constantCase)___model__(constantCase):
      return {
        ...state,
        loading: true,
      };

    case __action__(constantCase)___model__(constantCase)_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case __action__(constantCase)___model__(constantCase)_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
