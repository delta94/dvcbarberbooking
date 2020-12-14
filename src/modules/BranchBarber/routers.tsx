import { protectedComponent } from '@hoc/protectedComponent';
import ListBranchBarberPage from '@modules/BranchBarber/pages/List';
import NewBranchBarberPage from '@modules/BranchBarber/pages/New';

export const BranchBarberListRouter = {
  path: '/branchBarber',
  exact: true,
  component: protectedComponent(ListBranchBarberPage),
};

export const BranchBarberNewRouter = {
  path: '/branchBarber/new',
  exact: true,
  component: protectedComponent(NewBranchBarberPage),
};
