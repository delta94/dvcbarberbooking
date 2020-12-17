import useCategoryBarbers from '@modules/CategoryBarbers/hooks/useCategoryBarbers';
import UploadDragger from '@modules/Media/containers/UploadDragger';
import useCreateProductBarber from '@modules/ProductBarbers/hooks/useCreateProductBarber';
import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import { FormItemProps, FormProps } from 'antd/es/form';
import React from 'react';

const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};

const tailLayout: FormItemProps = {};

const { Option } = Select;

export default function ProductBarberForm() {
  const { items, loading: loadingCate } = useCategoryBarbers();
  const { loading, submit } = useCreateProductBarber();

  const onFinish = (values: any) => {
    submit({
      id: '',
      idCol: values.idCol,
      image: values.image || '',
      name: values.name || '',
      price: Number(values.price),
    });
  };

  const add = Math.random();

  return (
    <>
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Row>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Đây là trường bắt buộc',
                    },
                    {
                      whitespace: true,
                      message: 'Đây là trường bắt buộc',
                    },
                  ]}
                  {...tailLayout}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Giá"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: 'Đây là trường bắt buộc',
                    },
                    {
                      whitespace: true,
                      message: 'Đây là trường bắt buộc',
                    },
                  ]}
                  {...tailLayout}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
          </Col>{' '}
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Loại sản phẩm"
                  name="idCol"
                  rules={[
                    {
                      required: true,
                      message: 'Đây là trường bắt buộc',
                    },
                    {
                      whitespace: true,
                      message: 'Đây là trường bắt buộc',
                    },
                  ]}
                  {...tailLayout}
                >
                  <Select showSearch filterOption={false} style={{ width: '100%' }}>
                    {items.map((p: any) => {
                      return (
                        <Option key={p.id} value={p.id}>
                          {p.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="" name="image" {...tailLayout}>
                  <UploadDragger name={add.toString()} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Lưu
                </Button>
                <Button type="ghost">Hủy</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
