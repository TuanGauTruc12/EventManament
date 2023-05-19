import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const CreateEvent = () => {
  const [image, setImage] = useState();
  const [nameEvent, setNameEvent] = useState("");
  const [decriptionEvent, setDecriptionEvent] = useState("");
  const [error, setError] = useState();
  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  const handleCreateEvent = () => {
    //check data before send api
    console.log(error);
    if (nameEvent.length === 0) {
      setError("Chưa nhập tên sự kiện");
    } else if (image === undefined) {
      setError("Chưa chọn hình ảnh");
    } else if (decriptionEvent.length === 0) {
      setError("Chưa nhập mô tả");
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
          <label htmlFor="nameEvent">Tên sự kiện: </label>
          <input
            value={nameEvent}
            onChange={(e) => setNameEvent(e.target.value)}
            type="text"
            id="nameEvent"
          />
        </div>
        <div style={image === undefined ? {} : {}}>
          <label htmlFor="imageEvent">Hình ảnh: </label>

          {image === undefined ? (
            <input
              multiple
              accept="image/*"
              type="file"
              id="imageEvent"
              onChange={(e) => handleChooseImage(e)}
            />
          ) : (
            <div style={{ width: "75%" }} className="flex flex-col">
              <input
                multiple
                accept="image/*"
                type="file"
                id="imageEvent"
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
  }
`;

export default CreateEvent;
