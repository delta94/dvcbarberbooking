import { Col, DatePicker, Row, Table, Form, Button, Tag } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/lib/table/Table';
import useBillBarber from '@modules/BillBarbers/hooks/useBillBarber';
import useBranchBarber from '@modules/BranchBarber/hooks/useBranchBarber';
import { branchFields } from '@modules/BranchBarber/redux/action-types';
import { FormProps } from 'antd/es/form';
import { RetweetOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { ListBillBarber } from '@modules/BillBarbers/redux/actions/list-bill';
import TableHeader from '@commons/components/TableHeader';
import useBookings from '@modules/Booking/hooks/useBookings';
import { cartItem } from '@modules/Booking/redux/action-types';
import { listBooking } from '@modules/Booking/redux/actions/list-booking';

const layout: FormProps = {
  layout: 'vertical',
};

const { RangePicker } = DatePicker;

export default function ListStaffBarberPage() {
  const dispatch = useDispatch();
  const { items, loading } = useBillBarber();
  const { items: booking, loading: loadingBooking } = useBookings();
  console.log('adad', booking);

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
      title: 'Khoản chi sản phẩm( $ )',
      align: 'center',
      width: '20%',
      render: (record: any) => {
        if (record.id === 'Total') {
          return (
            items
              // .filter((it) => {
              //   return it.salonName === record.name;
              // })
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
              }, 0)
          );
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
      title: 'Khoản thu ( $ )',
      align: 'center',
      width: '20%',
      render: (record: any) => {
        if (record.id === 'Total') {
          return (
            items
              // .filter((it) => {
              //   return it.salonName === record.name;
              // })
              .map((it) => {
                return Number(it.finalPrice);
              })
              .reduce((a, b) => {
                console.log('ad', b);
                return a + b;
              }, 0)
          );
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
            let from: any | undefined;
            let to: any | undefined;
            if (values && values.rangePicker) {
              from = moment(values.rangePicker[0]).format('DD/MM/YYYY');
              to = moment(values.rangePicker[1]).format('DD/MM/YYYY');
            }

            await dispatch(listBooking(from, to));
            await dispatch(ListBillBarber(from, to));
          }}
          style={{ marginLeft: 32, marginTop: 12, marginRight: 32, marginBottom: 12 }}
          name="advanced_search"
          className="ant-advanced-search-form"
        >
          <Row>
            <Col>
              <Form.Item name="rangePicker" label="Chọn thời gian">
                <RangePicker format="DD/MM/YYYY" placeholder={['Từ ngày', 'Đến ngày']} />
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
          dataSource={[...branch, { id: 'Total', name: 'Tổng tiền' }]}
          rowKey={rowKey}
          loading={loading}
        ></Table>
      </TableHeader>
    </>
  );
}
