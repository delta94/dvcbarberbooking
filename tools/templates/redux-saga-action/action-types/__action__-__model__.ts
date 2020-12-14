import { __action__(pascalCase)__model__(pascalCase), __action__(pascalCase)__model__(pascalCase)Variables } from '@/graphql/generated/graphql';
import { AppError } from '@commons/types';

export const __action__(constantCase)___model__(constantCase) = '__action__(constantCase)___model__(constantCase)';
export const __action__(constantCase)___model__(constantCase)_SUCCESS = '__action__(constantCase)___model__(constantCase)_SUCCESS';
export const __action__(constantCase)___model__(constantCase)_ERROR = '__action__(constantCase)___model__(constantCase)_ERROR';
export const __action__(constantCase)___model__(constantCase)_RESET = '__action__(constantCase)___model__(constantCase)_RESET';

export interface __action__(pascalCase)__model__(pascalCase)Action {
  type: typeof __action__(constantCase)___model__(constantCase);
  payload: __action__(pascalCase)__model__(pascalCase);
}

export interface __action__(pascalCase)__model__(pascalCase)ActionSuccess {
  type: typeof __action__(constantCase)___model__(constantCase)_SUCCESS;
  payload: __action__(pascalCase)__model__(pascalCase)Variables;
}

export interface __action__(pascalCase)__model__(pascalCase)ActionError {
  type: typeof __action__(constantCase)___model__(constantCase)_ERROR;
  payload: AppError;
}

export interface __action__(pascalCase)__model__(pascalCase)ActionReset {
  type: typeof __action__(constantCase)___model__(constantCase)_RESET;
}

export type __action__(pascalCase)__model__(pascalCase)ActionTypes = __action__(pascalCase)__model__(pascalCase)Action | __action__(pascalCase)__model__(pascalCase)ActionSuccess | __action__(pascalCase)__model__(pascalCase)ActionError | __action__(pascalCase)__model__(pascalCase)ActionReset;
