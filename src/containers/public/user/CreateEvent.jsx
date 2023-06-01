import React, { useState } from "react";
import { EventItem } from "../../../components";
import { useLocation, useNavigate } from "react-router-dom";

function CreateEvent() {
  /*
  const categoryEvents = [
    "Tiệc cưới",
    "Tốt nghiệp",
    "Tân gia",
    "Ra mắt sản phẩm",
    "Kỷ niệm thành lập",
  ];

  const categoryTopic = ["Xe", "Bất động sản", "Đại học", "Học bổng"];
  */
 

  const navigate = useNavigate();
  const locationHook = useLocation();
  const [nameEvent, setNameEvent] = useState(() => {
    const event = locationHook.state ?? {};
    return event?.tenSuKien;
  });

  const [idEvent, setIdEvent] = useState(() => {
    const event = locationHook.state ?? {};
    return event?.maSuKien;
  });

  const [nameCompany, setNameCompany] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [expense, setExpense] = useState("");
  const [numberOfGuest, setNumberOfGuest] = useState("");
  const [location, setLocation] = useState("");
  const [otherRequire, setOtherRequire] = useState("");
  const [error, setError] = useState("");
  const handleContinue = () => {
    if (
      nameEvent.length === 0 ||
      nameCompany.length === 0 ||
      startTime.length === 0 ||
      endTime.length === 0 ||
      expense.length === 0 ||
      numberOfGuest.length === 0 ||
      location.length === 0
    ) {
      setError("Vui lòng nhập đầy đủ dữ liệu");
    } else {
      setError("");
      const dataEvent = {
        nameEvent,
        nameCompany,
        startTime,
        endTime,
        expense,
        numberOfGuest,
        location,
        otherRequire,
        idEvent
      };
      navigate("/service", {state: dataEvent});
    }
  };

  return (
    <>
      <div className="create-event">
        <div>
          <div>
            <label htmlFor="nameEvent">Tên sự kiện</label>
            <input
              value={nameEvent}
              onChange={(e) => setNameEvent(e.target.value)}
              type="text"
              id="nameEvent"
            />
          </div>

          <div>
            <label htmlFor="nameCompany">Tên công ty/cơ quan/tổ chức</label>
            <input
              value={nameCompany}
              onChange={(e) => setNameCompany(e.target.value)}
              type="text"
              id="nameCompany"
            />
          </div>
        </div>

        {/* <div>
          <div>
            <label htmlFor="category-event">Loại sự kiện</label>
            <select id="category-event">
              <option value={0}>Chọn loại sự kiện</option>
              {categoryEvents.map((item, index) => (
                <option key={index} value={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="topic">Chủ đề</label>
            <select id="topic">
              <option value={0}>Chọn chủ đề</option>
              {categoryTopic.map((item, index) => (
                <option key={index} value={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div> */}

        <div>
          <div>
            <label htmlFor="time-start">Thời gian bắt đầu</label>
            <input
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              type="datetime-local"
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              id="time-start"
            />
          </div>
          <div>
            <label htmlFor="time-end">Thời gian kết thúc</label>
            <input
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type="datetime-local"
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              id="time-end"
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="expense">Kinh phí mong muốn</label>
            <input
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              type="text"
              id="expense"
            />
          </div>

          <div>
            <label htmlFor="numberOfGuest">Số lượng khách mời tham gia</label>
            <input
              value={numberOfGuest}
              onChange={(e) => setNumberOfGuest(e.target.value)}
              type="number"
              id="numberOfGuest"
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="location">Địa điểm</label>
            <textarea
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              rows="3"
              type="text"
              id="location"
            />
          </div>

          <div style={{ gap: "20px" }}>
            <label className="flex-none" htmlFor="otherRequire">
              Yêu cầu khác
            </label>
            <textarea
              value={otherRequire}
              onChange={(e) => setOtherRequire(e.target.value)}
              id="otherRequire"
              type="text"
              rows="5"
            />
          </div>
        </div>
        <div>{<span id="error">{error}</span>}</div>
        <div style={{marginTop: "0"}}>
          <div
            style={{
              width: "100%",
              maxWidth: "none",
              justifyContent: "center",
            }}
          >
            <button onClick={() => handleContinue()} className="btn">
              Tiếp tục
            </button>
          </div>
        </div>
      </div>

      {/* <div id="event">
        <EventItem />
        <EventItem />
        <EventItem />
      </div> */}
    </>
  );
}

export default CreateEvent;
