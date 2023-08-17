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
  const [error, setError] = useState("");
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
  
      const { data, error } = await userAPI[action](userData);
  
      if (error) {
        setError(error);
      } else {
        updateUser(data.user);
        navigate("/exercises");
      }
    } catch (error) {
      console.log('Frontend Error:', error);
    }
  };  

  const checkLoggedIn = () => {
    const isLoggedIn = true;

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
        {error && <p className="error-message">{error}</p>}
      </form>
    </>
  );
};

export default AuthForm;
