import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { checkIsEmail } from "../../../ultis/valuedate";
import { login } from "../../../apis/KhachHangAPI";
import { useEffect } from "react";

const userLocalStorage = localStorage.getItem("user");
const Login = () => {
  document.title = "Đăng nhập";
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  console.log(userLocalStorage);

  useEffect(() => {
    if (userLocalStorage !== null) {
      navigate("/");
    }
  }, [userLocalStorage]);

  const handleLogin = () => {
    if (email.length === 0 || password.length === 0) {
      setError("Email và mật khẩu không được bỏ trống");
    } else if (!checkIsEmail(email)) {
      setError("Email bạn vừa nhập không hợp lệ. Vui lòng kiểm tra lại");
    } else {
      setError("");
      if (email === "tuan12345@gmail.com" && password === "admin123456") {
        navigate("/admin/");
        toast.success("Đăng nhập thành công");
      } else {
        //call api đăng nhập
        const formData = new FormData();
        formData.set("email", email);
        formData.set("password", password);

        login(formData).then((value) => {
          if (
            value.status === 200 &&
            value.statusText === "" &&
            value.data !== undefined
          ) {
            console.log(location.state);
            localStorage.setItem("user", JSON.stringify(value.data));
            if (location.state?.page === null) {
              navigate("/");
            } else {
              navigate(location.state.page);
            }
          }
        });
      }
    }
  };

  return (
    <Style>
      <div className="form shadow-2xl shadow-slate-500 p-10 flex flex-col gap-8">
        <div className="title w-full flex justify-center font-semibold text-2xl">
          <h3 className="title">ĐĂNG NHẬP</h3>
        </div>
        <div className="w-full flex flex-col gap-4 font-serif text-xl">
          <label className="inline-block" htmlFor="email">
            Nhập email
          </label>
          <input
            id="email"
            className="shadow-2xl email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-4 font-serif text-xl">
          <label htmlFor="password" className="flex-none">
            Nhập mật khẩu
          </label>
          <input
            id="password"
            className="shadow-2xl password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error.length === 0 ? (
          <></>
        ) : (
          <span className="text-red-500">{error}</span>
        )}
        <div className="w-full flex justify-center">
          <button onClick={() => handleLogin()} className="btn p-8">
            Đăng nhập ngay
          </button>
        </div>
        <div className="desc flex gap-4 text-xl items-center">
          <h3>Bạn chưa có tài khoản?</h3>
          <button
            className="btn"
            onClick={(e) => {
              navigate("/register");
            }}
          >
            Tạo mới
          </button>
        </div>
      </div>
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 48px;
  padding-top: 5%;

  button {
    padding: 12px 16px;
  }

  input {
    border-radius: 0.375rem;
    padding: 0.5rem;
    width: 100%;
  }
`;

export default Login;
