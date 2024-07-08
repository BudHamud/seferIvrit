import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import learnAPI from "../api/learnAPI";
import styled from "styled-components";
import Loading from "../components/Loading";
import Modal from "../components/Modal";

const Learn = () => {
  const { user } = useContext(AuthContext);
  const [levels, setLevels] = useState([]);
  const [message, setMsg] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const checkLevel = (num, to, data) => {
    localStorage.setItem('lesson', JSON.stringify(data))

    if (user.progress.level >= num) {
      navigate(`/${to}`);
    } else {
      openModal();
      setMsg("Todavía no tienes acceso a este contenido.");
    }
  };

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const unit = user.progress.unit;
        const levelArr = await learnAPI.getLevels(unit);
        setLevels(levelArr);
      } catch (error) {
        console.error(error);
      }
    };

    if (user.length !== 0) {
      fetchLevels();
    }
  }, [user]);

  if (user.length === 0) {
    return (
      <main>
        <p>No tienes acceso a este contenido</p>
      </main>
    );
  } if (levels.length === 0) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  
  return (
    <UnitStyle>
      <h1>Unidad {user.progress.unit}</h1>
      <section>
        <h2>Ejercicios:</h2>
        <article>
          {levels.filter(e => e.type === 'quiz').sort((a, b) => a.level - b.level).map((e, i) => (
            <button key={e._id} onClick={() => checkLevel(i + 1, "learn", e)}>
              {e.level}. {e.title}
            </button>
          ))}
        </article>
      </section>

      <section>
        <h2>Lectura:</h2>
        <article>
          {levels.filter(e => e.type !== 'quiz').sort((a, b) => a.level - b.level).map((e, i) => (
            <button key={e._id} onClick={() => checkLevel(i + 1, "read", e)}>
              {e.level}. {e.title}
            </button>
          ))}
        </article>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>{message}</p>
      </Modal>
    </UnitStyle>
  );
};

export default Learn;

const UnitStyle = styled.main`
  h1 {
    margin-bottom: 20px;
  }
  section {
    article {
      margin: 20px 0;
      display: flex;
      justify-content: center;
      gap: 10px;
      button {
        color: #fff;
        padding: 10px;
        border-radius: 10px;
        background-color: transparent;
        border: solid 2px #e57c23;
        :hover {
          background-color: #e57c23;
          cursor: pointer;
        }
      }
    }
  }
`;
