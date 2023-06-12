import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../context/AuthContext";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  position: relative;
  text-align: center;
  form {
    input {
      padding: 5px;
    }
    button {
      margin-top: 15px;
    }
  }
  button {
    font-size: 18px;
    border-radius: 5px;
    padding: 5px;
    background-color: transparent;
    border: none;
    color: #000;
    transition: 0.1s ease-in-out;
    &:hover {
      background-color: #444;
      color: #fff;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    &:before,
    &:after {
      background-color: #fff;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 2px;
    background-color: #000;
    transform: translate(-50%, -50%);
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const AuthModal = () => {
  const { isLoggedIn, updateLoggedInStatus } = useContext(AuthContext);
  console.log(isLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogout = () => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/auth/logout`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          updateLoggedInStatus(false); // Actualizar el estado de inicio de sesión
          closeModal();
        } else {
          console.log(data);
        }
      })
      .catch((error) => console.log(error));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRegistering(false);
  };

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <li>
        {isLoggedIn ? (
          <img src="./Babi.jpg" onClick={openModal} />
        ) : (
          <img src="./userIcon.svg" onClick={openModal} />
        )}
      </li>
      {isModalOpen && (
        <ModalWrapper className="aos-init">
          <ModalContent data-aos="fade-down">
            <CloseButton onClick={closeModal} />
            {isLoggedIn ? (
              <>
                <h2>¿Deseas cerrar sesión?</h2>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </>
            ) : (
              <>
                {isRegistering ? (
                  <>
                    <AuthForm
                      endpoint={`${import.meta.env.VITE_APP_URL}/api/auth/register`}
                      title="Registro"
                      submitText="Registrarse"
                      includeUsername
                      includeEmail
                      includePassword
                    />
                    <p>
                      ¿Ya tienes una cuenta?{" "}
                      <button onClick={handleToggleForm}>Iniciar sesión</button>
                    </p>
                  </>
                ) : (
                  <>
                    <AuthForm
                      endpoint={`${import.meta.env.VITE_APP_URL}/api/auth/login`}
                      title="Iniciar sesión"
                      submitText="Iniciar sesión"
                      includeEmail
                      includePassword
                    />
                    <p>
                      ¿No tienes una cuenta?{" "}
                      <button onClick={handleToggleForm}>Regístrate aquí</button>
                    </p>
                  </>
                )}
              </>
            )}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default AuthModal;