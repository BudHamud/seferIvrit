import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/learn`,
  withCredentials: true,
});

const getLevels = async (level, unit) => {
    try {
      const response = await api.get(`/?level=${level}&unit=${unit}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los niveles');
    }
  };

const learnAPI = { getLevels }

export default learnAPI