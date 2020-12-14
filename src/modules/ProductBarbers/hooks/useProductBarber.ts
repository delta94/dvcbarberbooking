import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductBarber } from '../redux/actions/list-product-barber';

export default function useBookings() {
  const { loading, items } = useSelector((state: RootState) => state.productBarber.listProductBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductBarber());
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
