import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { CityFields } from '../redux/action-types';
import { CreateCityBarber } from '../redux/actions/create';

export default function useCreateCityBarber() {
  const { loading } = useSelector((state: RootState) => state.cityBarber.createCityBarber);
  const dispatch = useDispatch();

  function submit(data: CityFields) {
    dispatch(CreateCityBarber(data));
  }

  return {
    loading,
    submit,
  };
}
