import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { title } from "../../../ultis/path";
import Editor from "./Editor";

const CreateEvent = () => {
  document.title = title.CREATE_EVENT_ADMIN;

  const [image, setImage] = useState();
  const [date, setDate] = useState("");
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

  const handleCreateEvent = () => {
    //check data before send api
    const content = document.querySelector(".ql-editor").innerHTML;
    console.log(content);
    if (nameEvent.length === 0) {
      setError("Chưa nhập tên sự kiện");
    } else if (date.length === 0) {
      setError("Chưa chọn ngày");
    } else if (image === undefined) {
      setError("Chưa chọn hình ảnh");
    } else if (decriptionEvent.length === 0) {
      setError("Chưa nhập mô tả");
    } else if (location.length === 0) {
      setError("Chưa nhập điạ điểm tổ chức");
    } else if (newEvent.length === 0) {
      setError("Chưa nhập tin");
    } else if (imagePerson.length === 0) {
      setError("Chưa nhập ảnh");
    } else if (content.length === 11) {
      setError("Chưa nhập nội dung sự kiện");
    } else {
      //call api create event
      setError();

    }
  };

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);

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

          <div>
            <label htmlFor="dateEvent">Ngày tổ chức: </label>
            <input
              min={new Date()
                .toISOString()
                .slice(0, new Date().toISOString().lastIndexOf(":"))}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="dateEvent"
            />
          </div>
        </div>

        <div>
          <div style={image === undefined ? {} : {}}>
            <label htmlFor="imageCoverEvent">Hình bìa: </label>

            {image === undefined ? (
              <input
                multiple
                accept="image/*"
                type="file"
                id="imageCoverEvent"
                onChange={(e) => handleChooseImage(e)}
              />
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

          <div>
            <label htmlFor="decriptionEvent">Mô tả: </label>
            <textarea
              onChange={(e) => setDecriptionEvent(e.target.value)}
              value={decriptionEvent}
              rows="4"
              id="decriptionEvent"
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

        <div style={{ width: "50%" }}>
          <div style={{ width: "99%" }}>
            <label htmlFor="image-person">Ảnh: </label>
            <input
              value={imagePerson}
              onChange={(e) => setImagePerson(e.target.value)}
              type="text"
              id="image-person"
            />
          </div>
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
            <button onClick={handleCreateEvent} className="btn">
              Tạo sự kiện
            </button>
          </div>
        </div>
      </div>
    </Styled>
  );
};

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

  .ql-editor p{
    max-width: fit-content;
    width: fit-content;
    display: flex;
}
`;

export default CreateEvent;
