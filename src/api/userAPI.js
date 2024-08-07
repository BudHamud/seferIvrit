import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_LOCAL}/api/user`,
  withCredentials: true,
});

const findUser = async (username) => {
  try {
    const response = await api.get(`/user/${username}`)
    return response.data
  } catch (err) {
    throw new Error('Error al buscar usuario')
  }
}

const login = async (data) => {
  try {
    const response = await api.post('/login', { data })
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.response ? err.response.data.message : 'An error occurred' };
  }
}

const register = async (data) => {
  try {
    const response = await api.post('/register', { data })
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.response ? err.response.data.message : 'An error occurred' };
  }
}

const logout = async () => {
  try {
    const response = await api.post('/logout')
    return response.data
  } catch (err) {
    throw new Error('Error en el register')
  }
}

const getUserStatus = async () => {
  try {
    const response = await api.get("/checkLoggedIn");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener el estado del usuario");
  }
};

const updateStats = async (data) => {
  try {
    const response = await api.put("/", { data });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al actualizar los datos del usuario");
  }
};

const userAPI = { findUser, login, register, logout, getUserStatus, updateStats };

export default userAPI;