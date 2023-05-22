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