import React from "react";
import { useNavigate } from "react-router-dom";

const EventItem = ({ hinhSuKien, moTaSuKien, tenSuKien, maSuKien }) => {
  const navvigate = useNavigate();
  const handleEventItem = () => {
    navvigate("/service");
  };

  return (
    <div className="item-event">
      <img
      width={300}
      height={200}
      style={{maxWidth: "300px", height: "200px", objectFit: "cover"}}
        src={`${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${hinhSuKien}`}
        alt="img"
        onClick={handleEventItem}
      />
      <div className="flex flex-col gap-1">
        <span>{tenSuKien}</span>
        <span>{moTaSuKien}</span>
      </div>
    </div>
  );
};

export default EventItem;
