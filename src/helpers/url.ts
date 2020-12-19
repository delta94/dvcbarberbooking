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

export const getListProduct = () => `/productsBarber`;

export const getDetailProductUrl = (id: string, idCol: string) => `/productsBarber/${id}/${idCol}`;
