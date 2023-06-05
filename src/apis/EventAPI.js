import axios from '../axios.js';
import { pathAPI } from '../ultis/path.js';

export const getAllByIDCategory = (id) => new Promise(async(resolve, reject)=>{
    try {
        const reponse = await axios({
          url: `${process.env.REACT_APP_API}/events/findByIdCategoryEvent/` + id,
          method: "get",
        });
        resolve(reponse);
      } catch (error) {
        reject(error);
      }
})

export const getEventByID = (id) => new Promise(async(resolve, reject)=>{
  try {
      const reponse = await axios({
        url: `${process.env.REACT_APP_API}/events/getSuKienByID/` + id,
        method: "get",
      });
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
})