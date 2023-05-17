import React from "react";
import { Footer, Header } from "../../../components";
import { Outlet } from "react-router-dom";

function Public() {
  return (
    <div className="flex w-full flex-col">
      <div className="mx-[132px]">
        <Header />
        <Outlet />
      </div>
      <div className="mx-[132px] mt-8">
      <Footer/>
      </div>
    </div>
  );
}

export default Public;
