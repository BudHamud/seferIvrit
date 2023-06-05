import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LearnStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      list-style: none;
    }
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
`;

const Learn = () => {
  const [nivelActual, setNivelActual] = useState(1);
  const [nivelesCompletados, setNivelesCompletados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const seleccionarNivel = (nivel) => {
    if (nivelesCompletados.includes(nivel)) {
      setNivelActual(nivel);
    } else {
      alert(
        "No puedes acceder a este nivel todavía. Completa los niveles anteriores primero."
      );
    }
  };

  const completarNivel = (nivel) => {
    if (!nivelesCompletados.includes(nivel)) {
      setNivelesCompletados([...nivelesCompletados, nivel]);
    }
  };

  const checkLoggedIn = () => {
    axios.get(`${import.meta.env.VITE_APP_URL}/api/auth/checkLoggedIn`)
      .then(response => {
        if (!response.data.isLoggedIn) {
          navigate('/register');
        } else {
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  if (isLoading) {
    return (
      <Loader>
        <p>Loading...</p>
      </Loader>
    );
  }

  return (
    <LearnStyle>
      <h1>Unidad 1:</h1>
      <div>
        {Array.from({ length: 7 }, (_, index) => index + 1).map((nivel) => (
          <div key={nivel}>
            Nivel {nivel}
            {nivel === nivelActual ? (
              <button onClick={() => seleccionarNivel(nivel)}>Continuar</button>
            ) : (
              <button
                disabled={!nivelesCompletados.includes(nivel)}
                onClick={() => seleccionarNivel(nivel)}
              >
                Ir al nivel
              </button>
            )}
            {nivelesCompletados.includes(nivel) && (
              <span>Nivel completado</span>
            )}
            {!nivelesCompletados.includes(nivel) && nivel < nivelActual && (
              <button onClick={() => completarNivel(nivel)}>
                Marcar como completado
              </button>
            )}
          </div>
        ))}
      </div>
    </LearnStyle>
  );
};

export default Learn;