export const pathUser = {
    PUBLIC:"/",
    HOME:"",
    CREATE_EVENT: "create-event",
    MY_EVENT: "my-event",
    EVENT: "event",
    SERVICE: "service",
    CONTRACT: "contract",
    LOGIN: "login",
    REGISTER: "register",
    DETAIL_EVENT: "detail-event/:idEvent",
    CATEGORY: "category/:id",
    START:"*",
}

export const pathAdmin = {
    PUBLIC: "/admin/",
    COMTRACT_LIST: "/admin/",
    LIST_EVENT: "/admin/event-list",
    CREATE_EVENT: "/admin/create-event",
    EDIT_EVENT: "/admin/edit-event/:id",
    CONTRACT_DETAIL : "/admin/contract-detail",
    CONTRACT_DETAIL_SHOW : "/admin/contract-detail-show",
    START:"*",
}

export const pathAPI = {events: "events", services: "services", category: "category-event"}

export const title = {HOME: "Trang chủ", CREATE_EVENT_ADMIN: "Tạo sự kiện", EDIT_EVENT: "Sửa sự kiện"}

export const pathImage = `${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}`