import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://deckofcardsapi.com/api/deck/',
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
};
export const client: AxiosInstance = axios.create(config);
