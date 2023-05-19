import React from "react";
import { useNavigate } from "react-router-dom";

const EventItem = () => {
  const navvigate = useNavigate();
  const handleEventItem = () => {
    navvigate("/service");
  };

  return (
    <div className="item-event">
      <img
        src="https://vapa.vn/wp-content/uploads/2022/12/anh-dep-lam-hinh-nen-002.jpg"
        alt="img"
        onClick={handleEventItem}
      />
      <div className="flex flex-col gap-1">
        <span>Sự kiện 1</span>
        <span>
          Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả 1 Mô tả
          1 Mô tả 1 Mô tả 1 Mô tả 1{" "}
        </span>
      </div>
    </div>
  );
};

export default EventItem;
