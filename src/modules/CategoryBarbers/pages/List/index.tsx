import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Table, Button } from 'antd';
import React from 'react';
import RowActions from '../List/RowActions';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table/Table';
import useCategoryBarber from '@modules/CategoryBarbers/hooks/useCategoryBarbers';
import { CategoriesFields } from '@modules/CategoryBarbers/redux/action-types';
import { getHistory } from '@helpers/history';

export default function ListCategoryBarberPage() {
  const { loading, items } = useCategoryBarber();
  const rowKey = (item: CategoriesFields) => `${item.id}`;

  const columns: ColumnsType<CategoriesFields> = [
    {
      title: 'Tên loại sản phẩm',
      dataIndex: 'name',
      key: 'name',
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
      path: '/categoryBarber',
      breadcrumbName: 'Quản lý loại sản phẩm',
    },
  ];
  const handleAdd = () => {
    getHistory().push('/categoryBarber/new');
  };
  return (
    <>
      <PageHeader title="Quản lý loại sản phẩm" breadcrumb={{ routes }} />
      {/* <FilterUser /> */}
      <TableHeader
        title="Danh sách loại sản phẩm"
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
