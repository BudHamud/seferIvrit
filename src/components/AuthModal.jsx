import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import userAPI from "../api/userAPI";

const AuthModal = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const data = await userAPI.logout();
    if (data.success) {
      navigate("/");
      updateUser([]);
      closeModal();
    } else {
      console.log(data);
    }
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
      {user.length !== 0 ? (
        <li onClick={openModal}>
          <img src={user.profileImg} />
          <p>XP {user.xp}</p>
        </li>
      ) : (
        <li>
          <img src="/user.svg" onClick={openModal} />
        </li>
      )}

      {isModalOpen && (
        <ModalWrapper className="aos-init">
          <ModalContent data-aos="fade-down">
            <CloseButton onClick={closeModal} />
            {user.length !== 0 ? (
              <>
                <h2>¿Deseas cerrar sesión?</h2>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </>
            ) : (
              <>
                {isRegistering ? (
                  <>
                    <AuthForm
                      action="register"
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
                      action="login"
                      title="Iniciar sesión"
                      submitText="Iniciar sesión"
                      includeEmail
                      includePassword
                    />
                    <p>
                      ¿No tienes una cuenta?{" "}
                      <button onClick={handleToggleForm}>
                        Regístrate aquí
                      </button>
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
  line-height: 2.5;
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
