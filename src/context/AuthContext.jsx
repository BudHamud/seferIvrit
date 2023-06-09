import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/auth/checkLoggedIn`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => setIsLoggedIn(data.isLoggedIn))
      .catch((error) => console.log(error));
  }, []); // Pasando un arreglo vacío como segundo argumento

  return (
    <AuthContext.Provider value={{ isLoggedIn, updateLoggedInStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
