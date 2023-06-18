import { Routes, Route } from "react-router-dom";
import { pathAdmin, pathUser } from "./ultis/path.js";
import {
  CreateEvent,
  Home,
  MyEvent,
  Public,
  Event,
  Service,
  Contract,
  Login,
  DetailEvent,
  Register,
  CategoryList,
  Error,
  ListOrder
} from "./containers/public/user";
import {
  ContractDetail,
  ContractDetailShow,
  ContractList,
  CreateEventAdmin,
  PublicAdmin,
  EventList,
  EditEvent,
  ServiceList,
  EditService,
  CreateService,
  CreateCategory,
  CategoryListAdmin,
  EditCategory,
} from "./containers/public/admin/index";
import Scrollbars from "react-custom-scrollbars-2";

function App() {
  const renderThumbVertical = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "3px",
      width: "8px",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  return (
    <Scrollbars
      style={{ width: "100%", height: "100vh" }}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderThumbVertical={renderThumbVertical}
    >
      <Routes>
        <Route path={pathUser.PUBLIC} element={<Public />}>
          <Route path={pathUser.HOME} element={<Home />} />
          <Route path={pathUser.CREATE_EVENT} element={<CreateEvent />} />
          <Route path={pathUser.EVENT} element={<Event />} />
          <Route path={pathUser.MY_EVENT} element={<MyEvent />} />
          <Route path={pathUser.SERVICE} element={<Service />} />
          <Route path={pathUser.SERVICE} element={<Service />} />
          <Route path={pathUser.CONTRACT} element={<Contract />} />
          <Route path={pathUser.LOGIN} element={<Login />} />
          <Route path={pathUser.REGISTER} element={<Register />} />
          <Route path={pathUser.CATEGORY} element={<CategoryList />} />
          <Route path={pathUser.DETAIL_EVENT} element={<DetailEvent />} />
          <Route path={pathUser.LIST_ORDER} element={<ListOrder />} />
          <Route path={pathUser.START} element={<Error admin={false} />} />
        </Route>

        <Route path={pathAdmin.PUBLIC} element={<PublicAdmin />}>
          <Route path={pathAdmin.COMTRACT_LIST} element={<ContractList />} />
          <Route path={pathAdmin.CREATE_EVENT} element={<CreateEventAdmin />} />
          <Route path={pathAdmin.LIST_EVENT} element={<EventList />} />
          <Route path={pathAdmin.EDIT_EVENT} element={<EditEvent />} />
          <Route
            path={pathAdmin.CONTRACT_DETAIL}
            element={<ContractDetail />}
          />
          <Route
            path={pathAdmin.CONTRACT_DETAIL_SHOW}
            element={<ContractDetailShow />}
          />
          <Route path={pathAdmin.LIST_SERVICE} element={<ServiceList />} />
          <Route path={pathAdmin.EDIT_SERVICE} element={<EditService />} />
          <Route path={pathAdmin.CREATE_SERVICE} element={<CreateService />} />
          <Route path={pathAdmin.LIST_CATEGORY} element={<CategoryListAdmin />} />
          <Route path={pathAdmin.CREATE_CATEGORY} element={<CreateCategory />} />
          <Route path={pathAdmin.EDIT_CATEGORY} element={<EditCategory />} />
          <Route path={pathAdmin.START} element={<Error admin={true}/>} />
        </Route>
      </Routes>
    </Scrollbars>
  );
}

export default App;
