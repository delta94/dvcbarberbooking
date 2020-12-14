import React, { useCallback, useState } from 'react';
import { Popover, Typography } from 'antd';
import { DownCircleOutlined, UpCircleOutlined, UserOutlined } from '@ant-design/icons';
import { LoginState } from '@modules/Auth/redux/action-types';
import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@modules/Auth/redux/actions/logout';
const { Link, Text } = Typography;

export default function LoggedInUser() {
  const loginState = useSelector<RootState, LoginState>((state) => state.auth.loginState);
  const [popOverVisible, setPopOverVisible] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const onVisibleChange = (visible: any) => {
    setPopOverVisible(visible);
  };

  const content = (
    <ul className="header-dropdown mb-0">
      <li onClick={() => {}} className="nav-link">
        <Link>
          <Text type="secondary">{'Hồ sơ'}</Text>
        </Link>
      </li>
      <li onClick={() => {}} className="nav-link">
        <Link>
          <Text type="secondary">{'Đổi mật khẩu'}</Text>
        </Link>
      </li>
      <li onClick={handleLogout} className="nav-link border-top">
        <Link>
          <Text type="secondary">{'Đăng xuất'}</Text>
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      <Popover
        content={content}
        title=""
        trigger="click"
        placement="bottomRight"
        visible={popOverVisible}
        onVisibleChange={onVisibleChange}
        className="px-0 userInfo"
      >
        <div style={{ cursor: 'pointer' }}>
          <UserOutlined className="mr-2" />
          <span className="mr-2 font-weight-bold">{`${loginState.userInfo?.payload?.displayName}`}</span>
          {!popOverVisible ? <DownCircleOutlined /> : <UpCircleOutlined />}
        </div>
      </Popover>
    </>
  );
}
