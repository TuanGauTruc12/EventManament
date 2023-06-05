import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryItem = ({image, idEvent, nameEvent, decriptionEvent, dateEvent, locationEvent}) => {
  const navigate = useNavigate();
  return (
    <Styled>
      <div className="flex gap-3 category-item">
        <div>
          <img
            src={image}
            alt={nameEvent}
          />
        </div>
        <div className="flex-auto flex flex-col bg-blue-200 pr-4 gap-1 row-span-2">
          <span
            className="title"
            onClick={() =>
              navigate(`/detail-event/${idEvent}`)
            }
          >
            {nameEvent}</span>
          <span className="decription text-justify">
            {decriptionEvent}</span>
          <div className="flex justify-between gap-3">
            <span>Ngày tổ chức: {dateEvent}</span>
            <span>Địa điểm tổ chức: {locationEvent}</span>
          </div>
        </div>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  .category-item {
    margin: 16px 8px;

    img {
      height: 104px;
      object-fit: cover;
      width: 300px;
    }
    .decription {
      display: block;
      display: -webkit-box;
      max-width: 100%;
      height: 56px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 1.2;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title {
      font-size: large;
      font-weight: bold;
      width: fit-content;
      height: 18px;
      display: -webkit-box;
      font-size: 16px;
      line-height: 1.2;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .title:hover {
      cursor: pointer;
      color: blue;
    }
  }
`;

export default CategoryItem;
