import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });
