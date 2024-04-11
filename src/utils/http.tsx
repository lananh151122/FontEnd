import { Store } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';
import { webRoutes } from '../routes/web';

let store: Store;

export const injectStore = (_store: Store) => {
  store = _store;
};

export const defaultHttp = axios.create();
const http = axios.create();

http.interceptors.request.use(
  (config) => {
    const state: RootState = store.getState();
    const apiToken = state.auth?.token;

    if (apiToken) {
      config.headers.Authorization = `Bearer ${apiToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    if(!response?.data?.error){
      return response;
    }
    throw Error(response?.data?.message)
  },
  (error) => {
    if (error?.response?.status === 401) {
      store.dispatch(logout());
      window.location.href = webRoutes.login
    }
    return Promise.reject(error);
  }
);

export default http;
