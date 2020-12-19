import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { branchFields } from '../redux/action-types';
import { UpdateBranchBarber } from '../redux/actions/update';

export default function useUpdateBranchBarber() {
  const { loading } = useSelector((state: RootState) => state.branchBarber.updateBranchBarber);
  const dispatch = useDispatch();

  function submit(data: branchFields) {
    dispatch(UpdateBranchBarber(data));
  }

  return {
    loading,
    submit,
  };
}
