import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking } from '../redux/actions/delete-booking';

export default function useDeleteBooking(id: string, idCol: string) {
  const loading = useSelector(
    (state: RootState) => !!state.booking.listBooking.deletingItems.find((t: any) => t === id),
  );
  const dispatch = useDispatch();

  function submit() {
    dispatch(deleteBooking(id, idCol));
  }

  return {
    loading,
    submit,
  };
}
