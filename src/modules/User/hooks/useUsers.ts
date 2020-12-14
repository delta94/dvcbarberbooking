import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../redux/actions/list-users';

export default function useUsers() {
  const { loading, items, itemsFilter } = useSelector((state: RootState) => state.user.listUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return {
    loading,
    items,
    itemsFilter,
  };
}
