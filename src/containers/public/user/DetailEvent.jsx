import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icons from "../../../ultis/icons";
import { useNavigate, useParams } from "react-router-dom";
import { getEventByID } from "../../../apis/EventAPI";
import moment from "moment";
import { Error } from "./index";

const DetailEvent = () => {
  const { LuCalendarDays } = icons;
  const { idEvent } = useParams();
  document.title = "Chi tiết sự kiện";
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getEventByID(idEvent).then((evnetServer) => {
      if (
        evnetServer.status === 200 &&
        evnetServer.statusText === "" &&
        evnetServer.data !== ""
      ) {
        setEvent(evnetServer.data);
      } else {
        setEvent(undefined);
      }
    });
  }, []);

  const dateOfOrganization = moment(event?.ngayToChuc).format("DD-MM-YYYY");
  const parts = dateOfOrganization.split("-");

  return (
    <Styled>
      <div id="detail-event">
        {event === undefined ? (
          <Error />
        ) : (
          <>
            <span className="title">{event.tenSuKien}</span>
            <div className="flex gap-2">
              <LuCalendarDays size={24} />
              <span>{dateOfOrganization}</span>
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
            <div className="flex justify-center mt-2">
              {new Date(
                parseInt(parts[2], 10),
                parseInt(parts[1], 10) - 1,
                parseInt(parts[0], 10)
              ) < new Date() ? (
                <></>
              ) : (
                <button
                  onClick={() => {
                    navigate("/create-event", { state: { event: event } });
                  }}
                  className="btn"
                >
                  Tạo sự kiện
                </button>
              )}
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
