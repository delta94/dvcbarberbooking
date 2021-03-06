import { protectedComponent } from '@hoc/protectedComponent';
import ListUserPage from '@modules/User/pages/List';
import DetailUserPage from './pages/Detail';
import NewUserPage from '@modules/User/pages/new';
import BookingPage from './pages/booking';

export const UserListRouter = {
  path: '/users',
  exact: true,
  component: protectedComponent(ListUserPage),
};

export const UserDetailRouter = {
  path: '/users/:id',
  exact: true,
  component: protectedComponent(DetailUserPage),
};
export const UserNewlRouter = {
  path: '/users/new',
  exact: true,
  component: protectedComponent(NewUserPage),
};
export const UserBookinglRouter = {
  path: '/users/booking',
  exact: true,
  component: protectedComponent(BookingPage),
};
