import React from "react";
import { EventItem } from "../../../components";

document.title = "Sự kiện";
const Event = () => {
  return (
    <div className="w-full flex flex-col mt-3 text-center">
      <div>Lựa chọn loại sự kiện bạn muốn tổ chức?</div>

      <div id="event">
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
    </div>
  );
};

export default Event;
