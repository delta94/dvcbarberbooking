import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailStaffBarber } from '../redux/actions/detail';

export default function useStaff(id: string, idCity: string, idBranch: string) {
  const { loading, items } = useSelector((state: RootState) => state.staffBarber.detailStaffBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DetailStaffBarber(id, idCity, idBranch));
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
