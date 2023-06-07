import { AxiosHeaders } from "axios";
import axios from "../axios.js";
import { pathAPI } from "../ultis/path.js";

export const getAllByIDCategory = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios({
        url: `${process.env.REACT_APP_API}/events/findByIdCategoryEvent/` + id,
        method: "get",
      });
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  });

export const getEventByID = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios({
        url: `${process.env.REACT_APP_API}/events/getSuKienByID/` + id,
        method: "get",
      });
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  });

export const createEvent = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios.post(
        `${process.env.REACT_APP_API}/${pathAPI.events}/`,
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

  export const updateEvent = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios.put(
        `${process.env.REACT_APP_API}/${pathAPI.events}/`,
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


  export const deleteEvent = (idEvent)=> new Promise(async(resolve, reject)=>{
    try {
      const reponse = await axios.delete(`${process.env.REACT_APP_API}/${pathAPI.events}/delete/${idEvent}`);
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  })
