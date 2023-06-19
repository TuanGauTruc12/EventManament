import axios from '../axios.js';
import { pathAPI } from '../ultis/path';

export const login = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios.post(
        `${process.env.REACT_APP_API}/${pathAPI.custommer}/login`,
        formData
      );
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  });

  export const updateKhachHang = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios.put(
        `${process.env.REACT_APP_API}/${pathAPI.custommer}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  });