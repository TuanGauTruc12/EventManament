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
} from "./containers/public/user";
import {
  ContractDetail,
  ContractDetailShow,
  ContractList,
  CreateEventAdmin,
  PublicAdmin,
} from "./containers/public/admin/index";

function App() {
  return (
    <>
      <Routes>
        <Route path={pathUser.PUBLIC} element={<Public />}>
          <Route path={pathUser.HOME} element={<Home />} />
          <Route path={pathUser.CREATE_EVENT} element={<CreateEvent />} />
          <Route path={pathUser.EVENT} element={<Event />} />
          <Route path={pathUser.MY_EVENT} element={<MyEvent />} />
          <Route path={pathUser.SERVICE} element={<Service />} />
          <Route path={pathUser.SERVICE} element={<Service />} />
          <Route path={pathUser.CONTRACT} element={<Contract />} />
          <Route path={pathUser.START} element={<Home />} />
        </Route>

        <Route path={pathAdmin.PUBLIC} element={<PublicAdmin />}>
          <Route path={pathAdmin.COMTRACT_LIST} element={<ContractList />} />
          <Route path={pathAdmin.CREATE_EVENT} element={<CreateEventAdmin />} />
          <Route
            path={pathAdmin.CONTRACT_DETAIL}
            element={<ContractDetail/>}
          />
          <Route
            path={pathAdmin.CONTRACT_DETAIL_SHOW}
            element={<ContractDetailShow/>}
          />
          <Route path={pathAdmin.START} element={<ContractList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
