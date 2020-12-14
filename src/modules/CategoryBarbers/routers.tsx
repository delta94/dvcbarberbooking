import { protectedComponent } from '@hoc/protectedComponent';
import ListCategoryBarberPage from '@modules/CategoryBarbers/pages/List';
import NewCategoryBarberPage from '@modules/CategoryBarbers/pages/New';

export const CategoryBarberListRouter = {
  path: '/categoryBarber',
  exact: true,
  component: protectedComponent(ListCategoryBarberPage),
};

export const CategoryBarberNewRouter = {
  path: '/categoryBarber/new',
  exact: true,
  component: protectedComponent(NewCategoryBarberPage),
};
