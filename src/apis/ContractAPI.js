import axios from "../axios";
import { pathAPI } from "../ultis/path";

export const createContract = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios.post(
        `${process.env.REACT_APP_API}/${pathAPI.contract}/`,
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

  
  export const getAllByIDKhachHang = (path, idKH) => new Promise(async(resolve, reject)=>{
    try {
        const reponse = await axios({
          url: `${process.env.REACT_APP_API}/${path}/getAllByKhachHang/${idKH}`,
          method: "get",
        });
        resolve(reponse);
      } catch (error) {
        reject(error);
      }
})
