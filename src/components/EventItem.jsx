import React from "react";

const EventItem = () => {
  return (
    <div className="item-event">
      <img
        src="https://vapa.vn/wp-content/uploads/2022/12/anh-dep-lam-hinh-nen-002.jpg"
        alt="img"
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
