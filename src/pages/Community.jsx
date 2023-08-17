import { useState, useEffect, useContext, useRef } from "react";
import { connect } from "socket.io-client";
import chatAPI from "../api/chatAPI";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import userAPI from "../api/userAPI";

const ChatStyle = styled.main`
  display: grid;
  grid-template-columns: 400px 1fr;
  .history {
    height: 100%;
    width: 100%;
    border-right: solid 2px #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow-x: hidden;
    div:nth-child(1) {
      margin: 20px 0;
      display: flex;
      justify-content: center;
      button {
        margin-left: 5px;
        padding: 8px;
        border-radius: 5px;
        border: none;
        background-color: transparent;
        transition: ease-in-out 0.1s;
        font-size: 16px;
        &:hover {
          cursor: pointer;
          background-color: #fff;
          color: #000;
        }
      }
      input {
        padding: 8px;
        border-radius: 5px;
        border: solid 2px #fff;
        background-color: transparent;
        &::placeholder {
          color: #fffb;
        }
      }
    }
    .chat {
      width: 100%;
      padding: 20px 0;
      border-bottom: solid 1px #fff;
      p,
      h3 {
        padding-left: 10px;
      }
      h3 {
        margin-bottom: 5px;
        font-weight: 500;
      }
    }
    .active {
      background-color: #333;
    }
    .inactive {
      background-color: transparent;
      :hover {
        background-color: #e57c23;
        cursor: pointer;
      }
    }
  }
  .messages {
    height: 100%;
    width: 100%;
    .chat {
      display: flex;
      flex-direction: column-reverse;
      min-height: 70vh;
      max-height: 70vh;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        background-color: transparent;
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #333;
        border-radius: 5px;
      }
      form {
        max-height: 250px;
        align-self: center;
      }
      .bubble {
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
      .me {
        background-color: #122;
        margin: 10px 10px 10px auto;
      }
    }
    form {
      border-top: solid 2px #fff;
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
  @media (width < 1024px) {
    grid-template-columns: 200px 1fr;
  }
  @media (width < 768px) {
    grid-template-columns: 1fr;
    .history {
      display: none;
    }
    .show {
      display: flex;
    }
  }
  @media (width < 425px) {
    .messages {
      .chat {
        .bubble {
          width: 80%;
        }
      }
    }
  }
`;

const Community = () => {
  const socket = connect(import.meta.env.VITE_APP_URL);

  const messagesEndRef = useRef(null);

  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [active, setActive] = useState(0);

  const sortByDate = (arr) => {
    return arr.sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB - dateA;
    });
  };

  const getMsgs = async (chat) => {
    setActive(chat._id);

    if (chat._id !== 0) {
      const msgs = await chatAPI.getChats(chat._id);
      const sorted = sortByDate(msgs.messages);
      setMessages(sorted.slice(0, 50));
    }
  };

  const receiveMessage = (newMsg) => {
    if (newMsg.chat === active) {
      setMessages((allMsg) => [
        { ...newMsg, timestamp: Date.now() },
        ...allMsg,
      ]);
    }
  };

  useEffect(() => {
    socket.on("message", receiveMessage);
  }, [active]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim() !== "") {
      const newMessage = { text: currentMessage, user: user._id, chat: active };
      socket.emit("message", active, newMessage);
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
    return (
      <main>
        <p>No tienes acceso a este contenido</p>
      </main>
    );
  }

  const addUser = async (e) => {
    e.preventDefault();
    const chatUser = await userAPI.findUser(e.target.user.value);
    const newChat = await chatAPI.createChat([user._id, chatUser]);
    setChats([...user.chats, newChat._id]);
  };

  return (
    <ChatStyle>
      <section className="history">
        <div className="newChat">
          <form onSubmit={addUser}>
            <input name="user" placeholder="adroper" />
            <button type={"submit"}>Conversar</button>
          </form>
        </div>

        {chats.length === 0
          ? user.chats.map((e, i) => (
              <div
                key={i}
                onClick={() => getMsgs(e)}
                className={active === e._id ? "chat active" : "chat inactive"}
              >
                <h3>
                  {e.users && e.users.find((e) => e._id !== user._id).username}
                </h3>
              </div>
            ))
          : chats.map((e, i) => (
              <div
                key={i}
                onClick={() => getMsgs(e)}
                className={active === e ? "chat active" : "chat inactive"}
              >
                <h3>{e === "64d126e7aa3f3e877e40a070" ? "Chat General" : e}</h3>
              </div>
            ))}
      </section>
      <section className="messages">
        <div className="chat">
          {messages.map((message, i) => {
            const userId = message.user._id ? message.user._id : message.user
            return (
              <div
                key={i}
                className={
                  userId === user._id ? "me bubble" : "bubble"
                }
              >
                <p>
                  {userId === user._id ? "Yo" : message.user.username ? message.user.username : message.user}
                </p>
                <p>{message.text}</p>
                <p>{formatDateTime(message.timestamp)}</p>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
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
