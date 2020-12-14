import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListStaffBarber } from '../redux/actions/list-staff';

export default function useStaffBarber() {
  const { loading, items } = useSelector((state: RootState) => state.staffBarber.listStaffBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListStaffBarber());
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
