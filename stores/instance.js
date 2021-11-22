import axios from "axios";

export const baseURL = "http://192.168.8.101:8000"; //AlKhaldi
// export const baseURL = "http://192.168.1.75:8000";"" //alduaij
// "192.168.8.101" alaskar

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
