import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBookingUser } from '../redux/actions/list-booking-user';

export default function useBooking(id: string) {
  const { loading, data } = useSelector((state: RootState) => state.user.listBookingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBookingUser(id));
  }, [dispatch, id]);

  return {
    loading,
    dataBookingUser: data,
  };
}
