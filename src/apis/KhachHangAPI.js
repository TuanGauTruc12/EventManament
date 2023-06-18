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
