import { NotificationSuccess } from '@commons/components/Notification';
import { getHistory } from '@helpers/history';
import { call, put } from 'redux-saga/effects';
import { createUserError, createUserSuccess } from '../actions/create';
import { CreateUserAction, User } from '../action-types';
import { getListUserUrl } from '@helpers/url';
import firebase from '@modules/firebaseConnect/firebaseConnect';

const createUserFirebase = async (data: User) => {
  await firebase
    .firestore()
    .collection('User')
    .doc()
    .set({
      name: data.name,
      phoneNumber: data.phoneNumber,
      address: data.address,
    })
    .catch((err) => {
      console.log(err);
    });
};

export function* createUserSaga(action: CreateUserAction) {
  try {
    yield call(createUserFirebase, action.payload);
    yield put(createUserSuccess());
    NotificationSuccess('Thông báo', 'Thêm mới nhà cung cấp thành công');
    getHistory().push(getListUserUrl());
  } catch (error) {
    yield put(createUserError(error));
  }
}
