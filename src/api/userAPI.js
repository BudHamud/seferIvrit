import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/user`,
  withCredentials: true,
});

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

const userAPI = { getUserStatus, updateStats };

export default userAPI;