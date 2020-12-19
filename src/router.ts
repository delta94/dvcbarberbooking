import EmptyLayout from '@commons/components/layouts/Empty';
import { RouteConfig } from 'react-router-config';
import { AuthRouter } from '@modules/Auth/router';
import { DashboardRouter } from '@modules/Dashboard/router';
import MasterLayout from '@commons/components/layouts/MasterLayout';
import { UserListRouter, UserDetailRouter, UserNewlRouter } from '@modules/User/routers';
import { BookingListRouter } from '@modules/Booking/routers';
import { CategoryBarberListRouter, CategoryBarberNewRouter } from '@modules/CategoryBarbers/routers';
import {
  ProductsBarberListRouter,
  ProductsBarberNewRouter,
  ProductsBarberDetailRouter,
} from '@modules/ProductBarbers/routers';
import { CityBarberListRouter, CityBarberNewRouter, CityBarberDetailsRouter } from '@modules/CityBarbers/routers';
import { BranchBarberListRouter, BranchBarberNewRouter } from '@modules/BranchBarber/routers';
import { BillBarberListRouter } from '@modules/BillBarbers/routers';
import { StaffBarberListRouter, StaffBarberNewRouter, StaffBarberDetailRouter } from '@modules/StaffBarbers/routers';
import { StatisticalRouter } from '@modules/Statistical/routers';

const routes: RouteConfig[] = [
  {
    component: EmptyLayout,
    routes: [
      AuthRouter,
      {
        component: MasterLayout,
        path: '/',
        routes: [
          DashboardRouter,

          UserNewlRouter,
          UserListRouter,
          UserDetailRouter,

          BookingListRouter,

          CategoryBarberNewRouter,
          CategoryBarberListRouter,

          ProductsBarberNewRouter,
          ProductsBarberListRouter,
          ProductsBarberDetailRouter,

          CityBarberNewRouter,
          CityBarberListRouter,
          CityBarberDetailsRouter,

          BranchBarberNewRouter,
          BranchBarberListRouter,

          BillBarberListRouter,

          StaffBarberNewRouter,
          StaffBarberListRouter,
          StaffBarberDetailRouter,
          StatisticalRouter,
        ],
      },
    ],
  },
];

export default routes;
