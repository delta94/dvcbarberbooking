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
          <Col span={10}>
            <Col>
              <Form.Item
                label="Tên sản phẩm"
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
                <Input style={{ width: '80%' }} />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Giá ($)"
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
                <Input style={{ width: '80%' }} type="number" />
              </Form.Item>
            </Col>
            <Col>
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
                <Select style={{ width: '80%' }} showSearch filterOption={false}>
                  {items.map((p: any) => {
                    return (
                      <Option key={p.id} value={p.id}>
                        {p.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Row>
                <Col style={{ textAlign: 'center' }}>
                  <Form.Item {...tailLayout}>
                    <Space>
                      <Button loading={loading} type="primary" htmlType="submit">
                        Lưu
                      </Button>
                      <Button type="ghost">Hủy</Button>
                    </Space>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col span={14}>
            <Form.Item style={{ width: '60%', marginTop: 22 }} label="" name="image" {...tailLayout}>
              <UploadDragger name={add.toString()} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
