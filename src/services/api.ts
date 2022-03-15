import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.15.5:3332',
  baseURL: 'https://pesquija.backendtropa.com.br/',
});

export default api;