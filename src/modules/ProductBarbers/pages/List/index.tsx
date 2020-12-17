import { PlusOutlined } from '@ant-design/icons';
import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import FilterLawyerForm from '@modules/ProductBarbers/FilterLawyer';
import useProductBarber from '@modules/ProductBarbers/hooks/useProductBarber';

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
    title: 'Giá ( VNĐ )',
    dataIndex: 'price',
    key: 'name',
  },
  {
    title: 'Ảnh sản phẩm',
    dataIndex: 'image',
    key: 'image',
    render: (text) => {
      if (text) {
        return <Image style={{ maxWidth: 50, maxHeight: 50 }} src={text} />;
      } else {
        return 'Không có ảnh';
      }
    },
  },
];

export default function ProductListPage(props: any) {
  const { loading, items } = useProductBarber();

  const rowKey = (item: any) => `${item.id}`;

  // const onChange = (pagination: TablePaginationConfig) => {
  //   updatePagination({
  //     current: pagination.current || 1,
  //     pageSize: pagination.pageSize || TABLE_PAGE_SIZE,
  //   });
  // };

  // useEffect(() => {
  //   filterProducts({
  //     query: undefined,
  //     categoryId: undefined,
  //     current: 1,
  //     pageSize: TABLE_PAGE_SIZE,
  //   });
  //   // eslint-disable-next-line
  // }, []);

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
