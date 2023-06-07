import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAll } from "../../../apis/BaseAPI";
import EventItemAdmin from "../../../components/EventItemAdmin";
import ReactPaginate from "react-paginate";
import icons from "../../../ultis/icons";
import { useNavigate } from "react-router-dom";
import { pathAdmin } from "../../../ultis/path";

const EventList = () => {
  document.title = "Danh sách sự kiện";
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const { AiOutlineArrowRight, AiOutlineArrowLeft } = icons;
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [events, setEvents] = useState([]);

  const getAllEvent = () => {
    getAll("events").then((eventsResponse) => {
      if (eventsResponse.status === 200 && eventsResponse.statusText === "") {
        setEvents(eventsResponse.data);
      }
    });
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % events.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = events.slice(itemOffset, endOffset);
    setPageCount(Math.ceil(events.length / itemsPerPage));
    setCurrentItems(currentItems);
  }, [events]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = events.slice(itemOffset, endOffset);
    setCurrentItems(currentItems);
  }, [itemOffset]);

  useEffect(() => {
    getAllEvent();
  }, []);

  return (
    <Styled>
      <div id="event">
        <button onClick={()=>{navigate(pathAdmin.CREATE_EVENT)}} className="btn">Thêm sự kiện</button>
        <table className="events">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sự kiên</th>
              <th>Hình ảnh</th>
              <th>Mô tả</th>
              <th>Ngày tổ chức</th>
              <th>Ngày kết thúc</th>
              <th>Địa điểm</th>
              <th>Loại sự kiện</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((event, index) => (
              <tr key={index} className="event-item">
                <EventItemAdmin getAllEvent={getAllEvent} event={event} index={index} />
              </tr>
            ))}
          </tbody>
        </table>
        <div id="page" className="mt-2">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<AiOutlineArrowRight size={30} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            className="flex gap-6 justify-center items-center cursor-default"
            pageClassName="text-2xl p-4"
            activeClassName="bg-main-primary-orange text-black"
            pageCount={pageCount}
            disabledClassName="opacity-20"
            disabledLinkClassName="cursor-default"
            previousLabel={<AiOutlineArrowLeft size={30} />}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  .edit {
    background-color: #ffbb33;
    color: white;
  }
  .delete {
    background-color: #ef5350;
    cursor: pointer;
  }
  #event > .events {
    padding: 0;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  img:hover {
    opacity: 1;
    cursor: default;
  }

  .edit, .delete{
    padding: 4px;
  }

  button{
    background-color: #9ccc65;
  }
`;

export default EventList;
