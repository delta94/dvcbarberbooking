import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailCityBarber } from '../redux/actions/detail';

export default function useCityBarber(id: string) {
  const { loading, data } = useSelector((state: RootState) => state.cityBarber.detailCityBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DetailCityBarber(id));
  }, [dispatch]);

  return {
    loading,
    data,
  };
}
