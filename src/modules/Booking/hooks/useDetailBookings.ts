import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsBooking } from '../redux/actions/detail';

export default function useDetailBookings(id: string, idCol: string) {
  const { loading, data } = useSelector((state: RootState) => state.booking.detailBooking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsBooking(id, idCol));
  }, [dispatch]);

  return {
    loadingDetail: loading,
    data,
  };
}
