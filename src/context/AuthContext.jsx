import { createContext, useState, useEffect } from "react";
import userAPI from "../api/userAPI";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const checkLoggedIn = async () => {
    try {
      const data = await userAPI.getUserStatus();
      if (data.isLoggedIn) {
        setUser(data.user);
      } else {
        setUser([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };