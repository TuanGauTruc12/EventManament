import React from "react";
import { EventItem } from "../../../components";
import { useNavigate } from "react-router-dom";

const Service = () => {
    const navigate = useNavigate();

  return (
    <div id="service">
      <span>
        Bạn muốn chúng tôi cung câp các dịch vụ gì?
      </span>
      <table className="services">
        <tr>
          <th>Loại dịch vụ</th>
          <th>Chọn</th>
          <th>Ghi chú</th>
        </tr>
        <tr className="service-item">
          <td>MC</td>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr className="service-item">
          <td>Ánh sáng</td>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr className="service-item">
          <td>Âm thanh</td>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <input type="text" />
          </td>
        </tr>
      </table>
      <div className="mt-4">
        <button onClick={()=>navigate('/contract')} className="btn">Tiếp tục</button>
      </div>

      <div>
        <div id="event">
          <EventItem />
          <EventItem />
          <EventItem />
        </div>
      </div>
    </div>
  );
};

export default Service;
