import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const updateUser = (status) => {
    setUser(status);
  };

  useEffect(() => {
  fetch(`${import.meta.env.VITE_APP_URL}/api/auth/checkLoggedIn`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.isLoggedIn) {
        setUser(data.user);
      } else {
        setUser([]);
      }
    })
    .catch((error) => console.log(error));
}, []);

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
