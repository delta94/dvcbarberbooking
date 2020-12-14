import { protectedComponent } from '@hoc/protectedComponent';
import ListBookingPage from '@modules/Booking/pages/List';

export const BookingListRouter = {
  path: '/booking',
  exact: true,
  component: protectedComponent(ListBookingPage),
};
