import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pathUser, pathAPI } from "../../../ultis/path.js";
import { useState } from "react";
import { useEffect } from "react";
import { getById } from "../../../apis/BaseAPI.js";
import icons from "../../../ultis/icons.js";
import { pathImage } from "../../../ultis/path.js";
import { updateKhachHang } from "../../../apis/KhachHangAPI.js";

const userLocalStorage = JSON.parse({} && localStorage.getItem("user"));
const Persional = () => {
  const { AiTwotoneEdit } = icons;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState();
  const [image, setImage] = useState();

  if (userLocalStorage === null) {
    navigate("/login", { state: { page: pathUser.PERSIONAL } });
  }

  useEffect(() => {
    getById(userLocalStorage?.maUser, pathAPI.custommer).then((response) => {
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

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

  const handleUpdate = () => {
    if (password < 8) {
      //error pass
    } else {
      const formData = new FormData();
      formData.append("id_user", user.maKhachHang);
      formData.append("phoneNumber", phoneNumber);
      formData.append("address", address);
      formData.append("password", password);
      formData.append("file", image);

      updateKhachHang(formData).then((response) => {
        if (
          response.status === 200 &&
          response.statusText === "" &&
          response.data === ""
        ) {
          window.location.reload(true);
          window.location.reload(false);
        }
      });
    }
  };

  return (
    <Styled>
      <div className="avartar">
        <div>
          {user?.image === undefined ||
          user?.image === null ||
          user?.image === "" ? (
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "#9ef7f5",
                borderRadius: "50%",
              }}
            ></div>
          ) : (
            <img
              className="rounded-[50%]"
              alt="img"
              src={image?.preview ?? pathImage +"/" + user?.image}
            />
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
        <input
          disabled
          value={email}
          type="email"
          placeholder="Nhập email"
          id="email"
        />
      </div>
      <div className="phoneNumber">
        <label htmlFor="phoneNumber">Số điện thoại</label>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          type="tel"
          placeholder="Nhập số điện thoại"
          id="phoneNumber"
        />
      </div>
      <div className="address">
        <label htmlFor="address">Địa chỉ</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          type="text"
          placeholder="Nhập địa chỉ"
          id="address"
        />
      </div>
      <div className="password">
        <label htmlFor="password">Mật khẩu</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Nhập mật khẩu"
          id="password"
        />
      </div>
      <div className="change-info">
        <button onClick={() => handleUpdate()} className="btn">
          Cập nhật
        </button>
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
    z-index: 1000;
  }
`;

export default Persional;
