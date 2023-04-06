import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6222994f666291106a29f999.mockapi.io/api/v1',
});

export default api;
