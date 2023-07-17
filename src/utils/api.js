import axios from 'axios';

import { setToken } from '../store/reducers/authSlice';

const API_BASE_URL = 'http://localhost:8001';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor para agregar el token de autenticación a las solicitudes
api.interceptors.request.use((config) => {
    const token = getState().auth.token; // Accede al token almacenado en el estado de Redux
    console.log('Token stored:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export const createUser = async (userData, userType) => {
    try {
      const response = await api.post(`/user/create/${userType}`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  

export const deleteUser = async (userId, userType) => {
  try {
    const response = await api.delete(`/user/delete/${userId}?userType=${userType}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUser = async (userId, userData, userType) => {
  try {
    const response = await api.put(`/user/update/${userId}?userType=${userType}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUsers = async (page, pageSize) => {
  try {
    const response = await api.get(`/user/all?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await api.get(`/user/find/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (loginData) => {
  try {
    const response = await api.post('/auth/login', loginData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
