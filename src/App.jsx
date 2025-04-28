import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  //   useEffect(() => {
  //     setLocalStorage();
  //     getLocalStorage();
  //   });

  const [user, setUser] = useState(null);
  let authData = "a";

  authData = useContext(AuthContext);
  if (authData) {
    console.log(authData.employees);
  }

  useEffect(() => {
    if (authData) {
      const loggedUser = localStorage.getItem("loggedUser");
      if (loggedUser) {
        const user = JSON.parse(loggedUser);
        console.log("usr is", user.role);
        setUser(loggedUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admins.find((e) => e.email == email && e.password == password)
    ) {
      setUser("admin");
      console.log("This is Admin");
      localStorage.setItem("loggedUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employees.find((e) => e.email == email && e.password == password)
    ) {
      setUser("employee");
      console.log("This is User");
      localStorage.setItem("loggedUser", JSON.stringify({ role: "employee" }));
    } else {
      alert("Invalid User");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
