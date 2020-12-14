import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategotyBarber } from '../redux/actions/list-Category';

export default function useCategoryBarber() {
  const { loading, items } = useSelector((state: RootState) => state.categoryBarber.listCategoryBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCategotyBarber());
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
