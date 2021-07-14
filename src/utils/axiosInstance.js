import axios from "axios";

const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: "https://kvt-api.herokuapp.com/",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosInstance;
