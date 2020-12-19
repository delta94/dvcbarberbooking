import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct } from '../redux/actions/delete';

export default function useDeleteCityBarber() {
  const { loading } = useSelector((state: RootState) => state.productBarber.deleteProductBarber);
  const dispatch = useDispatch();

  function submit(id: string, idCate: string) {
    dispatch(DeleteProduct(id, idCate));
  }

  return {
    loading,
    submit,
  };
}
