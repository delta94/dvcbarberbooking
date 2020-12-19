import { getDetailsBooking } from '@modules/Booking/redux/actions/detail';
import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailProduct } from '../redux/actions/details';

export default function useDetailCityBarber(id: string, idCol: string) {
  const { loading, data } = useSelector((state: RootState) => state.productBarber.detailProductBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DetailProduct(id, idCol));
  }, [dispatch]);

  return {
    loading,
    data,
  };
}
