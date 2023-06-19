import React from "react";
import { useNavigate } from "react-router-dom";

const EventItem = ({ event }) => {
  const navvigate = useNavigate();

  const handleEventItem = (maSuKien) => {
    navvigate("/detail-event/" + maSuKien);
  };

  console.log(123);

  return (
    <div className="item-event">
      <img
      width={300}
      height={200}
      style={{maxWidth: "300px", height: "200px", objectFit: "cover"}}
        src={`${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${event?.hinhSuKien}`}
        alt="img"
        onClick={()=>handleEventItem(event.maSuKien)}
      />
      <div className="flex flex-col gap-3">
        <span className="cursor-pointer" onClick={()=>handleEventItem(event.maSuKien)}>{event?.tenSuKien}</span>
        <span>{event?.moTaSuKien}</span>
      </div>
    </div>
  );
};

export default EventItem;
