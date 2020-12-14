import styled from 'styled-components';
import src1 from '@assets/images/login-background-1.jpg';
import src2 from '@assets/images/login-background-2.jpg';
import src3 from '@assets/images/login-background-3.jpg';
import src4 from '@assets/images/login-background-4.jpg';
import src5 from '@assets/images/login-background-5.jpg';
import src6 from '@assets/images/login-background-6.jpg';

const LoginFormStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-height: 100vh;
    background-image: url(${[src1, src2, src3, src4, src5, src6][Math.floor(Math.random() * 6)]});
    background-size: cover;
    background-position: center;
    background-color: #f3f3f3;
    .login-content {
      position: relative;
      background-color: #fff;
      padding: 2rem;
      min-width: 300px;
      max-width: 550px;
      width: 100%;
      height: 100vh;
      box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
        0 12px 48px 16px rgba(0, 0, 0, 0.03);
    }
    .logo {
      margin-bottom: 2rem;
      text-align: center;
      img {
        max-width: 150px;
      }
    }
    .login-form-forgot {
      // float: right;
    }
    .ant-col-rtl .login-form-forgot {
      float: left;
    }
    .login-form-submit {
      text-align: center;
      margin-bottom: 0.5rem;
    }
    .login-form-button {
      width: 100%;
    }
  `,
};
export default LoginFormStyled;
