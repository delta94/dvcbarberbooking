import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { DetailBranchBarber } from '../redux/actions/detail';

export default function useDetailBranchBarber() {
  const { loading, data } = useSelector((state: RootState) => state.branchBarber.detailBranchBarber);
  const dispatch = useDispatch();

  function submit(id: string, idCity: string) {
    dispatch(DetailBranchBarber(id, idCity));
  }

  return {
    loading,
    data,
    submit,
  };
}
