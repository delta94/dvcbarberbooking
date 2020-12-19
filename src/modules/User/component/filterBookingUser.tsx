import React, { FC } from 'react';
import { FormProps } from 'antd/es/form';
import { Button, Col, Form, Row, Space, Input } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { listBookingUsersFilter, listBookingUsersFilterOut } from '@modules/User/redux/actions/list-booking-user';
const layout: FormProps = {
  layout: 'vertical',
};

const FilterBookingUser: FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    if (values.name === '') {
      values.name = undefined;
    }
    dispatch(listBookingUsersFilter(values.name));
  };

  return (
    <Form
      form={form}
      style={{ marginLeft: 32, marginTop: 12, marginRight: 32 }}
      name="advanced_search"
      className="ant-advanced-search-form"
      {...layout}
      onFinish={onFinish}
    >
      <Row>
        <Space size="middle">
          <Col>
            <Form.Item name="name" label={<span style={{ fontWeight: 'bold' }}>Tìm kiếm</span>}>
              <Input style={{ width: 180 }} placeholder="Nhập thông tin tìm kiếm" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="   ">
              <Button htmlType="submit" type="primary">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="   ">
              <Button
                onClick={() => {
                  form.resetFields();
                  dispatch(listBookingUsersFilterOut());
                }}
              >
                <RetweetOutlined />
                Bỏ lọc
              </Button>
            </Form.Item>
          </Col>
        </Space>
      </Row>
    </Form>
  );
};

export default FilterBookingUser;
