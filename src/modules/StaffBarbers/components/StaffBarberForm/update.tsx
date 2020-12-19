import useBranchBarber from '@modules/BranchBarber/hooks/useBranchBarber';
import useBranchByCity from '@modules/BranchBarber/hooks/useBranchByCity';
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

  const { submit, itemsBranchByCity, loading } = useBranchByCity();

  useEffect(
    () => {
      if (props.item?.idCity) {
        submit(props.item!.idCity);
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
      <Form
        initialValues={{
          id: props.item?.id,
          name: props.item?.name,
          Idcity: props.item?.idCity,
          idBranch: props.item?.idBranch,
          password: props.item?.password,
          rating: props.item?.rating,
          ratingTimes: props.item?.ratingTimes,
          status: props.item?.status,
          username: props.item?.username,
          salary: props.item!.salary,
          avatar: props.item?.avatar,
        }}
        {...layout}
        onFinish={onFinish}
        name="basic"
      >
        <Row>
          <Col span={14}>
            <Row>
              <Col span={10}>
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
              <Col span={10}>
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
            <Col>
              <Row>
                <Col span={10}>
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
                <Col span={10}>
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
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Form.Item label="Thành phố" name="Idcity" {...tailLayout}>
                <Select
                  onChange={(values) => {
                    submit(values.toString());
                    form.setFieldsValue({
                      idBranch: undefined,
                    });
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
            <Col span={10}>
              <Form.Item label="Chi nhánh" name="idBranch" {...tailLayout}>
                <Select loading={loading}>
                  {itemsBranchByCity.map((branch: branchFields) => (
                    <Option key={branch.id} value={branch.id}>
                      {branch.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={16}>
              <Row>
                <Col span={12}>
                  <Form.Item label="Trạng thái hoạt động" name="status" {...tailLayout}>
                    <Switch defaultChecked={props.item?.status} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col span={10}>
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
