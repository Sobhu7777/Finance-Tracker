import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor to add the auth token to headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Authentication endpoints
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);

// Transaction endpoints (now protected)
export const getTransactions = (filters) => API.get('/transactions', { params: filters });
export const getTransaction = (id) => API.get(`/transactions/${id}`);
export const addTransaction = (newTransaction) => API.post('/transactions', newTransaction);
export const updateTransaction = (id, updatedTransaction) => API.put(`/transactions/${id}`, updatedTransaction);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);

export default API;