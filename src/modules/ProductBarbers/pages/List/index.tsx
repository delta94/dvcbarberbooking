import { PlusOutlined } from '@ant-design/icons';
import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import FilterLawyerForm from '@modules/ProductBarbers/FilterLawyer';
import useProductBarber from '@modules/ProductBarbers/hooks/useProductBarber';
import RowActions from './RowActions';
import { Button, Table, Image } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';

import { formatCharacters } from '@helpers/string';
import { ProductBarberFields } from '../../redux/action-types';
import { getHistory } from '@helpers/history';

const columns: ColumnsType<ProductBarberFields> = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'sku',
    render: (text) => formatCharacters(text, 30),
  },
  {
    title: 'Giá ($)',
    dataIndex: 'price',
    key: 'name',
  },
  {
    title: 'Ảnh sản phẩm',
    dataIndex: 'image',
    key: 'image',
    render: (text) => {
      if (text) {
        return <Image style={{ maxWidth: 70, maxHeight: 70 }} src={text} />;
      } else {
        return 'Không có ảnh';
      }
    },
  },
  {
    title: '',
    key: 'action',
    width: 60,
    render: (record: any) => <RowActions record={record} />,
  },
];

export default function ProductListPage(props: any) {
  const { loading, items } = useProductBarber();

  const rowKey = (item: any) => `${item.id}`;

  const handleAdd = () => {
    getHistory().push('/productsbarber/new');
  };

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/productsBarber',
      breadcrumbName: 'Quản lý sản phẩm',
    },
  ];

  return (
    <>
      <PageHeader title="Quản lý sản phẩm" breadcrumb={{ routes }} />
      <FilterLawyerForm />
      <TableHeader
        title="Danh sách sản phẩm"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Thêm mới
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={items}
          loading={loading}
          rowKey={rowKey}
          // pagination={{
          //   ...pagination,
          //   showSizeChanger: true,
          // }}
          // onChange={onChange}
        />
      </TableHeader>
    </>
  );
}
