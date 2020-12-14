import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { ListBranchByCity } from '../redux/actions/list-branch';

export default function useBranchByCity() {
  const { loading, itemsBranchByCity } = useSelector((state: RootState) => state.branchBarber.listBranchBarber);
  const dispatch = useDispatch();

  function submit(id: string) {
    dispatch(ListBranchByCity(id));
  }

  return {
    loading,
    submit,
    itemsBranchByCity,
  };
}
