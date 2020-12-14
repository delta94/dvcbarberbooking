import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBooking } from '../redux/actions/list-booking';

export default function useBookings() {
  const { loading, items } = useSelector((state: RootState) => state.booking.listBooking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBooking());
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
