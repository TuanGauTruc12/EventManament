export const pathUser = {
  PUBLIC: "/",
  HOME: "",
  CREATE_EVENT: "create-event",
  MY_EVENT: "my-event",
  EVENT: "event",
  SERVICE: "service",
  CONTRACT: "contract",
  LOGIN: "login",
  REGISTER: "register",
  DETAIL_EVENT: "detail-event/:idEvent",
  CATEGORY: "category/:id",
  LIST_ORDER: "list-order",
  START: "*",
};

export const pathAdmin = {
  PUBLIC: "/admin/",
  COMTRACT_LIST: "/admin/contract-list",
  LIST_EVENT: "/admin/",
  CREATE_EVENT: "/admin/create-event",
  EDIT_EVENT: "/admin/edit-event/:id",
  CONTRACT_DETAIL: "/admin/contract-detail",
  CONTRACT_DETAIL_SHOW: "/admin/contract-detail-show",
  LIST_SERVICE: "/admin/service-list",
  EDIT_SERVICE: "/admin/edit-service/:id",
  CREATE_SERVICE: "/admin/create-service",
  LIST_CATEGORY: "/admin/category-list",
  EDIT_CATEGORY: "/admin/edit-category/:id",
  CREATE_CATEGORY: "/admin/create-category",
  START: "*",
};

export const pathAPI = {
  events: "events",
  services: "services",
  category: "category-event",
  custommer: "customer",
  contract: "contract",
};

export const title = {
  HOME: "Trang chủ",
  LIST_EVENT: "Danh sách sự kiện",
  CREATE_EVENT_ADMIN: "Tạo sự kiện",
  EDIT_EVENT: "Sửa sự kiện",
  LIST_CATEGORY_ADMIN: "Danh sách loại sự kiện",
  CREATE_CATEGORY_ADMIN: "Tạo loại sự kiện",
  EDIT_CATEGORY_ADMIN: "Sửa loại sự kiện",
  LIST_SERVICE: "Danh sách dịch vụ",
  CREATE_CATEGORY: "Thêm dịch vụ",
  EDIT_CATEGORY: "Sửa dịch vụ",
};

export const pathImage = `${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}`;
