import React, { useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormProps } from 'antd/es/form';
import LoginFormStyled from '@modules/Auth/pages/Login/styled/LoginForm';
import logo from '@assets/images/logo-barbers.jpg';
import env from '@/env';

interface Props extends FormProps {
  onLogin(username: string, password: string): void;
  loading: boolean;
}

const LoginForm = (props: Props) => {
  const onFinish = (values: any) => {
    props.onLogin(values.username, values.password);
  };

  const devAccount = useMemo(() => {
    if (env.isDevMode) {
      return {
        email: env.demoAccountEmail,
        password: env.demoAccountPassword,
      };
    }
    return {
      email: '',
      password: '',
    };
  }, []);

  return (
    <LoginFormStyled.Container>
      <div className="login-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Form
          layout="vertical"
          name="login-form mt-auto"
          className="login-form"
          initialValues={{ remember: true, username: devAccount.email, password: devAccount.password }}
          onFinish={onFinish}
        >
          <Form.Item name="username" label="Email" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input
              size="large"
              autoComplete="new-password"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              size="large"
              autoComplete="new-password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item className="login-form-submit">
            <Button size="large" type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
        </Form>
      </div>
    </LoginFormStyled.Container>
  );
};

export default LoginForm;
