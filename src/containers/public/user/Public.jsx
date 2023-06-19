import React from "react";
import { Footer, Header } from "../../../components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Public() {
  return (
    <Styled>
      <div style={{ background: "#fff", padding: "0 132px" }}>
        <Header />
      </div>
      <div className="px-[132px] body">
        <Outlet />
      </div>
      <div className="mx-[132px] mt-4">
        <Footer />
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .body {
    background-image: linear-gradient(to bottom, #ffffff 0%, #ffffff 100%),
      linear-gradient(to bottom, #f1f1f1 0%, #f1f1f1 100%);
    background-clip: content-box, padding-box;
  }
`;

export default Public;
