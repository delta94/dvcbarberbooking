import { protectedComponent } from '@hoc/protectedComponent';
import ListCityBarberPage from '@modules/CityBarbers/pages/List';
import NewCityBarberPage from '@modules/CityBarbers/pages/New';
import DetailCityBarberPage from '@modules/CityBarbers/pages/Details';

export const CityBarberListRouter = {
  path: '/citybarber',
  exact: true,
  component: protectedComponent(ListCityBarberPage),
};

export const CityBarberNewRouter = {
  path: '/citybarber/new',
  exact: true,
  component: protectedComponent(NewCityBarberPage),
};

export const CityBarberDetailsRouter = {
  path: '/citybarber/:id',
  exact: true,
  component: protectedComponent(DetailCityBarberPage),
};
