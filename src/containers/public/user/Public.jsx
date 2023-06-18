import React from "react";
import { Footer, Header } from "../../../components";
import { Outlet } from "react-router-dom";

function Public() {
  return (
    <div className="flex w-full flex-col">
      <div style={{ background: "#fff", padding: "0 132px" }}>
        <Header />
      </div>
      <div className="px-[132px]">
        <Outlet />
      </div>
      <div className="mx-[132px] mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default Public;
