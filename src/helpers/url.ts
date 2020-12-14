export const getProductUrl = (id: string) => `/products/${id}`;
export const getNewProductUrl = () => `/products/new`;
export const getListProductUrl = () => `/products`;

export const getSupplierUrl = (id: string) => `/suppliers/${id}`;
export const getNewSupplierUrl = () => `/suppliers/new`;
export const getListSupplierUrl = () => `/suppliers`;

export const getGameUrl = (id: string) => `/games/${id}`;
export const getNewGameUrl = () => `/games/new`;
export const getListGameUrl = () => `/games`;
export const getUserUrl = (id: string) => `/users/${id}`;
export const getListUserUrl = () => `/users`;
export const getNewUserUrl = () => `/users/new`;

export const getListBookingUrl = () => `/booking`;
export const getDetailCityBarber = (id: string) => `/citybarber/${id}`;

export const getNewStaffUrl = () => `/staff/new`;
export const getListStaffUrl = () => `/staff`;
export const getDetailStaffUrl = (id: string, idCity: string, idBranch: string) => `/staff/${id}/${idCity}/${idBranch}`;

export const getStatisticalUrl = () => `/statistical`;
