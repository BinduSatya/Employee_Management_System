import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  useEffect(() => {
    setLocalStorage();
  });

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);
  if (authData) {
    console.log(authData);
  }

  //   useEffect(() => {
  //     if (authData) {
  //       const loggedUser = localStorage.getItem("loggedUser");
  //       if (loggedUser) {
  //         const user = JSON.parse(loggedUser);
  //         console.log("usr is", user.role);
  //         setUser(loggedUser.role);
  //       }
  //     }
  //   }, [authData]);

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admins.find(
        (e) => e.email == email && e.password == password
      );
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (admin) {
        setUser("admin");
        setLoggedInUserData(admin);
        console.log("This is Admin");
        localStorage.setItem("loggedUser", JSON.stringify("admin"));
      } else if (employee) {
        if (employee) {
          setUser("employee");
          setLoggedInUserData(employee);
          localStorage.setItem("loggedUser", JSON.stringify("employee"));
        }
      } else {
        alert("Invalid User");
      }
    } else alert("Invalid User");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard data={loggedInUserData} /> : ""}
      {user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : ""}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
