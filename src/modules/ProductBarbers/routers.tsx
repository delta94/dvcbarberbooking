import { protectedComponent } from '@hoc/protectedComponent';
import ListProductBarberPage from '@modules/ProductBarbers/pages/List/index';
import NewProductBarberPage from '@modules/ProductBarbers/pages/New/index';
import DetailProductBarberPage from '@modules/ProductBarbers/pages/Detail';

export const ProductsBarberListRouter = {
  path: '/productsBarber',
  exact: true,
  component: protectedComponent(ListProductBarberPage),
};

export const ProductsBarberNewRouter = {
  path: '/productsBarber/new',
  exact: true,
  component: protectedComponent(NewProductBarberPage),
};

export const ProductsBarberDetailRouter = {
  path: '/productsBarber/:id/:idCol',
  exact: true,
  component: protectedComponent(DetailProductBarberPage),
};
