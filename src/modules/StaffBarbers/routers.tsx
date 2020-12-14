import { protectedComponent } from '@hoc/protectedComponent';
import ListStaffBarberPage from '@modules/StaffBarbers/pages/List';
import NewStaffBarberPage from '@modules/StaffBarbers/pages/new';
import DetailStaffBarberPage from '@modules/StaffBarbers/pages/detail';

export const StaffBarberListRouter = {
  path: '/staff',
  exact: true,
  component: protectedComponent(ListStaffBarberPage),
};

export const StaffBarberNewRouter = {
  path: '/staff/new',
  exact: true,
  component: protectedComponent(NewStaffBarberPage),
};

export const StaffBarberDetailRouter = {
  path: '/staff/:id/:idCity/:idBranch',
  exact: true,
  component: protectedComponent(DetailStaffBarberPage),
};
