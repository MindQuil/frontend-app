import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mindquil.onrender.com',
  headers: {
    withCredentials: true,
  },
});

export default api;
