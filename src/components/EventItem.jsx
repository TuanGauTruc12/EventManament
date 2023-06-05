import React from "react";
import { useNavigate } from "react-router-dom";

const EventItem = ({ event }) => {
  const navvigate = useNavigate();

  const handleEventItem = (event) => {
    navvigate("/create-event", {state: event});
  };

  return (
    <div className="item-event">
      <img
      width={300}
      height={200}
      style={{maxWidth: "300px", height: "200px", objectFit: "cover"}}
        src={`${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${event?.hinhSuKien}`}
        alt="img"
        onClick={()=>handleEventItem(event)}
      />
      <div className="flex flex-col gap-3">
        <span>{event?.tenSuKien}</span>
        <span>{event?.moTaSuKien}</span>
      </div>
    </div>
  );
};

export default EventItem;
