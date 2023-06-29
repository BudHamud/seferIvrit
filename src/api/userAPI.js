import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/user`,
  withCredentials: true,
});

const login = async (data) => {
  try {
    const response = await api.post('/login', { data })
    return response.data
  } catch (err) {
    throw new Error('Error en el login')
  }
}

const register = async (data) => {
  try {
    const response = await api.post('/register', { data })
    return response.data
  } catch (err) {
    throw new Error('Error en el register')
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

const userAPI = { login, register, logout, getUserStatus, updateStats };

export default userAPI;