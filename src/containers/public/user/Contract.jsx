import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { pathUser } from "../../../ultis/path";
import { createContract } from "../../../apis/ContractAPI";

const Contract = () => {
  document.title = "Nội dung hợp đồng";
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [regulation, setRegulation] = useState(false);

  useEffect(() => {
    if (user === null) {
      navigate("/login", { state: { page: pathUser.CONTRACT } });
    }
  }, [user]);

  const [name, setName] = useState(user.user_name);
  const [gmail, setGmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const location = useLocation();
  const service = location.state.services ?? [];
  const event = location.state.event ?? {};
  const [error, setError] = useState("");

  const handlConfirm = () => {
    if (user === null) {
      navigate("/login", { state: { page: pathUser.CONTRACT } });
    } else if (!regulation) {
      setError("Bạn chưa chấp nhận điều khoản!!!");
    } else {
      //cbeck data

      //send api
      const formData = new FormData();
      const dichVus = service.map((s) => {
        let ghiChu = "";
        if (s.input !== undefined) {
          ghiChu = s.input;
        }
        return {
          maDichVu: s.id,
          soLuong: s.quantity,
          tongTien: s.quantity * s.service.gia,
          ghiChu: ghiChu,
        };
      });

      formData.append("kinhPhi", event.expense);
      formData.append("soLuongKhachMoi", event.numberOfGuest);
      formData.append("tenToChuc", event.nameCompany);
      formData.append("MAKH", user.maUser);
      formData.append("MASK", event.idEvent);
      formData.append("dichVus", JSON.stringify(dichVus));

      createContract(formData).then(request=>{
        if(request.status === 200 && request.statusText === ""){
          navigate(`/${pathUser.LIST_ORDER}`);
        }
      })

      //navigation
    }
  };

  console.log(event);

  return (
    <Styled>
      <div style={{ background: "#ccc" }} id="contract">
        <div style={{ fontSize: "20px" }} className="flex flex-col gap-1">
          <span>Nội dung hợp đồng</span>
          <span style={{ fontWeight: "bold" }}>{event.nameEvent}</span>
        </div>
        <div className="information-customer mt-2">
          <span className="decription">THÔNG TIN KHÁCH HÀNG</span>
          <div>
            <label htmlFor="name">Họ tên:</label>
            <span>
              <input
                disabled
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                value={name}
              />
            </span>
          </div>
          <div>
            <label htmlFor="gmail">Gmail:</label>
            <span>
              <input
                disabled
                onChange={(e) => setGmail(e.target.value)}
                id="gmail"
                type="text"
                value={gmail}
              />
            </span>
          </div>
          <div>
            <label htmlFor="phoneNumber">Số điện thoại:</label>
            <span>
              <input
                disabled
                onChange={(e) => setPhoneNumber(e.target.value)}
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
              />
            </span>
          </div>
        </div>
        <div className="information-event mt-3">
          <span className="decription">CÁC THÔNG TIN VỀ SỰ KIỆN</span>
          <div>
            <div>
              <span className="flex-none">Tên sự kiện:</span>
              <span>{event.nameEvent}</span>
            </div>
            <div>
              <span>Tên công ty:</span>
              <span>{event.nameCompany}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Thời gian bắt đầu:</span>
              <span>{moment(event.startTime).format("HH:mm DD-MM-YYYY")}</span>
            </div>
            <div>
              <span>Thời gian kết thúc:</span>
              <span>{moment(event.endTime).format("HH:mm DD-MM-YYYY")}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Số lượng khách mời:</span>
              <span>{event.numberOfGuest}</span>
            </div>
            <div>
              <span> Kinh phí:</span>
              <span> {event.expense} vnd</span>
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
              {service.map((item, index) => (
                <tr key={index} className="service-item">
                  <td>{index + 1}</td>
                  <td>{item.service.tenDichVu}</td>
                  <td>{`${item.service.gia} / ${item.service.donViTinh}`}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.service.gia}</td>
                  <td>{item.input}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: "block", textAlign: "right" }}>
            <span className="text-right mr-10">
              Tổng tiền:
              {service.reduce(
                (accumulator, currentValue) =>
                  accumulator +
                  currentValue.quantity * currentValue.service.gia,
                0
              )}{" "}
              VND
            </span>
          </div>
        </div>
        <div className="stipulation-term gap-2">
          <spam>{"Các Điều khoản quy định".toUpperCase()}</spam>
          <span>
            1.1 The Android Software Development Kit (referred to in the License
            Agreement as the "SDK" and specifically including the Android system
            files, packaged APIs, and Google APIs add-ons) is licensed to you
            subject to the terms of the License Agreement. The License Agreement
            forms a legally binding contract between you and Google in relation
            to your use of the SDK. 1.2 "Android" means the Android software
            stack for devices, as made available under the Android Open Source
            Project, which is located at the following URL:
            https://source.android.com/, as updated from time to time. 1.3 A
            "compatible implementation" means any Android device that (i)
            complies with the Android Compatibility Definition document, which
            can be found at the Android compatibility website
            (https://source.android.com/compatibility) and which may be updated
            from time to time; and (ii) successfully passes the Android
            Compatibility Test Suite (CTS). 1.4 "Google" means Google LLC,
            organized under the laws of the State of Delaware, USA, and
            operating under the laws of the USA with principal place of business
            at 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
          </span>
        </div>
        <div>
          <label htmlFor="check" className="">
            <input
              type="checkbox"
              value={regulation}
              onChange={(e) => {
                setRegulation(e.target.checked);
              }}
              className="mr-1"
              name=""
              id="check"
            />
            Bạn có đồng ý với các điều khoản trên không?
            <br />
            Sau khi xác nhận sẽ có nhân viên liên hệ bạn trong 24h để xác nhận
            đặt sự kiện đặt sự kiện.
          </label>
        </div>
        <div className="mt-4">
          <button onClick={() => handlConfirm()} className="btn">
            Xác nhận
          </button>
        </div>
        <div className="mt-4">
          {error && <span className="error">{error}</span>}
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

export default Contract;
