import { RootState } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListBranchBarber } from '../redux/actions/list-branch';

export default function useBranchBarber() {
  const { loading, items } = useSelector((state: RootState) => state.branchBarber.listBranchBarber);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListBranchBarber());
  }, [dispatch]);

  return {
    loading,
    items,
  };
}
