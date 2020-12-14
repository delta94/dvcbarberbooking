import { all, take } from 'redux-saga/effects';
import authSaga from '@modules/Auth/redux/sagas';
import * as commonSaga from './common-saga';
import { APP_STARTED } from './actions';
import bookingSagas from '@modules/Booking/redux/sagas';
import CategoryBarberSagas from '@modules/CategoryBarbers/redux/sagas';
import ProductBarberSagas from '@modules/ProductBarbers/redux/sagas';
import cityBarberSagas from '@modules/CityBarbers/redux/sagas';
import User from '@modules/User/redux/sagas';
import Branch from '@modules/BranchBarber/redux/sagas';
import Bill from '@modules/BillBarbers/redux/sagas';
import staff from '@modules/StaffBarbers/redux/sagas';

export default function* rootSaga() {
  yield take(APP_STARTED);
  yield all([
    authSaga(),
    User(),
    bookingSagas(),
    CategoryBarberSagas(),
    ProductBarberSagas(),
    cityBarberSagas(),
    Branch(),
    Bill(),
    staff(),
    commonSaga.checkErrorAsync(),
    // for-generator - don't remove this comment
  ]);
}
