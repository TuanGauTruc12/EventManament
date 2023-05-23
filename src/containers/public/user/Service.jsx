import React, { useEffect, useState } from "react";
import { EventItem } from "../../../components";
import { useNavigate } from "react-router-dom";
import { pathAPI } from "../../../ultis/path";
import { getAll } from "../../../apis/BaseAPI";
const Service = () => {
  document.title = "Dịch vụ";

  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [textareaValues, setTextareaValues] = useState([]);
  const [servicesCheckbox, setServicesCheckbox] = useState([]);
  const [error, setError] = useState("");

  const handleTextareaChange = (index, event, maDichVu) => {
    const { value } = event.target;

    setTextareaValues((prevTextareaValues) => {
      const updatedValues = [...prevTextareaValues];
      updatedValues[index] = { id: maDichVu, input: value };
      return updatedValues;
    });
  };

  const handleCheckService = (event, maDichVu) => {
    const { checked } = event.target;

    setServicesCheckbox((prevCheckboxValues) => {
      let updatedValues = [...prevCheckboxValues];
      const existingIndex = updatedValues.findIndex(
        (item) => item.id === maDichVu
      );

      if (existingIndex !== -1) {
        if (checked) {
          // Nếu đã tồn tại trong mảng checkboxValues và được chọn, cập nhật giá trị checked của đối tượng
          updatedValues[existingIndex] = { id: maDichVu, checked };
        } else {
          // Nếu đã tồn tại trong mảng checkboxValues nhưng không được chọn, xóa đối tượng khỏi mảng
          updatedValues = updatedValues.filter((item) => item.id !== maDichVu);
        }
      } else {
        // Nếu chưa tồn tại trong mảng checkboxValues, thêm đối tượng mới vào mảng
        updatedValues.push({ id: maDichVu, checked });
      }

      return updatedValues;
    });
  };

  const handleContinue = () => {
    //get data
    if (servicesCheckbox.length === 0) {
      setError("Vui lòng chọn 1 dịch vụ");
    } else {
      let servicesSave = [];

      for (let i = 0; i < servicesCheckbox.length; i++) {
        const obj1 = servicesCheckbox[i];
        const obj2 = textareaValues.find((obj) => obj?.id === obj1?.id);

        if (obj2) {
          const mergedObj = { ...obj1, ...obj2 };
          servicesSave.push(mergedObj);
        }
      }

      servicesSave = servicesSave.map((itemSave) => {
        return {
          item: services.find((item) => itemSave.id === item.maDichVu),
          input: itemSave.input,
        };
      });
      console.log(servicesSave);
      //send data qua contract
      // navigate("/contract", { state: servicesSave });
    }
  };

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

  const renderInputContent = (service, index) => {
    if (service.soLuong === 0) {
      return (
        <textarea
          value="Dịch vụ tạm thời đã hết"
          disabled
          className="w-full"
          rows="2"
        />
      );
    } else {
      if (
        servicesCheckbox.find((item) => item.id === service.maDichVu) ===
        undefined
      ) {
        return <textarea disabled className="w-full" rows="2" />;
      } else {
        return (
          <textarea
            onChange={(event) =>
              handleTextareaChange(index, event, service.maDichVu)
            }
            value={textareaValues[index]?.input}
            className="w-full"
            rows="2"
          />
        );
      }
    }
  };

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
                  <input type="checkbox" style={{ padding: "16px" }} disabled />
                ) : (
                  <input
                    style={{ padding: "16px" }}
                    value={servicesCheckbox[index]?.checked}
                    onChange={(e) => handleCheckService(e, service.maDichVu)}
                    type="checkbox"
                  />
                )}
              </td>
              <td>
                <span>{`${service.gia} / ${service.donViTinh}`}</span>
              </td>
              <td>{renderInputContent(service, index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button onClick={() => handleContinue()} className="btn">
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
