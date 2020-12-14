import { take } from 'redux-saga/effects';
import { NotificationError, NotificationSuccess } from '@commons/components/Notification';

export function* checkErrorAsync() {
  while (true) {
    const action: any = yield take((action: any) => /.+_ERROR/.test(action.type));
    let message = action.payload.message || 'Có lỗi xảy ra vui lòng thử lại sau';
    if (
      action.payload.response &&
      action.payload.response?.errors?.length &&
      action.payload.response?.errors[0].message.indexOf('There is no user record corresponding to this identifier')
    ) {
      console.log('ầ');
      NotificationError('Cảnh báo', 'Đăng nhập thất bại');
    } else {
      NotificationError('Cảnh báo', message);
    }
  }
}

export function* checkUpdateSuccessAsync() {
  while (true) {
    const action: any = yield take((action: any) => /.+_UPDATED_SUCCESS/.test(action.type));
    NotificationSuccess('Thông báo', action.payload.message || 'Cập nhật thành công');
  }
}
