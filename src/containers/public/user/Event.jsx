import React, { useEffect, useState } from "react";
import { EventItem } from "../../../components";
import { getAll } from "../../../apis/BaseAPI";
import { pathAPI } from "../../../ultis/path";

document.title = "Sự kiện";
const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAll(pathAPI.events).then((event) => {
      if (event.status === 200 && event.statusText === "") {
        setEvents(event.data);
      }
    });
  }, []);

  return (
    <div className="w-full flex flex-col mt-3 text-center">
      <div id="event">
        {events.map((event, index) => (
          <EventItem
            hinhSuKien={event?.hinhSuKien}
            key={index}
            maSuKien={event.maSuKien}
            moTaSuKien={event.moTaSuKien}
            tenSuKien={event.tenSuKien}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
