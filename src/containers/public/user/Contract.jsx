import React from "react";

const Contract = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  document.title = "Nội dung hợp đồng";
  return (
    <div id="contract">
      <span>Nội dung hợp đồng</span>
      <span>Tên sự kiện</span>
      <div className="information-customer">
        <span className="decription">THÔNG TIN KHÁCH HÀNG</span>
        <div>
          <span>Họ tên</span>:<span>{user.name}</span>
        </div>
        <div>
          <span>Gmail</span>:<span>{user.gmail}</span>
        </div>
        <div>
          <span>Số điện thoại</span>:<span>{user.phoneNumber}</span>
        </div>
      </div>
      <div className="information-event">
        <span className="decription">CÁC THÔNG TIN VỀ SỰ KIỆN</span>
        <div>
          <span>Tên sự kiện</span>:<span>Sự kiện 1</span>
        </div>
        <div>
          <span>Thời gian bắt đầu</span>:<span>1/5/2023</span>
        </div>
        <div>
          <span>Thời gian kết thúc</span>:<span>20/5/2023</span>
        </div>
        <div>
          <span>Số lượng khách mời</span>:<span>4</span>
        </div>
      </div>
      <div className="information-service">
        <span>CÁC DỊCH VỤ YÊU CẦU</span>
        <div>.....</div>
      </div>
      <div className="stipulation-term gap-2">
        <spam>{"Các Điều khoản quy định".toUpperCase()}</spam>
        <span>
          1.1 The Android Software Development Kit (referred to in the License
          Agreement as the "SDK" and specifically including the Android system
          files, packaged APIs, and Google APIs add-ons) is licensed to you
          subject to the terms of the License Agreement. The License Agreement
          forms a legally binding contract between you and Google in relation to
          your use of the SDK. 1.2 "Android" means the Android software stack
          for devices, as made available under the Android Open Source Project,
          which is located at the following URL: https://source.android.com/, as
          updated from time to time. 1.3 A "compatible implementation" means any
          Android device that (i) complies with the Android Compatibility
          Definition document, which can be found at the Android compatibility
          website (https://source.android.com/compatibility) and which may be
          updated from time to time; and (ii) successfully passes the Android
          Compatibility Test Suite (CTS). 1.4 "Google" means Google LLC,
          organized under the laws of the State of Delaware, USA, and operating
          under the laws of the USA with principal place of business at 1600
          Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </span>
      </div>
      <div>
        <label htmlFor="check" className="">
          <input type="checkbox" className="mr-1" name="" id="check" />
          Bạn có đồng ý với các điều khoản trên không?
          <br />
          Sau khi xác nhận sẽ có nhân viên liên hệ bạn trong 24h để xác nhận đặt
          sự kiện đặt sự kiện.
        </label>
      </div>
      <div>
        <button className="btn">Xác nhận</button>
      </div>
    </div>
  );
};

export default Contract;
