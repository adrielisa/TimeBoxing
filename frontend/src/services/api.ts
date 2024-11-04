import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getUsers = async () => {
  const response = await api.get('/user');
  return response.data;
};

// Agrega aquí otras funciones como getTasks, addTask, etc.
