import { protectedComponent } from '@hoc/protectedComponent';
import StatisticalPage from '@modules/Statistical/pages/List';

export const StatisticalRouter = {
  path: '/statistical',
  exact: true,
  component: protectedComponent(StatisticalPage),
};
