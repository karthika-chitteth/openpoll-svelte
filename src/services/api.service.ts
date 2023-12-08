import axios, { type AxiosInstance } from 'axios';
import type { TUser } from '../types/user.type';

const ApiInstance: AxiosInstance = axios.create({
  baseURL: 'https://openpoll.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// request interceptor
ApiInstance.interceptors.request.use(
  (config) => {
    console.log(config.baseURL);
    // const user: TUser = JSON.parse(localStorage.getItem('user') ?? '{}');
    // if (user?.uniqueId) {
    //   config.headers.Token = user.uniqueId;
    // }

    const userDataString = localStorage.getItem('openpoll_user');
    if (userDataString) {
      // Parse the JSON string to an object
      const userData = JSON.parse(userDataString);
      const token = userData.token;
      console.log(token);
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
ApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApiInstance;
