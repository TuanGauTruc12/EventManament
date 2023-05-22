import React, { useEffect, useState } from "react";
import { EventItem } from "../../../components";
import { useNavigate } from "react-router-dom";
import { pathAPI } from "../../../ultis/path";
import { getAll } from "../../../apis/BaseAPI";
const Service = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  document.title = "Dịch vụ";

  useEffect(() => {
    getAll(pathAPI.services)
      .then((service) => {
        if (service.status === 200 && service.statusText === "") {
          setServices(service.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(services);

  return (
    <div id="service">
      <span>Bạn muốn chúng tôi cung câp các dịch vụ gì?</span>
      <table className="services">
        <thead>
          <tr>
            <th>STT</th>
            <th>Loại dịch vụ</th>
            <th>Chọn</th>
            <th>Giá</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={service.maDichVu} className="service-item">
              <td>{index + 1}</td>
              <td>{service.tenDichVu}</td>
              <td>
                {service.soLuong === 0 ? (
                  <input type="checkbox" disabled />
                ) : (
                  <input type="checkbox" />
                )}
              </td>
              <td>
                <span>{`${service.gia} / ${service.donViTinh}`}</span>
              </td>
              <td>
                {service.soLuong === 0 ? (
                  <textarea value="Dịch vụ tạm thời đã hết" disabled className="w-full" rows="2" />
                ) : (
                  <textarea className="w-full" rows="2" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button onClick={() => navigate("/contract")} className="btn">
          Tiếp tục
        </button>
      </div>

      <div>
        <div id="event">
          {/* <EventItem />
          <EventItem />
          <EventItem /> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
