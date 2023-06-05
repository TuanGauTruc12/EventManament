import React from "react";
import icons from "../ultis/icons.js";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = null ?? JSON.parse(localStorage.getItem("user"));

  const { BiHome, BiSearch, FaUser } = icons;
  return (
    <div className="flex justify-between mt-2 items-center header mb-4">
      <div className="flex gap-4">
        <BiHome
          className="cursor-pointer"
          onClick={() => navigate("/")}
          size={30}
        />
        <div className="flex gap-4">
          <span className="cursor-pointer" onClick={()=>navigate('/')}>Trang chủ</span>
          <span className="cursor-pointer" onClick={()=>navigate('/event')}>Sự kiện</span>
        </div>
      </div>
      <div className="flex gap-4">
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
                  <img
                    className="rounded-[50%] max-w-[55px]"
                    alt="img"
                    src={user.image}
                  />
                </div>
              )}
            </span>

            <ul>
              {user === null ? (
                <li className="flex w-full flex-col text-[13px] justify-end">
                  <span
                    //                    to={"/login"}
                    onClick={() => {
                      localStorage.setItem(
                        "user",
                        JSON.stringify({
                          user_name: "Phạm Anh Tuấn",
                          image:
                            "https://vapa.vn/wp-content/uploads/2022/12/anh-canh-dep-001-1.jpg",
                        })
                      );
                      navigate("/");
                    }}
                    className="p-3 mt-2 cursor-pointer hover:bg-[#f38609]"
                  >
                    Đăng nhập
                  </span>
                  <NavLink
                    to={"/register"}
                    className="p-3 cursor-pointer hover:bg-[#f38609]"
                  >
                    Đăng ký
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="flex w-full flex-col text-[13px] justify-end">
                    <span className="mt-2 p-4 cursor-pointer hover:bg-[#f38609]">
                      {user.user_name}
                    </span>

                    <span
                      onClick={() => navigate("/my-event")}
                      className="mt-2 p-4 cursor-pointer hover:bg-[#f38609]"
                    >
                      Sự kiện đã tạo
                    </span>

                    <span
                      onClick={() => {
                        navigate("/create-event");
                      }}
                      className="mt-2 p-4 cursor-pointer hover:bg-[#f38609]"
                    >
                      Tạo sự kiện
                    </span>

                    <span
                      onClick={() => {
                        localStorage.removeItem("user");
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
  );
}

export default Header;
