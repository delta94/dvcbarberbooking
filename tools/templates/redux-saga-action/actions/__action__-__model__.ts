import { __action__(pascalCase)__model__(pascalCase), __action__(pascalCase)__model__(pascalCase)Variables } from '@/graphql/generated/graphql';
import { AppError } from '@commons/types';
import {
  __action__(pascalCase)__model__(pascalCase)ActionTypes,
  __action__(constantCase)___model__(constantCase),
  __action__(constantCase)___model__(constantCase)_ERROR,
  __action__(constantCase)___model__(constantCase)_SUCCESS,
} from '../action-types';

export const __action__(camelCase)__model__(pascalCase) = (payload: __action__(pascalCase)__model__(pascalCase)Variables): __action__(pascalCase)__model__(pascalCase)ActionTypes => ({
  type: __action__(constantCase)___model__(constantCase),
  payload,
});

export const __action__(camelCase)__model__(pascalCase)Error = (payload: AppError): __action__(pascalCase)__model__(pascalCase)ActionTypes => ({
  type: __action__(constantCase)___model__(constantCase)_ERROR,
  payload,
});

export const __action__(camelCase)__model__(pascalCase)Success = (payload: __action__(pascalCase)__model__(pascalCase)): __action__(pascalCase)__model__(pascalCase)ActionTypes => ({
  type: __action__(constantCase)___model__(constantCase)_SUCCESS,
  payload,
});

export const __action__(camelCase)__model__(pascalCase)Reset = (): __action__(pascalCase)__model__(pascalCase)ActionTypes => ({
  type: __action__(constantCase)___model__(constantCase)_RESET,
});
