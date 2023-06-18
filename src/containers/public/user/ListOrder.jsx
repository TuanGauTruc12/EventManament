import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icons from "../../../ultis/icons";
import { pathAPI, pathUser } from "../../../ultis/path.js";
import { useNavigate } from "react-router-dom";
import { getAllByIDKhachHang } from "../../../apis/ContractAPI";
import moment from "moment/moment";

function ListOrder() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { AiOutlineZoomIn, GrStatusGoodSmall } = icons;
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const handleDetail = (maHopDong) => {};

  if (!user) {
    navigate("/login", { state: { page: pathUser.LIST_ORDER } });
  }

  useEffect(() => {    
    getAllByIDKhachHang(pathAPI.contract, user.maUser).then((request) => {
      if (request.status === 200 && request.statusText === "") {
        setOrders(request.data);
      }
    });
  }, []);

  return (
    <Styled>
      <table>
        <thead>
          <tr>
            <th>mã hợp đồng</th>
            <th style={{ width: "40%" }}>tên hợp đồng</th>
            <th>ngày tạo hợp đồng</th>
            <th>Tình trạng xử lý</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order?.maHopDong}>
              <td>{order?.maHopDong}</td>
              <td>{order?.tenHopDong}</td>
              <td>{moment(order?.ngayLapHopDong).format('DD/MM/YYYY')}</td>

              {order?.tinhTrang === true ? (
                <td className="status-order">
                  <GrStatusGoodSmall style={{ color: "green" }} />
                  <span>Đã được duyệt</span>
                </td>
              ) : (
                <td className="status-order">
                  <GrStatusGoodSmall style={{ color: "red" }} />
                  <span>Chưa được duyệt</span>
                </td>
              )}

              <td>
                <button
                  onClick={() => handleDetail(order?.maHopDong)}
                  className="detail-order"
                >
                  <AiOutlineZoomIn />
                  <span>Xem chi tiết</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Styled>
  );
}

const Styled = styled.div`
  width: 100%;
  padding: 8px;
  margin-top: 20px;
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 12px;
    thead {
      background-color: #3f51b5;
      th {
        border: white solid 2px;
        color: white;
        text-transform: uppercase;
      }

      th:first-child {
        width: 160px;
        max-width: 160px;
      }
    }

    tbody {
      text-align: center;
      font-size: 18px;

      tr {
        line-height: 48px;
      }
      .detail-order {
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        border: #3f51b5 solid 2px;
        color: #3f51b5;
        margin: 0 auto;
      }
      .status-order {
        margin: 0 auto;
        span {
          margin-left: 8px;
        }
        svg {
          display: unset;
        }
      }
    }
  }
`;

export default ListOrder;
