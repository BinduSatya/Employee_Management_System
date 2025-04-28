import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider =  ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const { employees, admins } = getLocalStorage();
    setUserData({ employees, admins });
  }, []);

  return (
    <>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
