// import { getAllProductApi } from '@modules/Product/service/apis';
import { call, put } from 'redux-saga/effects';
import { GetUserAction } from '../action-types/detail';
import { getUserSuccess, getuserError } from '../actions/detail';
import firebase from '@modules/firebaseConnect/firebaseConnect';
import { User } from '../action-types';

const getDetailUserFromFirebase = async (id: string) => {
  const user: User = { id: ' doc.id', name: 'doc.data()?.name', phoneNumber: '', address: 'adad' };
  await firebase
    .firestore()
    .collection('User')
    .doc(id)
    .get()
    .then((doc) => {
      user.id = doc.id;
      user.phoneNumber = doc.data()?.phoneNumber;
      user.name = doc.data()?.name;
      user.name = doc.data()?.address;
    })
    .catch((err) => {
      console.log(err);
    });
  return user;
};

export function* getUserSaga(action: GetUserAction) {
  try {
    const data: any = yield call(getDetailUserFromFirebase, action.payload);
    yield put(getUserSuccess(data || undefined));
  } catch (error) {
    yield put(getuserError(error));
  }
}
