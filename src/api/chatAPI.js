import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_LOCAL}/api/chat`,
});

const getChats = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los chats:', error);
        throw new Error('Error al obtener los chats');
    }
};

const createChat = async (users) => {
    try {
        const response = await api.post(`/`, { users });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los chats:', error);
        throw new Error('Error al obtener los chats');
    }
};


const chatAPI = { getChats, createChat };

export default chatAPI;
