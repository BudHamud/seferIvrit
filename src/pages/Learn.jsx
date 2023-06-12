import { useState ,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

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

const Learn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [nivelActual, setNivelActual] = useState(1);
  const [nivelesCompletados, setNivelesCompletados] = useState([]);

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

  return (
    <LearnStyle>
      {isLoggedIn ? (
        <>
          <h1>Unidad 1:</h1>
          <div>
            {Array.from({ length: 7 }, (_, index) => index + 1).map((nivel) => (
              <div key={nivel}>
                Nivel {nivel}
                {nivel === nivelActual ? (
                  <button onClick={() => seleccionarNivel(nivel)}>
                    Continuar
                  </button>
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
        </>
      ) : (
        <p>Debes iniciar sesión para acceder a esta página.</p>
      )}
    </LearnStyle>
  );
};

export default Learn;
