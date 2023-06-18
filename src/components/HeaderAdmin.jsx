import React from "react";
import styled from "styled-components";
import icons from "../ultis/icons.js";
import {pathAdmin} from '../ultis/path.js'
import { useNavigate } from "react-router-dom";

function HeaderAdmin() {
  const { BiHome } = icons;
  const navigate = useNavigate();

  return (
    <Styled>
      <div className="flex">
        <div className="nav-left">
          <span onClick={() => navigate("/")}>
            <BiHome size={20}/>
          </span>
          <span onClick={()=>navigate(pathAdmin.LIST_EVENT)}>Sự kiện</span>
          <span onClick={()=>navigate(pathAdmin.LIST_CATEGORY)}>Loại sự kiện</span>
          <span onClick={()=>navigate(pathAdmin.LIST_SERVICE)}>Dịch vụ</span>
          <span onClick={()=>navigate(pathAdmin.COMTRACT_LIST)}>Hợp đồng</span>
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin: 32px;
  .nav-left {
    display: flex;
    gap: 16px;
    span{
      font-size: 18px;
    }
    span:hover{
      font-weight: 700;
      text-decoration: underline;
      color: blue;
      cursor: pointer;
    }
  }
`;

export default HeaderAdmin;
