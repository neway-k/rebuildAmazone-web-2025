import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",

  //deployed version of amazon server on render
  baseURL: "https://amzon-api-mydeploy.onrender.com/"
});

export default axiosInstance;
