import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteStaffBarber } from '../redux/actions/delete';

export default function useDeleteStaff() {
  const { loading } = useSelector((state: RootState) => state.staffBarber.deleteStaffBarber);
  const dispatch = useDispatch();

  function submit(id: string, idCity: string, idBranch: string) {
    dispatch(DeleteStaffBarber(id, idCity, idBranch));
  }

  return {
    loading,
    submit,
  };
}
