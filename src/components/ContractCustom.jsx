import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { useEffect } from "react";
import { getById } from "../apis/BaseAPI";
import { pathAPI } from "../ultis/path";

const ContractCustom = ({ orderID }) => {
  useEffect(() => {
    //spi contract
    getById(orderID, pathAPI.contract).then((response) => {
      if(response.status === 200 && response.statusText === ""){
        setContract(response.data);
      }
    });
  }, [orderID]);

  const [gmail, setGmail] = useState("tuan1202@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0941502499");
  const event = {};
  const [contract, setContract] = useState();

  console.log(contract);

  return (
    <Styled>
      <div style={{ background: "#ccc" }} id="contract">
        <div style={{ fontSize: "20px" }} className="flex flex-col gap-1">
          <span>Nội dung hợp đồng</span>
          <span style={{ fontWeight: "bold" }}>{contract?.suKien?.tenSuKien}</span>
        </div>
        <div className="information-customer mt-2">
          <span className="decription">THÔNG TIN KHÁCH HÀNG</span>
          <div>
            <label htmlFor="name">Họ tên:</label>
            <span>
              <input disabled id="name" type="text" value={contract?.customer?.name} />
            </span>
          </div>
          <div>
            <label htmlFor="gmail">Gmail:</label>
            <span>
              <input
                disabled
                id="gmail"
                type="text"
                value={contract?.customer?.email}
              />
            </span>
          </div>
          <div>
            <label htmlFor="phoneNumber">Số điện thoại:</label>
            <span>
              <input
                disabled
                id="phoneNumber"
                type="tel"
                value={contract?.customer?.phoneNumber}
              />
            </span>
          </div>
        </div>
        <div className="information-event mt-3">
          <span className="decription">CÁC THÔNG TIN VỀ SỰ KIỆN</span>
          <div>
            <div>
              <span className="flex-none">Tên sự kiện:</span>
              <span>{contract?.event?.name}</span>
            </div>
            <div>
              <span>Tên công ty:</span>
              <span>{contract?.nameCompany}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Thời gian bắt đầu:</span>
              <span>{moment(contract?.event?.timeStartEvent).format("HH:mm DD-MM-YYYY")}</span>
            </div>
            <div>
              <span>Thời gian kết thúc:</span>
              <span>{moment(contract?.event?.timeEndEvent).format("HH:mm DD-MM-YYYY")}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Số lượng khách mời:</span>
              <span>{contract?.numberOfGuest}</span>
            </div>
            <div>
              <span> Kinh phí:</span>
              <span> {contract?.expense} vnd</span>
            </div>
          </div>
        </div>
        <div className="information-service mt-3">
          <span>CÁC DỊCH VỤ YÊU CẦU</span>
          <table className="contracts">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên dịch vụ</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {contract?.services.map((item, index) => (
                <tr key={index} className="service-item">
                  <td>{index + 1}</td>
                  <td>{item?.nameService}</td>
                  <td>{`${item?.priceService} / ${item?.unitService}`}</td>
                  <td>{item?.quantityService}</td>
                  <td>{item?.totalPrice}</td>
                  <td>{item?.contentService}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: "block", textAlign: "right" }}>
            <span className="text-right mr-10">
              Tổng tiền:
              {contract?.totalPrice}
              VND
            </span>
          </div>
        </div>
      </div>
    </Styled>
  );
};

const Styled = styled.header`
  #contract {
    .information-customer,
    .information-service,
    .information-event {
      margin: 24px 24px 12px;
      padding: 24px 12px;
      padding-bottom: 12px;
      border: solid 2px black;
      position: relative;
    }

    .information-service {
      margin-bottom: 0;
    }

    div {
      .error {
        font-size: 18px;
        color: red;
      }
    }
  }

  .information-customer > span,
  .information-service > span,
  .information-event > span {
    position: absolute;
    margin-left: 20px;
    top: -10px;
    z-index: 10000;
    padding: 0 16px;
    background: #ccc;
  }

  .information-customer {
    display: flex;
    gap: 8px;
    flex-direction: column;
    div {
      width: 30%;
      justify-content: space-between !important;
      span {
        width: 70%;
        input {
          width: 100%;
        }
      }
    }
  }
  .information-event {
    div {
      gap: 16px;
      div {
        max-width: 50%;
      }
    }
  }
  .information-service {
    display: flex;
    flex-direction: column;
    gap: 12px;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; /* Equal width for each column */
      gap: 10px;
    }
  }
`;

export default ContractCustom;
