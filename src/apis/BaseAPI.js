import axios from '../axios';

export const getAll = (path) => new Promise(async(resolve, reject)=>{
    try {
        const reponse = await axios({
          url: `${process.env.REACT_APP_API}/${path}/`,
          method: "get",
        });
        resolve(reponse);
      } catch (error) {
        reject(error);
      }
})

export const deleteById = (id, path)=> new Promise(async(resolve, reject)=>{
  try {
    const reponse = await axios.delete(`${process.env.REACT_APP_API}/${path}/delete/${id}`);
    resolve(reponse);
  } catch (error) {
    reject(error);
  }
})


export const getById = (id, path) => new Promise(async(resolve, reject)=>{
  try {
      const reponse = await axios({
        url: `${process.env.REACT_APP_API}/${path}/getByID/${id}`,
        method: "get",
      });
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
})