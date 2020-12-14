import { isJsonString } from './string';
import { UserInfo } from '@modules/Auth/redux/action-types';
import env from '@/env';
import moment from 'moment';

// let TOKEN: any = '';
// const TOKEN_KEY = env.tokenKey;

// // export const setAuthData = (authData: UserInfo) => {
// //   localStorage.setItem(TOKEN_KEY, JSON.stringify(authData || {}));
// //   TOKEN = authData.token;
// // };

// export const getAuthLocalData = () => {
//   const authData = parseTokenString(localStorage.getItem(TOKEN_KEY) || '');
//   if (!tokenChecker(authData)) {
//     localStorage.removeItem(TOKEN_KEY);
//     return null;
//   }
//   return authData;
// };

// export const getToken = () => {
//   return TOKEN;
// };

// export const parseTokenString = (str: string) => {
//   if (isJsonString(str)) {
//     const authObject: UserInfo = JSON.parse(str);
//     return authObject;
//   }
//   return null;
// };

// export const tokenChecker = (authData: UserInfo | null) => {
//   if (!authData || !authData.token || authData.expiresAt < moment().unix()) return false;
//   return true;
// };
