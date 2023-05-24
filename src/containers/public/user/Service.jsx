import React, { useEffect, useState } from "react";
import { EventItem } from "../../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { pathAPI } from "../../../ultis/path";
import { getAll } from "../../../apis/BaseAPI";
const Service = () => {
  document.title = "Dịch vụ";

  const navigate = useNavigate();
  const location = useLocation();

  const [services, setServices] = useState([]);
  const [textareaValues, setTextareaValues] = useState([]);
  const [quantityValues, setQuantityValue] = useState([]);
  const [servicesCheckbox, setServicesCheckbox] = useState([]);
  const [arrayTotalPrice, setArrayTotalPrice] = useState([]);
  const [error, setError] = useState("");

  const handleTextareaChange = (index, event, maDichVu) => {
    const { value } = event.target;

    setTextareaValues((prevTextareaValues) => {
      const updatedValues = [...prevTextareaValues];
      updatedValues[index] = { id: maDichVu, input: value };
      return updatedValues;
    });
  };

  const handleQuantitedChange = (index, event, maDichVu, soLuong) => {
    const { value } = event.target;

    if (value > 0 && value <= soLuong) {
      setQuantityValue((prevTextareaValues) => {
        const updatedValues = [...prevTextareaValues];
        updatedValues[index] = { id: maDichVu, quantity: +value };
        return updatedValues;
      });
    }
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
          updatedValues.splice(existingIndex, 1);
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
      const event = location.state;
      const servicesSave = servicesCheckbox
        .filter((item1) => item1 !== undefined)
        .map((item1) => {
          const service = services.find((val) => val.maDichVu === item1.id);
          const matchingItem2 = quantityValues
            .filter((item2) => item2 !== undefined)
            .find((item2) => item2.id === item1.id);
          const matchingItem3 = textareaValues
            .filter((item3) => item3 !== undefined)
            .find((item3) => item3.id === item1.id);
          return {service, ...matchingItem2, ...matchingItem3 };
        });

      //send data qua contract
      const service = {services: servicesSave, event: event} 
      console.log(service);
      //navigate("/contract", { state: service });
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

  useEffect(() => {
    const arrayTemp = services.map((service) => {
      const checked = servicesCheckbox.find(
        (checkbox) => checkbox.id === service.maDichVu
      );
      if (checked === undefined) {
        return 0;
      } else if (
        quantityValues.length === 0 ||
        quantityValues.find((quantity) => service.maDichVu === quantity.id) ===
          undefined
      ) {
        return 1 * service.gia;
      } else {
        const quantity = quantityValues.find(
          (quantity) => service.maDichVu === quantity?.id
        );
        return quantity?.quantity * service.gia;
      }
    });
    setArrayTotalPrice(arrayTemp);
  }, [quantityValues, servicesCheckbox, services]);

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

  const renderInputQuantity = (service, index) => {
    if (service.soLuong === 0) {
      return (
        <input value="0" disabled className="w-1/3 text-center" type="number" />
      );
    } else {
      if (
        servicesCheckbox.find((item) => item.id === service.maDichVu) ===
        undefined
      ) {
        return <input disabled className="w-1/3 text-center" />;
      } else {
        return (
          <input
            onChange={(event) =>
              handleQuantitedChange(
                index,
                event,
                service.maDichVu,
                service.soLuong
              )
            }
            value={
              quantityValues[index]?.quantity === undefined
                ? 1
                : quantityValues[index]?.quantity
            }
            className="w-1/3 text-center"
            type="number"
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
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Tổng tiền</th>
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
              <td className="w-[150px]">
                {renderInputQuantity(service, index)}
              </td>
              <td>
                <span>{`${service.gia} / ${service.donViTinh}`}</span>
              </td>
              <td>{arrayTotalPrice[index]}</td>
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
