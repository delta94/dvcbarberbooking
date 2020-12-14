import { protectedComponent } from '@hoc/protectedComponent';
import ListBillBarberPage from '@modules/BillBarbers/pages/List';

export const BillBarberListRouter = {
  path: '/bill',
  exact: true,
  component: protectedComponent(ListBillBarberPage),
};
