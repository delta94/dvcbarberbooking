import useBillBarber from '@modules/BillBarbers/hooks/useBillBarber';
import { getListBookingFromFirebase } from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { BookingFields, ListBookingAction } from '../action-types';
import { listBookingError, listBookingSuccess } from '../actions/list-booking';

export function* listBookingSaga(action: ListBookingAction) {
  try {
    const booking: BookingFields[] = yield call(getListBookingFromFirebase, action.year);
    console.log('bôking', booking);
    const arr = yield [
      {
        day: 'Tháng 1',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '01';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '01';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '01';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 2',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '02';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '02';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '02';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 3',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '03';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '03';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '03';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 4',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '04';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return Number(
                  2 +
                    total.cartItemList
                      .map((cit) => {
                        return Number(cit.productPrice * cit.productQuantity);
                      })
                      .reduce((a, b) => a + b, 0),
                );
              } else {
                return 2;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '04';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '04';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 5',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '05';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '05';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '05';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 6',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '06';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '06';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '06';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 7',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '07';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),

        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '07';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '07';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 8',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '08';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '08';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '08';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 9',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '09';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return (
                  2 +
                  total.cartItemList
                    .map((cit) => {
                      return Number(cit.productPrice * cit.productQuantity);
                    })
                    .reduce((a, b) => a + b, 0)
                );
              } else {
                return 0;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '09';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '09';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 10',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '10';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return Number(
                  2 +
                    total.cartItemList
                      .map((cit) => {
                        return Number(cit.productPrice * cit.productQuantity);
                      })
                      .reduce((a, b) => a + b, 0),
                );
              } else {
                return 2;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '10';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '10';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 11',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '11';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return Number(
                  2 +
                    total.cartItemList
                      .map((cit) => {
                        return Number(cit.productPrice * cit.productQuantity);
                      })
                      .reduce((a, b) => a + b, 0),
                );
              } else {
                return 2;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '11';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '11';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
      {
        day: 'Tháng 12',
        total:
          undefined ||
          booking
            .filter((bk) => {
              return bk.time.slice(3, 5) === '12';
            })
            .map((total) => {
              if (total && total.cartItemList.length > 0) {
                return Number(
                  2 +
                    total.cartItemList
                      .map((cit) => {
                        return Number(cit.productPrice * cit.productQuantity);
                      })
                      .reduce((a, b) => a + b, 0),
                );
              } else {
                return 2;
              }
            })
            .reduce((a, b) => a + b, 0),
        booking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === true && bk.time.slice(3, 5) === '12';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
        unBooking:
          undefined ||
          booking
            .filter((bk) => {
              return bk.done === false && bk.time.slice(3, 5) === '12';
            })
            .map(() => {
              return 1;
            })
            .reduce((a, b) => a + b, 0),
      },
    ];
    yield put(listBookingSuccess(booking, arr));
  } catch (error) {
    yield put(listBookingError(error));
  }
}
