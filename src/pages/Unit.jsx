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

  const checkLevel = (i) => {
    if (user.progress.level >= i) {
      navigate("/learn");
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

  return (
    <UnitStyle>
      {levels.length !== 0 && <h1>Unidad {user.progress.unit}:</h1>}
      {user.length !== 0 ? (
        <section>
          {levels.length !== 0 ? (
            levels.map((e, i) => (
              <button key={e._id} onClick={() => checkLevel(i + 1)}>
                {e.level}
              </button>
            ))
          ) : (
            <Loading />
          )}
        </section>
      ) : (
        <p>Debes iniciar sesión para acceder a esta página.</p>
      )}
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
    display: flex;
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
`;
