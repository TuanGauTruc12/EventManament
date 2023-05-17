import React from "react";

const CreateEvent = () => {
  return (
    <div id="create-event-admin" className="mt-6">
      <div>
        <label htmlFor="nameEvent">Tên sự kiện: </label>
        <input type="text" id="nameEvent" />
      </div>
      <div>
        <label htmlFor="imageEvent">Hình ảnh: </label>
        <input type="file" id="imageEvent" />
      </div>
      <div>
        <label htmlFor="decriptionEvent">Mô tả: </label>
        <textarea rows="4" id="decriptionEvent" />
      </div>
      <div style={{justifyContent:  "center"}}>
        <button className="btn">Tạo sự kiện</button>
      </div>
    </div>
  );
};

export default CreateEvent;
