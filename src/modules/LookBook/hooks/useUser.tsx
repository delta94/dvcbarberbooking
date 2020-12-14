import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions/detail';

export default function useProduct(id: string) {
  const { loading, data } = useSelector((state: RootState) => state.user.detailUser);
  const dispatch = useDispatch();
  console.log('Dataaaaaaaaaaa', data);
  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  return {
    loading,
    data,
  };
}
