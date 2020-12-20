import { useDispatch, useSelector } from 'react-redux';
import { DeleteBookingStaff } from '../redux/actions/delete-booking_staff';

export default function useDeleteBookingStaff(
  idCity: string,
  idBranch: string,
  idStaff: string,
  day: string,
  month: string,
  year: string,
  slot: string,
) {
  const dispatch = useDispatch();
  function submit() {
    dispatch(DeleteBookingStaff(idCity, idBranch, idStaff, day, month, year, slot));
  }

  return {
    submit,
  };
}
