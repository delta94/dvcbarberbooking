import useBranchBarber from '@modules/BranchBarber/hooks/useBranchBarber';
import { branchFields } from '@modules/BranchBarber/redux/action-types/list';
import useCityBarber from '@modules/CityBarbers/hooks/useCityBarbers';
import { CityFields } from '@modules/CityBarbers/redux/action-types';
import UploadDragger from '@modules/Media/containers/UploadDragger';
import { StaffFields } from '@modules/StaffBarbers/redux/action-types';
import { Button, Col, Form, Input, Row, Select, Space, Switch } from 'antd';
import { FormItemProps, FormProps } from 'antd/es/form';
import React, { useEffect } from 'react';

const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};

const tailLayout: FormItemProps = {};

interface IProp {
  loading: boolean;
  item?: StaffFields;
  onSave?(item: StaffFields): void;
  onCancel?(): void;
}

const { Option } = Select;

export default function UpdateStaffBarberForm(props: IProp) {
  const add = Math.random();
  const [form] = Form.useForm();
  const { items: city } = useCityBarber();
  const { items: branch } = useBranchBarber();

  useEffect(
    () => {
      if (props.item) {
        console.log('add', props.item.avatar);
        form.setFieldsValue({
          name: props.item.name,
          username: props.item.username,
          password: props.item.password,
          salary: Number(props.item.salary),
          Idcity: props.item.idCity,
          idBranch: props.item.idBranch,
          image: props.item.avatar,
        });
      }
    },
    // eslint-disable-next-line
    [props.item?.id],
  );

  const onFinish = (values: any) => {
    props.onSave &&
      props.onSave({
        id: props.item!.id,
        idCity: values.Idcity,
        idBranch: values.idBranch,
        name: values.name,
        password: values.password,
        rating: props.item!.rating,
        ratingTimes: props.item!.ratingTimes,
        status: values.status,
        username: values.username,
        salary: Number(values.salary),
        avatar: values.image,
      });
  };

  return (
    <>
      <Form initialValues={props.item} {...layout} onFinish={onFinish} name="basic">
        <Row>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Tên nhân viên" name="name" {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Tên tài khoản" name="username" {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Mật khẩu" name="password" {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Lương" name="salary" {...tailLayout}>
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Thành phố" name="Idcity" {...tailLayout}>
                  <Select defaultValue={props.item?.idCity}>
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
                <Form.Item label="Chi nhánh" name="idBranch" {...tailLayout}>
                  <Select defaultValue={props.item?.idBranch}>
                    {branch
                      .filter(() => {})
                      .map((branch: branchFields) => (
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
                    defaultChecked={props.item?.status}
                    // onChange={(values) => {
                    //   setStatusStaff(values);
                    // }}
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
              <UploadDragger urlAvater={props.item?.avatar} name={add.toString()} />
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
