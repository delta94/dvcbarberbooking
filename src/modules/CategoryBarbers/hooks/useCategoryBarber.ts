import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategoryBarber } from '../redux/actions/detail';

export default function useCategoryBarber(id: string) {
  const { loading, data } = useSelector((state: RootState) => state.categoryBarber.detailCategoryBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategoryBarber(id));
  }, [dispatch, id]);

  return {
    loading,
    data,
  };
}
