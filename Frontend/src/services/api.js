import axios from "axios";

const API_URL = "http://localhost:5000/api/transactions";

export const getTransactions = (params = {}) => axios.get(API_URL, { params });
export const getTransaction = (id) => axios.get(`${API_URL}/${id}`);
export const addTransaction = (data) => axios.post(API_URL, data);
export const updateTransaction = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTransaction = (id) => axios.delete(`${API_URL}/${id}`);
