import { RetweetOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { FormProps } from 'antd/es/form';
import React, { FC } from 'react';
const layout: FormProps = {
  layout: 'vertical',
};

const FilterLawyerForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {};

  return (
    <Form form={form} style={{ marginLeft: 32, marginTop: 12, marginRight: 32 }} {...layout} onFinish={onFinish}>
      <Row>
        <Space size="middle">
          <Col>
            <Form.Item name="query" label={<span style={{ fontWeight: 'bold' }}>Tìm kiếm</span>}>
              <Input type="text" value="Nhập thông tin tìm kiếm" placeholder="Nhập thông tin tìm kiếm" />
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
export default FilterLawyerForm;
