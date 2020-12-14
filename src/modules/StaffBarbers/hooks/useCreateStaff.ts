import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { StaffFields } from '../redux/action-types';
import { CreateStaffBarber } from '../redux/actions/create';

export default function useCreateStaff() {
  const { loading, items } = useSelector((state: RootState) => state.staffBarber.createStaffBarber);
  const dispatch = useDispatch();

  function submit(data: StaffFields) {
    dispatch(CreateStaffBarber(data));
  }

  return {
    loading,
    items,
    submit,
  };
}
