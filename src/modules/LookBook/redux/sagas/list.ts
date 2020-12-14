import firebase from '@modules/firebaseConnect/firebaseConnect';
import { call, put } from 'redux-saga/effects';
import { ListUsersAction, User } from '../action-types';
import { listUsersError, listUsersSuccess } from '../actions/list-users';

const getDataFromFirebase = async () => {
  const data = Array<User>();
  await firebase
    .firestore()
    .collection('User')
    .get()
    .then((snap) => {
      snap.forEach((doc: any) => {
        data.push({
          id: doc.id,
          name: doc.data().name,
          phoneNumber: doc.data()?.phoneNumber,
          address: doc.data()?.address,
        });
      });
    });
  return data;
};

export function* listUsersSaga(action: ListUsersAction) {
  try {
    const data: User[] = yield call(getDataFromFirebase);
    yield put(listUsersSuccess(data));
  } catch (error) {
    yield put(listUsersError(error));
  }
}
