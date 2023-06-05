import React from "react";
import icons from "../ultis/icons.js";
import { NavLink, useNavigate } from "react-router-dom";
import CardBottom from "./CardBottom";

const CategoryEventItem = ({
  arrayCardTop,
  arrayCardBottom,
  idCategory,
  nameCategory,
  event,
}) => {
  const { TbCalendarEvent, AiFillPlusCircle } = icons;
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col mt-4">
        <div className="flex gap-3">
          <TbCalendarEvent
            size={24}
            style={{ color: "white", background: "red" }}
          />
          <NavLink to={`/category/${idCategory}`} className="active">
            {nameCategory}
          </NavLink>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex flex-col w-3/4">
            <img
              src={arrayCardTop.find((item, index) => index === 0)?.image}
              alt={arrayCardTop.find((item, index) => index === 0)?.title}
            />
            <span
              onClick={() =>
                navigate("/detail-event/" + arrayCardTop.find((item, index) => index === 0)?.idEvent)
              }
              className="active"
            >
              {arrayCardTop.find((item, index) => index === 0)?.title}
            </span>
            <span>
              {arrayCardTop.find((item, index) => index === 0)?.decription}
            </span>
          </div>
          <div className="flex flex-col w-1/4 gap-6">
            <div className="flex flex-col border-b-2 gap-4 border-solid border-gray-200">
              <img
                src={arrayCardTop.find((item, index) => index === 1)?.image}
                alt={arrayCardTop.find((item, index) => index === 1)?.title}
              />
              <span onClick={() =>
                navigate(`/detail-event/${arrayCardTop.find((item, index) => index === 0)?.idEvent}`)
              } className="font-bold cursor-pointer">
                {arrayCardTop.find((item, index) => index === 1)?.title}
              </span>
            </div>

            {arrayCardTop
              .filter((item, index) => index !== 0 && index !== 1)
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col border-b-2 border-solid border-gray-200"
                  >
                    <span 
                     className="cursor-pointer">{item.title}</span>
                  </div>
                );
              })}
          </div>
        </div>
        {arrayCardBottom !== undefined ? (
          <>
            <div className="flex mt-4">
              {arrayCardBottom.map((item, index) => (
                <CardBottom key={index} item={item} />
              ))}
            </div>
            <div className="flex justify-end">
              <div className="w-fit flex cursor-pointer items-center mt-4 text-red-400 text-sm gap-1">
                <AiFillPlusCircle color="red" size={24} />
                <span onClick={() => {}}>Xem tất cả</span>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CategoryEventItem;
