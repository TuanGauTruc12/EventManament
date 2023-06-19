import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pathUser, pathAPI } from "../../../ultis/path.js";
import { useState } from "react";
import { useEffect } from "react";
import { getById } from "../../../apis/BaseAPI.js";
import icons from "../../../ultis/icons.js";

const Persional = () => {
  const { AiTwotoneEdit } = icons;
  const navigate = useNavigate();
  const userLocalStorage = JSON.parse({} && localStorage.getItem("user"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  if (userLocalStorage === undefined) {
    navigate("/login", { state: { page: pathUser.PERSIONAL } });
  }

  useEffect(() => {
    getById(userLocalStorage.maUser, pathAPI.custommer).then((response) => {
      if (response.status === 200 && response.statusText === "") {
        setUser(response.data);
      }
    });
  }, []);

  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  useEffect(() => {
    setName(user?.tenKhachHang);
    setEmail(user?.email);
    setPhoneNumber(user?.soDienThoai);
    setPassword(user?.password);
    setAddress(user?.diaChi);
  }, [user]);

  return (
    <Styled>
      <div className="avartar">
        <div>
          {user.image === "" || user.image === "null" ? (
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#9ef7f5",
                borderRadius: "50%",
              }}
            ></div>
          ) : (
            <img className="rounded-[50%]" alt="img" src={user?.image} />
          )}
          <label htmlFor="choose-file">
            <input
              type="file"
              onChange={(e) => handleChooseImage(e)}
              accept="image/*"
              id="choose-file"
              hidden
            />
            <AiTwotoneEdit size={30} />
          </label>
        </div>
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="Nhập email" id="email" />
      </div>
      <div className="phoneNumber">
        <label htmlFor="phoneNumber">Số điện thoại</label>
        <input
          value={phoneNumber}
          type="tel"
          placeholder="Nhập số điện thoại"
          id="phoneNumber"
        />
      </div>
      <div className="address">
        <label htmlFor="address">Địa chỉ</label>
        <input
          value={address}
          type="text"
          placeholder="Nhập địa chỉ"
          id="address"
        />
      </div>
      <div className="password">
        <label htmlFor="password">Mật khẩu</label>
        <input
          value={password}
          type="password"
          placeholder="Nhập mật khẩu"
          id="password"
        />
      </div>
      <div className="change-info">
        <button className="btn">Cập nhật</button>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  margin: 16px 0 8px;
  height: 70vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 20px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 2px solid #000;
    height: 10%;
    justify-content: center;
    gap: 8px;

    .btn {
      padding: 16px;
      margin: 0 auto;
      background-color: #3cb63c;
    }
  }

  .name {
    align-items: center;
    justify-content: center;
    span {
      font-size: 30px;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  .avartar {
    height: 40%;
    justify-content: center;
    align-items: center;
    border-bottom: unset;

    div {
      position: relative;
      height: 100%;
      width: fit-content;
      border-bottom: unset;
      align-items: center;
      justify-content: center;
    }
    img {
      opacity: 1;
      max-width: 300px;
      max-height: 300px;
      border-radius: 50%;
      cursor: default;
    }

    label {
      position: absolute;
      top: 10%;
      right: 5%;
      cursor: pointer;
    }
  }

  .email,
  .phoneNumber,
  .password,
  .address {
    padding: 0 48px;
    gap: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    label {
      flex: none;
    }
    input {
      width: 90%;
      height: max-content;
      padding: 8px 0;
      border: unset;
      font-size: 20px;
    }
  }

  div:last-child {
    border-bottom: unset;
  }
`;

export default Persional;
