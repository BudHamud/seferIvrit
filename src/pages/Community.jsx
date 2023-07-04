import { useState, useEffect } from "react";
import chatAPI from "../api/chatAPI";
import styled from "styled-components";

const ChatStyle = styled.main`
  display: grid;
  grid-template-columns: 2fr 5fr;
  .history {
    height: 100%;
    width: 100%;
    border-right: solid 2px #ffc778;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    .addConversation {
      background-color: #fff;
    }
  }
  .messages {
    height: 100%;
    width: 100%;
    .chat {
      height: 90%;
    }
    form {
      border-top: solid 2px #ffc778;
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      input {
        width: 85%;
        padding: 6px;
        border-radius: 5px;
        border: solid 2px #fff;
        background-color: transparent;
      }
      button {
        background-color: transparent;
        border: none;
        margin-left: 5px;
        padding: 8px;
        border-radius: 5px;
        :hover {
          cursor: pointer;
          background-color: #fff;
          color: #000;
        }
      }
    }
  }
`;

const Community = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const getChats = async () => {
    try {
      const chats = await chatAPI.getChats();
      setMessages(chats);
    } catch (error) {
      console.error("Error al obtener los chats:", error);
    }
  };

  const sendMessage = async () => {
    try {
      // Lógica para enviar el mensaje utilizando chatAPI
      // Obtener el ID del chat o pasarlo como argumento
      // Utilizar una función en chatAPI para enviar el mensaje al backend
      // Actualizar el estado local con el mensaje enviado
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  //   useEffect(() => {
  //     const getMessages = async () => {
  //       try {
  //         // Obtener los mensajes del chat utilizando chatAPI
  //         // Actualizar el estado local con los mensajes obtenidos
  //       } catch (error) {
  //         console.error("Error al obtener los mensajes del chat:", error);
  //       }
  //     };

  //     getMessages();
  //   }, [chatId]);

  return (
    <ChatStyle>
      <section className="history">
        <div className="addConversation">
          <button>Comenzar conversacion</button>
        </div>
        Sin mensajes
      </section>
      <section className="messages">
        <div className="chat">
          {messages.map((message) => (
            <div key={message._id}>
              <p>{message.text}</p>
              <p>{message.user}</p>
              <p>{message.timestamp}</p>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </ChatStyle>
  );
};

export default Community;
