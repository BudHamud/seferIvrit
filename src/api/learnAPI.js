import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_LOCAL}/api/learn`,
  withCredentials: true,
});

const getLevels = async (unit, level) => {
  try {
    const response = await api.get(
      level !== 0 ? `/?unit=${unit}` : `/?unit=${level}&level=${level}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los niveles");
  }
};

const learnAPI = { getLevels };

export default learnAPI;
