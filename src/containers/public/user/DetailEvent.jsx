import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icons from "../../../ultis/icons";
import { useParams } from "react-router-dom";
import { getEventByID } from "../../../apis/EventAPI";
import moment from "moment";

const DetailEvent = () => {
  const { LuCalendarDays } = icons;
  const { idEvent } = useParams();
  document.title = "Chi tiết sự kiện";
  const [event, setEvent] = useState();

  useEffect(() => {
    getEventByID(idEvent).then((evnetServer) => {
      if (evnetServer.status === 200 && evnetServer.statusText === "") {
        setEvent(evnetServer.data);
      }
    });
  }, []);

  return (
    <Styled>
      <div id="detail-event">
        {event === undefined ? (
          <></>
        ) : (
          <>
            <span className="title">{event.tenSuKien}</span>
            <div className="flex gap-2">
              <LuCalendarDays size={24} />
              <span>{moment(event.ngayToChuc).format("DD-MM-YYYY")}</span>
            </div>
            <hr />
            <div
              dangerouslySetInnerHTML={{ __html: event.noiDung }}
              className="content"
            ></div>

            <div
              style={{ color: "blue" }}
              className="font-bold flex flex-col gap-1"
            >
              <span>Tin: {event.tin}</span>
              <span>Ảnh: {event.anh}</span>
            </div>
          </>
        )}
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  #detail-event {
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .title {
      color: blue;
      font-weight: bold;
      font-size: 18px;
    }

    .content {
      text-align: justify;
      padding: 0 24px;
    }

    hr {
      border-top: 2px solid #ccc;
    }

    img:hover {
      opacity: 1;
      cursor: default;
    }
  }
`;

export default DetailEvent;
