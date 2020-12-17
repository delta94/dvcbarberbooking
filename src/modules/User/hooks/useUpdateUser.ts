import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../redux/action-types';
import { updateUser } from '../redux/actions/update';

export default function useUpdateUser() {
  const { loading, items } = useSelector((state: RootState) => state.user.updateUser);
  const dispatch = useDispatch();

  function submit(data: User) {
    dispatch(updateUser(data));
  }

  return {
    loading,
    items,
    submit,
  };
}
