import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContractDetail = ({ isShow }) => {

  const navigation = useNavigate();

  const saveContract = () => {
    console.log("Lưu thông tin");
    //
    navigation('/admin/contract-detail');
  };
  const editContract = () => {
    navigation('/admin/contract-detail-show');
  };
  const approvalContract = () => {
    navigation('/admin/');
  };

  return (
    <Styled>
      <div id="contract-detail">
        <div className="information-customer">
          <span className="decription">THÔNG TIN KHÁCH HÀNG</span>
          <div>
            <label htmlFor="name">Họ tên:</label>
            {isShow === undefined ? (
              <>Phạm Anh Tuấn</>
            ) : (
              <>
                <input type="text" id="name" />
              </>
            )}
          </div>
          <div>
            <label htmlFor="gmail">Gmail:</label>
            {isShow === undefined ? (
              <span>tuan@gmail.com</span>
            ) : (
              <input type="email" id="gmail" />
            )}
          </div>
          <div>
            <label htmlFor="phoneNumber">Số điện thoại: </label>
            {isShow === undefined ? (
              <>0941502499</>
            ) : (
              <input id="phoneNumber" type="tel" />
            )}
          </div>
        </div>
        <div className="information-event">
          <span className="decription">CÁC THÔNG TIN VỀ SỰ KIỆN</span>
          <div>
            <label id="nameEvent">Tên sự kiện:</label>
            {isShow === undefined ? (
              <span>Sự kiện 1</span>
            ) : (
              <input type="text" />
            )}
          </div>
          <div>
            <label>Thời gian bắt đầu:</label>
            {isShow === undefined ? (
              <span>14/5/2023</span>
            ) : (
              <input type="datetime-local" />
            )}
          </div>
          <div>
            <label>Thời gian kết thúc:</label>
            {isShow === undefined ? (
              <span>20/5/2023</span>
            ) : (
              <input type="datetime-local" />
            )}
          </div>
          <div>
            <label>Số lượng khách mời:</label>
            {isShow === undefined ? <span>4</span> : <input type="number" />}
          </div>
        </div>
        <div className="information-service">
          <span>CÁC DỊCH VỤ YÊU CẦU</span>
          <div>.....</div>
        </div>
        <div className="button">
          {isShow === undefined ? (
            <>
              <button onClick={() => editContract()} className="btn">
                Chỉnh sửa
              </button>
              <button onClick={() => approvalContract()} className="btn">
                Duyệt
              </button>
            </>
          ) : (
            <>
              <button onClick={() => saveContract()} className="btn">
                Lưu thông tin
              </button>
            </>
          )}
        </div>
      </div>
    </Styled>
  );
};

export default ContractDetail;

const Styled = styled.div`
  #contract-detail {
    .information-customer,
    .information-event {
      gap: 8px;
      display: flex;
      flex-direction: column;
    }

    .information-customer {
      div {
        width: 300px;
        justify-content: space-between;
      }
    }

    .information-event {
      div {
        width: 400px;
        justify-content: space-between;
        input {
          width: 200px;
        }
      }
    }
    .button {
      justify-content: end;
      display: flex;
      gap: 8px;
      button {
        text-transform: uppercase;
      }
    }
  }
`;
