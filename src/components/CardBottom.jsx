import React from "react";
import { useNavigate } from "react-router-dom";

function CardBottom({ item }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/abc")}
      className="w-1/4 justify-between flex flex-col cursor-pointer ml-2"
    >
      <img src={item.image} alt={item.title} />
      <span>{item.title}</span>
    </div>
  );
}

export default CardBottom;
