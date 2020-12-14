import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/actions/delete';

export default function useDeleteProduct(id: string) {
  const loading = useSelector((state: RootState) => !!state.user.listUsers.deletingItems.find((t) => t === id));
  const dispatch = useDispatch();

  function submit() {
    dispatch(deleteUser(id));
  }

  return {
    loading,
    submit,
  };
}
