import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.9:3336',
  //baseURL: 'https://pesquija.backendtropa.com.br/',
});

export default api;