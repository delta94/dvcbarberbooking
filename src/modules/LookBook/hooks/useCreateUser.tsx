import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../redux/action-types';
import { createUser } from '../redux/actions/create';

export default function useCreateSupplier() {
  const { loading } = useSelector((state: RootState) => state.user.createUser);
  const dispatch = useDispatch();

  function submit(data: User) {
    dispatch(createUser(data));
  }

  return {
    loading,
    submit,
  };
}
