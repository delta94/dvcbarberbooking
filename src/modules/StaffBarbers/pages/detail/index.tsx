import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import StaffBarberForm from '@modules/StaffBarbers/components/StaffBarberForm/update';
import { Modal } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import useStaff from '@modules/StaffBarbers/hooks/useStaff';
import useUpdateStaff from '@modules/StaffBarbers/hooks/useUpdateStaff';
import FormSkeleton from '@commons/components/Skeletons/FormSkeleton';

const { confirm } = Modal;

const showCancelConfirm = () => {
  confirm({
    title: 'Xác nhận',
    content: 'Bạn có chắc chắn muốn hủy lưu không?',
    okText: 'Xác nhận',
    cancelText: 'Hủy',
    onOk() {
      getHistory().push('/citybarber');
    },
  });
};

export default function DetailStaffBarberPage() {
  const params = useParams<{ id: string; idCity: string; idBranch: string }>();
  const { items: staff, loading } = useStaff(params.id, params.idCity, params.idBranch);
  console.log('staff', staff);
  const { submit } = useUpdateStaff();
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/staff',
      breadcrumbName: 'Quản lý loại thành phố',
    },
    {
      path: '/staff/:id/:idCity/:idBranch',
      breadcrumbName: 'Thêm mới thành phố',
    },
  ];

  const showAddConfirm = (props: any) => {
    confirm({
      title: 'Xác nhận',
      content: 'Bạn có chắc chắn muốn chỉnh sửa nhân viên này không?',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk() {
        submit(props);
      },
    });
  };

  return (
    <>
      <PageHeader title="Thông tin nhân viên" breadcrumb={{ routes }} />
      <FormHeader title="Chi tiết">
        <FormSkeleton loading={loading}>
          <StaffBarberForm item={staff} onCancel={showCancelConfirm} loading={loading} onSave={showAddConfirm} />
        </FormSkeleton>
      </FormHeader>
    </>
  );
}
