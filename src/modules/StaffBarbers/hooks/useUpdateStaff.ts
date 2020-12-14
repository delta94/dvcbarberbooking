import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { StaffFields } from '../redux/action-types';
import { UpdateStaffBarber } from '../redux/actions/update';

export default function useUpdateStaff() {
  const { loading, items } = useSelector((state: RootState) => state.staffBarber.updateStaffBarber);
  const dispatch = useDispatch();

  function submit(data: StaffFields) {
    dispatch(UpdateStaffBarber(data));
  }

  return {
    loading,
    items,
    submit,
  };
}
