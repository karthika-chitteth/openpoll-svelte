import axios, { type AxiosInstance } from 'axios';
import type { TUser } from '../types/user.type';
let valueToStore =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImphbWVzIiwiZW1haWwiOiJqYW1lczFAZXhhbXBsZS5jb20iLCJuYmYiOjE3MDA1NTQ2NjcsImV4cCI6MTcwMDU1NjQ2NywiaWF0IjoxNzAwNTU0NjY3LCJpc3MiOiJXZWItQXBpLUJ5LU9wZW5Qb2xsIiwiYXVkIjoiT3Blbi1wb2xsLWNsaWVudHMifQ.ax-CB-8FiBuKp2qycs981wEO5iReQHoe3PxfEk0y_JY';

localStorage.setItem('token', valueToStore);
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
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
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
