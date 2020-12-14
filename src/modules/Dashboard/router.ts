import DashboardIndex from '@modules/Dashboard/pages';
import { protectedComponent } from '@hoc/protectedComponent';

export const DashboardRouter = {
  path: '/',
  exact: true,
  component: protectedComponent(DashboardIndex),
};
