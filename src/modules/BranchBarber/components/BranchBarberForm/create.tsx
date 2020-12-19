import { branchFields } from '@modules/BranchBarber/redux/action-types/list';
import { Button, Col, Form, Row, Space, Input, Select } from 'antd';
import { FormItemProps, FormProps } from 'antd/es/form';
import useCityBarber from '@modules/CityBarbers/hooks/useCityBarbers';
import { CityFields } from '@modules/CityBarbers/redux/action-types';
import React from 'react';

const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};

const tailLayout: FormItemProps = {};

interface IProp {
  loading: boolean;
  item?: branchFields;
  onSave?(item: branchFields): void;
  onCancel?(): void;
}

const { Option } = Select;

export default function BranchBarberForm(props: IProp) {
  const { items: city } = useCityBarber();
  const onFinish = (values: branchFields) => {
    props.onSave && props.onSave({ ...values });
  };

  return (
    <>
      <Form {...layout} onFinish={onFinish} name="basic">
        <Row>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item
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
                  label="Tên chi nhánh"
                  name="name"
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
                  label="Địa chỉ"
                  name="address"
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
                  label="Số điện thoại"
                  name="phone"
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
                  label="Website"
                  name="website"
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
                  label="Giờ mở cửa"
                  name="openHours"
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
                  label="Thành phố"
                  name="idCity"
                  {...tailLayout}
                >
                  <Select showSearch filterOption={false} style={{ width: '100%' }}>
                    {city.map((p: CityFields) => (
                      <Option key={p.id} value={p.id}>
                        {p.name}
                      </Option>
                    ))}
                  </Select>
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
                <Button onClick={props.onCancel} type="ghost">
                  Hủy
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
