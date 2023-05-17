import React from "react";
import { EventItem } from "../../../components";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const categoryEvents = [
    "Tiệc cưới",
    "Tốt nghiệp",
    "Tân gia",
    "Ra mắt sản phẩm",
    "Kỷ niệm thành lập",
  ];

  const categoryTopic = ["Xe", "Bất động sản", "Đại học", "Học bổng"];
  const navigate = useNavigate();

  return (
    <>
      <div className="create-event">
        <div>
          <div>
            <label htmlFor="nameEvent">Tên sự kiện</label>
            <input type="text" id="nameEvent" className="active" />
          </div>

          <div>
            <label htmlFor="nameCompany">Tên công ty/cơ quan/tổ chức</label>
            <input type="text" id="nameCompany" className="active" />
          </div>
        </div>

        <div>
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
        </div>

        <div>
          <div>
            <label htmlFor="time-start">Thời gian bắt đầu</label>
            <input
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
            <input type="text" id="expense" />
          </div>

          <div>
            <label htmlFor="numberOfGuest">Số lượng khách mời tham gia</label>
            <input type="number" id="numberOfGuest" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="location">Địa điểm</label>
            <textarea rows="3" type="text" id="location" />
          </div>

          <div style={{ gap: "20px" }}>
            <label className="flex-none" htmlFor="otherRequire">
              Yêu cầu khác
            </label>
            <textarea id="otherRequire" type="text" rows="5" />
          </div>
        </div>

        <div>
          <div
            style={{
              width: "100%",
              maxWidth: "none",
              justifyContent: "center",
            }}
          >
            <button onClick={() => navigate("/service")} className="btn">
              Tiếp tục
            </button>
          </div>
        </div>
      </div>

      <div id="event">
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
    </>
  );
}

export default CreateEvent;
