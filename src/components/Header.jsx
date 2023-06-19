import React, { useState } from "react";
import icons from "../ultis/icons.js";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pathUser } from "../ultis/path.js";

function Header() {
  const navigate = useNavigate();
  const user = null ?? JSON.parse(localStorage.getItem("user"));
  const { BiHome, BiSearch, FaUser } = icons;

  return (
    <Styled>
      <div className="flex justify-between pt-8 items-center header pb-4">
        <div className="flex gap-4 header-left">
          <BiHome
            className="cursor-pointer"
            onClick={() => navigate("/")}
            size={30}
          />
          <div className="flex gap-4">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Trang chủ
            </span>
            <span className="cursor-pointer" onClick={() => navigate("/event")}>
              Sự kiện
            </span>
          </div>
        </div>
        <div className="flex gap-4 mr-[120px]">
          <div className="flex gap-2">
            <input className="border border-solid" type="text" />
            <BiSearch size={30} />
          </div>

          <div className="cursor-pointer relative hover:bg-main-primary-green">
            <div className="nav flex flex-col w-full">
              <span>
                {user === null ? (
                  <FaUser size={26} />
                ) : (
                <div className="cursor-pointer">
                    {user.image === '' || user.image === "null" ? (
                      <div
                        style={{ width: "32px", height: "32px", backgroundColor: "#9ef7f5", borderRadius: "50%" }}
                      ></div>
                    ) : (
                      <img
                        className="rounded-[50%]"
                        alt="img"
                        src={user.image}
                      />
                    )}
                  </div>
                )}
              </span>

              <ul style={{ zIndex: "200" }}>
                {user === null ? (
                  <li className="flex w-full flex-col text-[13px] justify-end">
                    <NavLink
                      to={`/${pathUser.LOGIN}`}
                      className="p-3 mt-2 cursor-pointer hover:bg-[#f38609]"
                    >
                      Đăng nhập
                    </NavLink>
                    <NavLink
                      to={`/${pathUser.REGISTER}`}
                      className="p-3 cursor-pointer hover:bg-[#f38609]"
                    >
                      Đăng ký
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="flex w-full flex-col text-[13px] justify-end">
                      <span
                        onClick={() => {
                          navigate("/persional");
                        }}
                        className="mt-2 p-4 cursor-pointer hover:bg-[#f38609]"
                      >
                        Xem thông tin cá nhân
                      </span>

                      <span
                        onClick={() => {
                          navigate("/list-order");
                        }}
                        className="mt-2 p-4 cursor-pointer hover:bg-[#f38609]"
                      >
                        Xem thông tin giỏ hàng
                      </span>

                      <span
                        onClick={() => {
                          localStorage.removeItem("user");
                          window.location.reload(true);
                          navigate("/");
                        }}
                        className="mt-2 p-4 cursor-pointer hover:bg-[#f38609]"
                      >
                        Đăng xuất
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  .header-left {
    span {
      font-size: 22px;
    }

    span:hover {
      text-decoration: underline;
      color: blue;
    }
  }

  .nav {
    ul > li > span,
    ul > li > a {
      color: black !important;
      font-weight: bold;
      width: 100% !important;
    }
    ul {
      background-color: #ccc;
    }
  }

  .nav > span > div {
    img {
      max-width: 32px;
      max-height: 32px;
      object-fit: cover;
    }
  }
`;

export default Header;
