import axios from "axios";

//AlKhaldi
// export const baseURL = "http://192.168.8.101:8000";

//alduaij
// export const baseURL = "http://192.168.1.75:8000";

//alaskar
export const baseURL = "http://192.168.8.101:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
