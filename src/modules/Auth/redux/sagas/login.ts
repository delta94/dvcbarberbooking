import { LoginAction, LoginActionSuccess } from '../action-types';
import { put } from 'redux-saga/effects';
import { loginError, loginSuccess } from '../actions';
// import { getAuthLocalData, setAuthData } from '@/helpers/token';
import { getHistory, getRedirectUrl } from '@/helpers/history';
import { NotificationSuccess } from '@commons/components/Notification';
import { CommonPath } from '@commons/base-routes';
import firebase from '../../../firebaseConnect/firebaseConnect';
import { UserInfo } from '@modules/Auth/redux/action-types/login';

const LoginFirebase = async (email: string, password: string) => {
  const UserInfo: UserInfo = {
    payload: { displayName: '' },
    uid: '',
    isAutoLogin: false,
    redirectUrl: '',
    isLogin: false,
  };
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((doc) => {
      UserInfo.payload.displayName = doc.user?.email;
      UserInfo.uid = doc.user!.uid;
      UserInfo.isLogin = true;
    });
  if (UserInfo.isLogin === true) {
    return UserInfo;
  }
};

export function* loginAsync(action: LoginAction) {
  try {
    const payload: any = yield LoginFirebase(action.payload.username, action.payload.password);
    yield put(loginSuccess(payload));
    NotificationSuccess('Thông báo', 'Đăng nhập thành công');
  } catch (error) {
    yield put(loginError(error));
  }
}

export function loginSuccessAsync(action: LoginActionSuccess) {
  const data = action.payload;

  if (!data?.isAutoLogin) {
    NotificationSuccess('Thông báo', 'Đăng nhập thành công');
  }

  const redirectUrl = getRedirectUrl();
  if (redirectUrl) {
    const rUrl = new URL(redirectUrl);
    const cOrigin = window.location.origin;
    if (cOrigin === rUrl.origin) {
      const newPath = rUrl.pathname + rUrl.search;
      if (newPath.indexOf(CommonPath.LOGIN_PATH) === 0) {
        getHistory().replace(CommonPath.DEFAULT_PATH);
      } else {
        getHistory().replace(newPath);
      }
    } else {
      window.location.href = redirectUrl;
    }
  } else getHistory().push(CommonPath.DEFAULT_PATH);
}

// export function* autoLoginFlow() {
//   while (1) {
//     const userInfo =  ;
//     if (userInfo) {
//       userInfo.isAutoLogin = true;
//       yield put(loginSuccess(userInfo));
//     }
//     yield take(LOGOUT);
//   }
// }
