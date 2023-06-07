import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { pathAPI, title } from "../../../ultis/path";
import Editor from "./Editor";
import { getAll } from "../../../apis/BaseAPI";
import { createEvent, getEventByID, updateEvent } from "../../../apis/EventAPI";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { memo } from "react";

function EditEvent() {
  const { id } = useParams();
  document.title = title.EDIT_EVENT;
  const [event, setEvent] = useState();

  const navigate = useNavigate();
  const [categoryEvent, setCategoryEvent] = useState([]);
  const [selectCategoryEvent, setSelectCategoryEvent] = useState("");
  const [image, setImage] = useState();
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [nameEvent, setNameEvent] = useState("");
  const [decriptionEvent, setDecriptionEvent] = useState("");
  const [location, setLocation] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const [imagePerson, setImagePerson] = useState("");
  const [error, setError] = useState();
  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  const handleEditEvent = () => {
    //check data before send api
    const content = document.querySelector(".ql-editor").innerHTML;
    if (nameEvent.length === 0) {
      setError("Chưa nhập tên sự kiện");
    } else if (dateStart.length === 0) {
      setError("Chưa chọn ngày tổ chức");
    } else if (dateEnd.length === 0) {
      setError("Chưa chọn ngày kết thúc");
    } else if (decriptionEvent.length === 0) {
      setError("Chưa nhập mô tả");
    } else if (location.length === 0) {
      setError("Chưa nhập điạ điểm tổ chức");
    } else if (newEvent.length === 0) {
      setError("Chưa nhập tin");
    } else if (imagePerson.length === 0) {
      setError("Chưa nhập ảnh");
    } else if (selectCategoryEvent === 0 || selectCategoryEvent.length === 0) {
      setError("Chưa chọn loại dịch vụ");
    } else if (content.length === 11) {
      setError("Chưa nhập nội dung sự kiện");
    } else {
      setError();
      const eventForm = {
        maSuKien: event.maSuKien,
        tenSuKien: nameEvent,
        hinhSuKien: image === undefined ? event?.hinhSuKien : image.name,
        moTaSuKien: decriptionEvent,
        ngayToChuc: moment(dateStart).format("YYYY-MM-DD HH:mm:ss"),
        ngayKetThuc: moment(dateEnd).format("YYYY-MM-DD HH:mm:ss"),
        diaDiem: location,
        tin: newEvent,
        anh: imagePerson,
        noiDung: content,
        loaiSuKien: categoryEvent[selectCategoryEvent - 1],
      };
      let formData = new FormData();
      formData.append("suKien", JSON.stringify(eventForm));
      formData.append("file", image);

      updateEvent(formData).then((eventRequest) => {
        if (
          eventRequest.data === "SuccessFully" &&
          eventRequest.status === 200 &&
          eventRequest.statusText === ""
        ) {
          navigate("/admin/event-list");
        }
      });
    }
  };

  useEffect(() => {
    getAll(pathAPI.categoryService).then((category) => {
      if (category.status === 200 && category.statusText === "") {
        setCategoryEvent(category.data);
      }
    });
  }, []);

  useEffect(() => {
    getEventByID(id).then((response) => {
      if (response.status === 200 && response.statusText === "") {
        setEvent(response.data);
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

  useEffect(() => {
    setNameEvent(event?.tenSuKien);
    setDecriptionEvent(event?.moTaSuKien);
    setLocation(event?.diaDiem);
    setNewEvent(event?.tin);
    setImagePerson(event?.anh);
    setSelectCategoryEvent(event?.loaiSuKien?.maLoaiSuKien);
    setDateStart(moment(event?.ngayToChuc).format("YYYY-MM-DDTHH:mm:ss.SSS"));
    setDateEnd(moment(event?.ngayKetThuc).format("YYYY-MM-DDTHH:mm:ss.SSS"));
    if (document.querySelector(".ql-editor") !== null)
      document.querySelector(".ql-editor").innerHTML = `${event?.noiDung}`;
  }, [event]);

  return (
    <Styled>
      <div id="create-event-admin" className="mt-6">
        <div>
          <div>
            <label htmlFor="nameEvent">Tên sự kiện: </label>
            <input
              value={nameEvent}
              onChange={(e) => setNameEvent(e.target.value)}
              type="text"
              id="nameEvent"
            />
          </div>

          <div style={image === undefined ? {} : {}}>
            <label htmlFor="imageCoverEvent">Hình bìa: </label>

            {image === undefined ? (
              <div style={{ width: "75%" }} className="flex flex-col gap-4">
                <input
                  multiple
                  accept="image/*"
                  type="file"
                  id="imageCoverEvent"
                  onChange={(e) => handleChooseImage(e)}
                />
                <img
                  width={150}
                  height={150}
                  src={`${process.env.REACT_APP_API}/${process.env.REACT_APP_IMAGES}/${event?.hinhSuKien}`}
                  alt={event?.hinhSuKien}
                />
              </div>
            ) : (
              <div style={{ width: "75%" }} className="flex flex-col gap-4">
                <input
                  multiple
                  accept="image/*"
                  type="file"
                  id="imageCoverEvent"
                  onChange={(e) => handleChooseImage(e)}
                />
                <img src={image.preview} width={150} height={150} alt="img" />
              </div>
            )}
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="dateEvent">Ngày tổ chức: </label>
            <input
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
              type="datetime-local"
              id="dateEvent"
            />
          </div>

          <div>
            <label htmlFor="dateEvent">Ngày kết thúc: </label>
            <input
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
              type="datetime-local"
              id="dateEvent"
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="location">Địa điểm: </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
            />
          </div>

          <div>
            <label htmlFor="new">Tin: </label>
            <input
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              type="text"
              id="new"
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="image-person">Ảnh: </label>
            <input
              value={imagePerson}
              onChange={(e) => setImagePerson(e.target.value)}
              type="text"
              id="image-person"
            />
          </div>

          <div>
            <label htmlFor="category-event">Loại sự kiện</label>
            <select
              onChange={(e) => setSelectCategoryEvent(e.target.value)}
              value={selectCategoryEvent}
              style={{ width: "75%" }}
              id="category-event"
            >
              <option value={0}>Chọn loại dịch vụ</option>
              {categoryEvent.map((category) => (
                <option
                  key={category.maLoaiSuKien}
                  value={category.maLoaiSuKien}
                >
                  {category.tenLoaiSuKien}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="gap-4">
          <label htmlFor="decriptionEvent">Mô tả: </label>
          <textarea
            onChange={(e) => setDecriptionEvent(e.target.value)}
            value={decriptionEvent}
            rows="4"
            id="decriptionEvent"
          />
        </div>

        <div id="content">
          <label htmlFor="content-event">Nội dung sự kiện: </label>
          <div className="quill">
            <Editor placeholder={"Write something..."} />
          </div>
        </div>

        <div
          style={{
            justifyContent: "center",
            margin: "50px 0 0",
            zIndex: "100",
            flexDirection: "column",
          }}
        >
          {error && (
            <div>
              <span className="error">{error}</span>
            </div>
          )}
          <div style={{ justifyContent: "center" }}>
            <button onClick={handleEditEvent} className="btn">
              Sửa sự kiện
            </button>
          </div>
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  #create-event-admin {
    input[type="file"] {
      border: none;
      height: fit-content;
    }
    img:hover {
      opacity: unset;
      cursor: default;
    }
    div {
      label {
        flex: none;
      }

      .error {
        color: red;
        font-size: 20px;
      }
    }

    #content {
      width: 100%;
    }
  }

  #create-event-admin > div {
    width: 100%;
  }

  #create-event-admin > div > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .quill > div {
    width: 100%;
  }

  .ql-editor p {
    max-width: fit-content;
    width: fit-content;
    display: flex;
  }

  #decriptionEvent {
    width: 87.5%;
  }

  #nameEvent {
    height: fit-content;
  }
`;

export default memo(EditEvent);
