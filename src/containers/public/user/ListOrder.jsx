import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import icons from "../../../ultis/icons";
import { pathAPI, pathUser } from "../../../ultis/path.js";
import { useNavigate } from "react-router-dom";
import { getAllByIDKhachHang } from "../../../apis/ContractAPI";
import moment from "moment/moment";
import { ContractCustom } from "../../../components";
import { createRoot } from 'react-dom/client';

function ListOrder() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { AiOutlineZoomIn, GrStatusGoodSmall } = icons;
  const [orders, setOrders] = useState([]);
  const { IoMdClose } = icons;
  const navigate = useNavigate();
  const body = useRef(null);
  const modal = useRef(null);
  const close = useRef(null);

  function hideModal() {
    modal.current.classList.remove("open");    
  }

  const handleDetail = (maHopDong) => {
    modal.current.classList.add("open");

    close.current.addEventListener("click", hideModal);

    modal.current.addEventListener("click", hideModal);

    body.current.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    createRoot(body.current).render(<ContractCustom orderID={maHopDong}  />);
  };

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
              <td>{moment(order?.ngayLapHopDong).format("DD/MM/YYYY")}</td>

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

      <div ref={modal} className="modal">
        <div className="modal-container">
          <div ref={close} className="modal-close text-black js-modal-close">
            <IoMdClose />
          </div>

          <div ref={body} className="modal-body">
          </div>

          <div className="flex justify-center">
          <button onClick={() => hideModal} className="btn">
            Đóng
          </button>
          </div>
        </div>
      </div>
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

  .modal.open {
    display: flex;
  }

  .modal {
    input {
      background-color: white;
      padding: 8px;
    }

    .modal-close:hover{
      background-color: white;
    }

    div{
      .btn {
        margin-top: 12px;
      }
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0;
    }

    .modal-container {
      height: max-content;
      width: 80vw;
      background-color: rgb(204, 204, 204);
    }

    .modal-header {
      height: 80px;
    }
  }

  #contract{
    margin-top: 0;
  }
`;

export default ListOrder;
