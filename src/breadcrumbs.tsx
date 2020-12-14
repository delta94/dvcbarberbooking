const breadcrumbsRoutes = [
  { path: '/products', breadcrumb: 'Sản phẩm' },
  { path: '/products/new', breadcrumb: 'Tạo mới' },
  { path: '/products/:id', breadcrumb: 'Chi tiết' },

  { path: '/suppliers', breadcrumb: 'Nhà cung cấp' },
  { path: '/suppliers/new', breadcrumb: 'Tạo mới' },
  {
    path: '/suppliers/:id',
  },

  { path: '/', breadcrumb: 'Trang chủ' },
];

export default breadcrumbsRoutes;
