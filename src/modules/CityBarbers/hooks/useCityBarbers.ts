import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCityBarber } from '../redux/actions/list-city';

export default function useCityBarbers() {
  const { loading, items } = useSelector((state: RootState) => state.cityBarber.listCityBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCityBarber());
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
