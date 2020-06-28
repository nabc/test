import axios from 'axios';
import { successHandler, errorHandler } from './interceptors/response.interceptor';
import { requestHandler } from './interceptors/request.interceptor';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});

api.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

api.interceptors.request.use((request) => requestHandler(request));

export default api;
