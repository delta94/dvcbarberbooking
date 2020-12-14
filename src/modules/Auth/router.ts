import LoginPage from '@modules/Auth/pages/Login';
import { CommonPath } from '@commons/base-routes';

export const AuthRouter = {
  path: CommonPath.LOGIN_PATH,
  exact: true,
  component: LoginPage,
};
