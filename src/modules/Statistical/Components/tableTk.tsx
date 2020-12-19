import { RetweetOutlined } from '@ant-design/icons';
import TableHeader from '@commons/components/TableHeader';
import useBillBarber from '@modules/BillBarbers/hooks/useBillBarber';
import { ListBillBarber } from '@modules/BillBarbers/redux/actions/list-bill';
import useBookings from '@modules/Booking/hooks/useBookings';
import { cartItem } from '@modules/Booking/redux/action-types';
import { listBooking } from '@modules/Booking/redux/actions/list-booking';
import useBranchBarber from '@modules/BranchBarber/hooks/useBranchBarber';
import { branchFields } from '@modules/BranchBarber/redux/action-types';
import { Button, Col, DatePicker, Form, Row, Table, Tag } from 'antd';
import { FormProps } from 'antd/es/form';
import { ColumnsType } from 'antd/lib/table/Table';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const layout: FormProps = {
  layout: 'vertical',
};

export default function ListStaffBarberPage() {
  const dispatch = useDispatch();
  const { items, loading } = useBillBarber();
  const { items: booking, loading: loadingBooking, arr } = useBookings();
  const [year, setYear] = useState();
  const { loading: loadingBranch, items: branch } = useBranchBarber();
  const rowKey = (item: branchFields) => `${item.id}`;

  const columns: ColumnsType<branchFields> = [
    {
      title: 'Tên chi nhánh',

      key: 'name',
      render: (record: any) => {
        if (record.id === 'Total') {
          return (
            <Tag style={{ minWidth: '5%', fontSize: 15, height: 25 }} color={'red'}>
              Tổng
            </Tag>
          );
        } else {
          return record.name;
        }
      },
    },
    {
      title: 'Lịch đã xong',
      align: 'center',
      width: '15%',
      key: 'name',

      render: (record: any) => {
        if (record.id === 'Total') {
          return (
            <Tag color={'green'}>
              {items

                .map(() => {
                  return 1;
                })
                .reduce((a, b) => {
                  return a + b;
                }, 0)}
            </Tag>
          );
        } else {
          return (
            <Tag color={'green'}>
              {items
                .filter((it) => {
                  return it.salonName === record.name;
                })
                .map(() => {
                  return 1;
                })
                .reduce((a, b) => {
                  return a + b;
                }, 0)}
            </Tag>
          );
        }
      },
    },

    {
      title: 'Lịch chưa xong',
      align: 'center',
      width: '15%',
      key: 'name',
      render: (record: any) => {
        if (record.id === 'Total') {
          return (
            <Tag color={'red'}>
              {booking
                .filter((it) => {
                  return it.done === false;
                })
                .map(() => {
                  return 1;
                })
                .reduce((a, b) => {
                  return a + b;
                }, 0)}
            </Tag>
          );
        } else {
          return (
            <Tag color={'red'}>
              {booking
                .filter((it) => {
                  return it.salonId === record.id && it.done === false;
                })
                .map(() => {
                  return 1;
                })
                .reduce((a, b) => {
                  return a + b;
                }, 0)}
            </Tag>
          );
        }
      },
    },

    {
      title: 'Khoản chi sản phẩm ($)',
      align: 'center',
      width: '20%',
      render: (record: any) => {
        if (record.id === 'Total') {
          return items
            .map((it) => {
              return Number(
                it.shoppingItemList
                  ?.map((sp: cartItem) => {
                    return Number(sp.productPrice * sp.productQuantity);
                  })
                  .reduce((a, b) => {
                    return Number(a + b);
                  }, 0),
              );
            })
            .reduce((a, b) => {
              return a + b;
            }, 0);
        } else {
          return items
            .filter((it) => {
              return it.salonName === record.name;
            })
            .map((it) => {
              return Number(
                it.shoppingItemList
                  ?.map((sp: cartItem) => {
                    return Number(sp.productPrice * sp.productQuantity);
                  })
                  .reduce((a, b) => {
                    return Number(a + b);
                  }, 0),
              );
            })
            .reduce((a, b) => {
              return a + b;
            }, 0);
        }
      },
    },
    {
      title: 'Khoản thu ($)',
      align: 'center',
      width: '20%',
      render: (record: any) => {
        if (record.id === 'Total') {
          return items
            .map((it) => {
              return Number(it.finalPrice);
            })
            .reduce((a, b) => {
              return a + b;
            }, 0);
        } else {
          return items
            .filter((it) => {
              return it.salonName === record.name;
            })
            .map((it) => {
              return Number(it.finalPrice);
            })
            .reduce((a, b) => {
              return a + b;
            }, 0);
        }
      },
    },
  ];

  return (
    <>
      <TableHeader>
        <Form
          onFinish={async (values) => {
            let year: any | undefined;

            if (values && values.rangePicker) {
              year = moment(values.rangePicker).format('YYYY');
            }
            await dispatch(listBooking(year));
            await dispatch(ListBillBarber(year));
            setYear(year);
          }}
          style={{ marginLeft: 32, marginTop: 12, marginRight: 32, marginBottom: 12 }}
          name="advanced_search"
          className="ant-advanced-search-form"
        >
          <Row>
            <Col>
              <Form.Item style={{ marginRight: 10 }} name="rangePicker" label="Chọn thời gian">
                <DatePicker picker="year" placeholder="Chọn năm" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item style={{ marginRight: 10 }}>
                <Button htmlType="submit" type="primary">
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button
                  onClick={() => {
                    // form.resetFields();
                    // dispatch(ListBillbarberFilterOut());
                  }}
                >
                  <RetweetOutlined />
                  Bỏ lọc
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Table
          columns={columns}
          dataSource={[...branch, { id: 'Total', name: 'Tổng tiền', status: false }]}
          rowKey={rowKey}
          loading={loading}
        ></Table>
        <Col style={{ textAlign: 'center', marginTop: 30 }}>
          <h5 style={{ fontStyle: 'italic' }}>Biểu đồ thống kê theo tháng {year}</h5>
          <div style={{ marginLeft: '9%', marginTop: 10, alignItems: 'center', alignContent: 'center' }}>
            <LineChart width={1000} height={300} data={arr} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis label={{ value: 'Tiền ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="booking" name="Lịch đã xong" stroke="#82ca9d" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="unBooking" name="Lịch chưa xong" stroke="#FF0000" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="total" name="Tổng tiền ($)" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        </Col>
      </TableHeader>
    </>
  );
}
