import React from "react";
import { HeaderAdmin } from "../../../components";
import { Outlet } from "react-router-dom";

function Public() {
  return (
    <div className="flex w-full flex-col">
      <div className="mx-[132px]">
        <HeaderAdmin />
        <Outlet />
      </div>
    </div>
  );
}

export default Public;
