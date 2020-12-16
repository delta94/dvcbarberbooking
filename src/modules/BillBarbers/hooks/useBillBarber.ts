import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListBillBarber } from '../redux/actions/list-bill';

export default function useBillBarber(from?: string, to?: string) {
  const { loading, items } = useSelector((state: RootState) => state.billBarber.listBillBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListBillBarber());
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
