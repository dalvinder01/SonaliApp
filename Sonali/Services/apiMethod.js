import axios from 'axios';
/* Posting Webservice Here */
export const postAPI = async (url, data, header = {}, params = {}) => {
 /* Checking for Internet connection */
 const connection = true;
 /* If successfully connected */
 if (connection) {
  return axios({
   method: 'post',
   url: url,
   timeout: 1000 * 60, //Time out of 60 Sec
   data: data,
   headers: header,
   params: params
  });
 } else {
  /* throw error for No internet connection */
  throw new Error('No Internet Connection');
 }
};
/* Get Webservice Here */
export const getAPI = async (url, header = {}) => {
 /* Checking for Internet connection */
 const connection = true;
 /* If successfully connected */
 if (connection) {
  return axios({
   method: 'get',
   url: url,
   timeout: 1000 * 60, //Time out of 60 Sec
   headers: header
  });
 } else {
  /* throw error for No internet connection */
  throw new Error('No Internet Connection');
 }
};
