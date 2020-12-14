import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@redux/reducers';
import { login } from '@modules/Auth/redux/actions';
import { useCallback } from 'react';

const useLogin = () => {
  const loading = useSelector<RootState>((state) => state.auth.loginState.loading) as boolean;
  const dispatch = useDispatch();

  const onLogin = useCallback((username: string, password: string) => {
    dispatch(login({ username, password }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    onLogin,
    loading,
  };
};

export default useLogin;
