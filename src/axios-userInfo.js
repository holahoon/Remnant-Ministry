import axios from "axios";

// For temporary fetchinng datas from firebase
const axiosInstance = axios.create({
  baseURL: "https://remnant-ministry-temporary.firebaseio.com/"
});

export default axiosInstance;
