import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Table, Button, Switch } from 'antd';
import React from 'react';
import RowActions from '../List/RowActions';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table/Table';
import useCityBarber from '@modules/CityBarbers/hooks/useCityBarbers';
import { CityFields } from '@modules/CityBarbers/redux/action-types';
import { getHistory } from '@helpers/history';
import useUpdateCity from '@modules/CityBarbers/hooks/useUpdateCityBarber';

export default function ListCityBarberPage() {
  const { loading, items } = useCityBarber();
  const { submit } = useUpdateCity();
  const rowKey = (item: CityFields) => `${item.id}`;

  const columns: ColumnsType<CityFields> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên thành phố',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Trạng thái hoạt động',
      key: 'status',
      render: (record: any) => (
        <Switch
          checked={record.status === true ? true : false}
          onChange={(text: any) => {
            submit({ id: record.id, name: record.name, status: text });
          }}
        />
      ),
    },
    {
      title: '',
      key: 'action',
      width: 60,
      render: (record: any) => <RowActions record={record} />,
    },
  ];

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/citybarber',
      breadcrumbName: 'Quản lý loại sản phẩm',
    },
  ];
  const handleAdd = () => {
    getHistory().push('/citybarber/new');
  };
  return (
    <>
      <PageHeader title="Quản lý thành phố" breadcrumb={{ routes }} />
      <TableHeader
        title="Danh sách thành phố"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Thêm mới
          </Button>
        }
      >
        <Table columns={columns} dataSource={[...items]} loading={loading} rowKey={rowKey}></Table>
      </TableHeader>
    </>
  );
}
