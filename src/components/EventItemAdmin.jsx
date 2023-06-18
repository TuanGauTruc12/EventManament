import React from "react";
import { NavLink } from "react-router-dom";
import icons from "../ultis/icons";
import { deleteEvent } from "../apis/EventAPI";
import { deleteById } from "../apis/BaseAPI";
import { pathAPI } from "../ultis/path";

const EventItemAdmin = ({ event, index, getAllEvent }) => {
  const handleDeleteEvent = (event) => {
    if (
      window.confirm(
        `Bạn có chắc muốn xóa sự kiện có tên ${event.tenSuKien} chứ?`
      )
    ) {
      deleteById(event.maSuKien, pathAPI.events).then((responseEvent) => {
        if (responseEvent.status === 200 && responseEvent.statusText === "") {
          getAllEvent();
        }
      });
    }
  };
  const { AiFillDelete, AiTwotoneEdit } = icons;
  return (
    <>
        <td style={{ width: "64px" }}>{++index}</td>
        <td>{event?.tenSuKien}</td>
        <td style={{ width: "130px", height: "130px" }}>
          <img
            src={`${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${event?.hinhSuKien}`}
            alt={event?.tenSuKien}
          />
        </td>
        <td>{event?.moTaSuKien}</td>
        <td>{event?.ngayToChuc}</td>
        <td>{event?.ngayKetThuc}</td>
        <td>{event?.diaDiem}</td>
        <td>{event?.loaiSuKien?.tenLoaiSuKien}</td>
        <td>
          <div className="flex justify-center gap-2 items-center">
            <span className="edit">
              <NavLink to={`/admin/edit-event/${event?.maSuKien}`}>
                <AiTwotoneEdit size={30} />
              </NavLink>
            </span>
            <span className="delete">
              <AiFillDelete color="black"
                size={30}
                onClick={() => handleDeleteEvent(event)}
              />
            </span>
          </div>
        </td>
    </>
  );
};

export default EventItemAdmin;
