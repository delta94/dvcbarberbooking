import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCityBarber } from '../redux/actions/delete';

export default function useDeleteCategoryBarber(id: string) {
  const loading = useSelector(
    (state: RootState) => !!state.cityBarber.listCityBarber.deletingItems.find((t: any) => t === id),
  );
  const dispatch = useDispatch();

  function submit() {
    dispatch(DeleteCityBarber(id));
  }

  return {
    loading,
    submit,
  };
}
