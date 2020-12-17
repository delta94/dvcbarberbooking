import useBranchByCity from '@modules/BranchBarber/hooks/useBranchByCity';
import { branchFields } from '@modules/BranchBarber/redux/action-types/list';
import useCityBarber from '@modules/CityBarbers/hooks/useCityBarbers';
import { CityFields } from '@modules/CityBarbers/redux/action-types';
import UploadDragger from '@modules/Media/containers/UploadDragger';
import { StaffFields } from '@modules/StaffBarbers/redux/action-types';
import { Button, Col, Form, Input, Row, Select, Space, Switch } from 'antd';
import { FormItemProps, FormProps } from 'antd/es/form';
import React, { useState } from 'react';

const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};

const tailLayout: FormItemProps = {};

interface IProp {
  loading: boolean;
  item?: branchFields;
  onSave?(item: StaffFields): void;
  onCancel?(): void;
}

const { Option } = Select;

export default function CreateStaffBarberForm(props: IProp) {
  const add = Math.random();
  const { items: city } = useCityBarber();
  const [statusStaff, setStatusStaff] = useState<boolean>(true);
  const { submit, itemsBranchByCity, loading } = useBranchByCity();
  const onFinish = (values: any) => {
    props.onSave &&
      props.onSave({
        id: '',
        idCity: values.idCity,
        name: values.name,
        idBranch: values.idBranch,
        password: values.password,
        username: values.username,
        rating: 0,
        ratingTimes: 0,
        status: statusStaff,
        salary: Number(values.salary),
        avatar: values.image,
      });
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
                  label="Tên nhân viên"
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
                  label="Tên tài khoản"
                  name="username"
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
                  label="Mật khẩu"
                  name="password"
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
                  label="Lương"
                  name="salary"
                  {...tailLayout}
                >
                  <Input type="number" />
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
                  <Select
                    onChange={(values) => {
                      submit(values.toString());
                      console.log(values.toString());
                    }}
                  >
                    {city.map((city: CityFields) => (
                      <Option key={city.id} value={city.id}>
                        {city.name}
                      </Option>
                    ))}
                  </Select>
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
                  label="Chi nhánh"
                  name="idBranch"
                  {...tailLayout}
                >
                  <Select loading={loading}>
                    {itemsBranchByCity.map((branch: branchFields) => (
                      <Option key={branch.id} value={branch.id}>
                        {branch.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Trạng thái hoạt động" name="status" {...tailLayout}>
                  <Switch
                    defaultChecked={true}
                    onChange={(values) => {
                      setStatusStaff(values);
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Form.Item
              style={{ width: '60%', marginTop: 22 }}
              label=""
              name="image"
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
              <UploadDragger name={add.toString()} />
            </Form.Item>
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
