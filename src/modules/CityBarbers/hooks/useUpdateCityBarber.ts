import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { CityFields } from '../redux/action-types';
import { UpdateCityBarber } from '../redux/actions/update';

export default function useUpdateCity() {
  const { loading } = useSelector((state: RootState) => state.cityBarber.updateCityBarber);
  const dispatch = useDispatch();

  function submit(data: CityFields) {
    dispatch(UpdateCityBarber(data));
  }

  return {
    loading,
    submit,
  };
}
