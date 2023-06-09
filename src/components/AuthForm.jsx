import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import userAPI from "../api/userAPI";

const AuthForm = ({
  action,
  title,
  submitText,
  includeUsername,
  includeEmail,
  includePassword,
}) => {
  const { updateUser } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email,
        password,
      };

      if (includeUsername) {
        userData.username = username;
      }

      const response = await userAPI[action](userData);

      if (response) {
        const data = await response;
        updateUser(data.user);
        navigate("/unit");
      } else {
        const errorData = await response;
        console.log("Authentication error:", errorData.message);
      }
    } catch (error) {
      console.log("Error sending the request:", error);
    }
  };

  const checkLoggedIn = () => {
    const isLoggedIn = true; // Replace with actual backend check

    if (isLoggedIn) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {includeUsername && (
          <div>
            <p>Nombre de usuario:</p>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        {includeEmail && (
          <div>
            <p>Email:</p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        {includePassword && (
          <div>
            <p>Contraseña:</p>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">{submitText}</button>
      </form>
    </>
  );
};

export default AuthForm;
