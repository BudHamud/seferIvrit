import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/chat`,
});

const getChats = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (err) {
    console.error("Error al obtener los chats:", err);
    throw new Error("Error al obtener los chats");
  }
};

const chatAPI = { getChats };

export default chatAPI;
