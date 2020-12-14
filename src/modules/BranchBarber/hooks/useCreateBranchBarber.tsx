import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { branchFields } from '../redux/action-types';
import { createBranchBarber } from '../redux/actions/create';

export default function useCreateBranchBarber() {
  const { loading } = useSelector((state: RootState) => state.branchBarber.createBranchBarber);
  const dispatch = useDispatch();

  function submit(data: branchFields) {
    dispatch(createBranchBarber(data));
  }

  return {
    loading,
    submit,
  };
}
