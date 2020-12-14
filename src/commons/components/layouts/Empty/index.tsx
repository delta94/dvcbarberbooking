import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import '@assets/styles/app.less';
import '@assets/styles/mixin.scss';
import { useHistory } from 'react-router';
import { setHistory } from '@helpers/history';
import { useDispatch } from 'react-redux';
import { appStart } from '@redux/actions';

export interface BaseLayoutProps {
  children: React.ReactNode;
}

const EmptyLayout = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setHistory(history);
    dispatch(appStart());
    // eslint-disable-next-line
  }, []);
  const { route } = props;
  return <>{renderRoutes(route.routes)}</>;
};
export default EmptyLayout;
