import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesFields } from '../redux/action-types';
import { createCategoryBarber } from '../redux/actions/create';

export default function useCreateCategoryBarber() {
  const { loading } = useSelector((state: RootState) => state.categoryBarber.createCategoryBarber);
  const dispatch = useDispatch();

  function submit(data: CategoriesFields) {
    dispatch(createCategoryBarber(data));
  }

  return {
    loading,
    submit,
  };
}
