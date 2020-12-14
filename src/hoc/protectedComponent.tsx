/**
 * hoc component hỗ trợ router
 * các route khi được bọc bởi component này sẽ được kiểm tra đã đăng nhập chưa
 * nếu chưa đăng nhập sẽ đưa ra trang đăng nhập và lưu lại redirect url
 */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '@commons/components/Loading';
import { CommonPath } from '@commons/base-routes';
import { useSelector } from 'react-redux';
import { LoginState } from '@modules/Auth/redux/action-types';
import { RootState } from '@redux/reducers';
import { setRedirectUrl } from '@helpers/history';

export function protectedComponent(WrappedComponent: React.ComponentType) {
  // tslint:disable-next-line: only-arrow-functions
  return function (props: any) {
    const history = useHistory();

    const state = useSelector<RootState, LoginState>((state) => state.auth.loginState);
    const login = !!state.userInfo?.isLogin;
    const loading = state.loading;

    useEffect(() => {
      setRedirectUrl(window.location.href);
    }, []);

    useEffect(() => {
      if (!loading && !login) {
        history.push(CommonPath.LOGIN_PATH);
      }
      // eslint-disable-next-line
    }, [login, loading]);

    if (loading || !login) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };
}
