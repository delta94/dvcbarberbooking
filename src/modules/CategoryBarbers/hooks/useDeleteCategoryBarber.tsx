import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoryBarber } from '../redux/actions/delete';

export default function useDeleteCategoryBarber(id: string) {
  const loading = useSelector(
    (state: RootState) => !!state.categoryBarber.listCategoryBarber.deletingItems.find((t: any) => t === id),
  );
  const dispatch = useDispatch();

  function submit() {
    dispatch(deleteCategoryBarber(id));
  }

  return {
    loading,
    submit,
  };
}
