import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import FormSkeleton from '@commons/components/Skeletons/FormSkeleton';
import { setTitle } from '@helpers/dom';
import { getHistory } from '@helpers/history';
import { Empty, Modal, Tabs } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { NotificationSuccess } from '@commons/components/Notification';
import { getListProductUrl } from '@helpers/url';

const { confirm } = Modal;

const showCancel = () => {
  confirm({
    title: 'Xác nhận',
    content: 'Bạn có chắc chắn muốn hủy lưu không?',
    okText: 'Xác nhận',
    cancelText: 'Hủy',
    onOk() {
      NotificationSuccess('Thông báo', 'Hủy cập nhật sản phẩm thành công');
      getHistory().push(getListProductUrl());
    },
  });
};

export default function DetailBookingPage() {
  const params = useParams<{ id: string }>();
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setTitle('Chi tiết sản phẩm');
  }, []);

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/products',
      breadcrumbName: 'Quản lý sản phẩm',
    },
    {
      path: '/products/:id',
      breadcrumbName: 'chi tiết sản phẩm',
    },
  ];

  const handleChange = () => {
    setTouched(true);
  };

  const closeEditProduct = () => {
    if (touched) {
      showCancel();
    } else {
      getHistory().push(getListProductUrl());
    }
  };

  const showConfirm = (props: any) => {
    confirm({
      width: '',
      title: 'Xác nhận',
      content: 'Bạn có chắc chắn muốn lưu thông tin sản phẩm không?',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk() {},
    });
  };

  return (
    <>
      <PageHeader title="Chi tiết lịch đặt" breadcrumb={{ routes }} />
      <FormHeader>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Thông tin lịch đặt" key="1">
            <FormSkeleton>
              {/* {data ? (
                <ProductForm
                  item={data}
                  loading={loading}
                  onChange={handleChange}
                  onSave={showConfirm}
                  onCancel={closeEditProduct}
                  categories={categories}
                  suppliers={suppliers}
                />
              ) : (
                <Empty description={'Không tìm thấy bản ghi'} />
              )} */}
            </FormSkeleton>
          </Tabs.TabPane>
        </Tabs>
      </FormHeader>
    </>
  );
}
