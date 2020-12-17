import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { ProductBarberFields } from '../redux/action-types';
import { createProductBarber } from '../redux/actions/create';

export default function useCreateCityBarber() {
  const { loading } = useSelector((state: RootState) => state.cityBarber.createCityBarber);
  const dispatch = useDispatch();

  function submit(data: ProductBarberFields) {
    dispatch(createProductBarber(data));
  }

  return {
    loading,
    submit,
  };
}
