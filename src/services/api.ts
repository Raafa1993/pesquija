import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-petsplace.herokuapp.com',
});

export default api;