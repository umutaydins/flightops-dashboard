import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 8000,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // basit hata logu; gerçek projede toast vb.
    console.error('API error:', err?.response || err?.message);
    return Promise.reject(err);
  }
);
