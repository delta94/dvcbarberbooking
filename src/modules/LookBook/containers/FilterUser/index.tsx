import React, { FC } from 'react';
import { FormProps } from 'antd/es/form';
import { Button, Col, Form, Row, Space, Input } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
const layout: FormProps = {
  layout: 'vertical',
};

const FilterUser: FC = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      style={{ marginLeft: 32, marginTop: 12, marginRight: 32 }}
      name="advanced_search"
      className="ant-advanced-search-form"
      {...layout}
      // onFinish={onFinish}
    >
      <Row>
        <Space size="middle">
          <Col>
            <Form.Item name="firstname" label={<span style={{ fontWeight: 'bold' }}>Người dùng</span>}>
              <Input type="text" placeholder="Nhập tên người dùng" />
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
                htmlType="submit"
                onClick={() => {
                  form.resetFields();
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

export default FilterUser;
