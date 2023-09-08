import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://expanse-tracker-api.onrender.com/api',
});

export default axiosInstance;
