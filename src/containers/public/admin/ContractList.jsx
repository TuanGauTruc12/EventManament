import React from "react";

function ContractList() {
  return (
    <div id="contract">
      <table className="contracts">
        <thead>
          <tr>
            <th>Mã hợp đồng</th>
            <th>Tên hợp đồng</th>
            <th>Tình trạng</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          <tr className="service-item">
            <td>1</td>
            <td>Hợp đồng 2</td>
            <td>Đã duyệt</td>
            <td>Ghi chú 2</td>
          </tr>
          <tr className="service-item">
            <td>3</td>
            <td>Hợp đồng 3</td>
            <td>Chưa duyệt</td>
            <td>Ghi chú 3</td>
          </tr>
          <tr className="service-item">
            <td>4</td>
            <td>Hợp đồng 4</td>
            <td>Chưa duyệt</td>
            <td>Ghi chú 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContractList;
