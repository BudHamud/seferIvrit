import { useState, useEffect, useContext } from "react";
import { connect } from "socket.io-client";
import chatAPI from "../api/chatAPI";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

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
    .active {
      background-color: #e57c23;
    }
    div {
      width: 100%;
      padding: 20px 0;
      background-color: #333;
      border-bottom: solid 1px #FFF;

      p {
        padding-left: 10px;
      }
    }
  }
  .messages {
    height: 100%;
    width: 100%;
    .chat {
      min-height: 70vh;
      max-height: 70vh;
      overflow-y: scroll;
      .me {
        margin: 10px 10px 10px auto;
      }
      form {
        max-height: 250px;
        align-self: center;
      }
      div {
        margin: 10px;
        border-radius: 5px;
        padding: 5px;
        background-color: #333;
        width: 50%;
        display: grid;
        p {
          :nth-child(1) {
            font-size: 12px;
          }
          :nth-child(3) {
            justify-self: end;
          }
        }
      }
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
  const socket = connect(import.meta.env.VITE_APP_URL);

  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [active, setActive] = useState(true);

  const getMsgs = async () => {
    const msgs = await chatAPI.getChats()
    setMessages(msgs)
  }

  const receiveMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    getMsgs()
  }, [])

  useEffect(() => {
    socket.on("message", receiveMessage);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim() !== "") {
      const newMessage = { text: currentMessage, user: user._id };
      socket.emit("message", newMessage);
      setCurrentMessage("");
    }
  };

  const formatDateTime = (dateTimeString) => {
    const messageDate = dateTimeString ? new Date(dateTimeString) : new Date();

    const formattedTime = messageDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    return formattedTime;
  };

  if (user.length === 0) {
    return <main><p>No tienes acceso a este contenido</p></main>
  }

  return (
    <ChatStyle>
      <section className="history">
        <div className={active ? 'active' : ''}>
        <p>Chat General</p>
        <p>{ messages.length !== 0 ? messages[messages.length - 1].text : '' }</p>
        </div>
        <div>
        <p>Purquito</p>
        <p>Hola</p>
        </div>
        <div>
        <p>Paulina</p>
        <p>Tremendo chabon</p>
        </div>
      </section>
      <section className="messages">
        <div className="chat">
          {messages.map((message, i) => (
            <div key={i} className={message.user === user._id ? 'me' : ''} >
              <p>{message.user === user._id ? "Yo" : message.user}</p>
              <p>{message.text}</p>
              <p>{formatDateTime(message.timestamp)}</p>
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
