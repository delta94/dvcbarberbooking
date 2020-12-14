import Loading from '@commons/components/Loading';
import { setTitle } from '@helpers/dom';
import React, { useEffect } from 'react';
import useLogin from '../../hooks/useLogin';
import LoginForm from './components/Form';

function LoginPage() {
  const { loading, onLogin } = useLogin();

  useEffect(() => {
    setTitle('Đăng Nhập');
  }, []);

  return (
    <>
      <LoginForm onLogin={onLogin} loading={false} />
      {loading ? <Loading /> : null}
    </>
  );
}

export default LoginPage;
