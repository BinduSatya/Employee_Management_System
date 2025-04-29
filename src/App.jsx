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
    console.log("auth data is", authData);
  }

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    // setLoggedInUserData(loggedUser);

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
      console.log("user is", user);
    }
  }, [loggedInUserData]);

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admins.find(
        (e) => e.email == email && e.password == password
      );
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (admin) {
        // setUser("admin");
        setLoggedInUserData(admin);
        console.log("This is Admin");
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "admin", data: admin })
        );
      } else if (employee) {
        if (employee) {
          //   setUser("employee");
          setLoggedInUserData(employee);
          localStorage.setItem(
            "loggedUser",
            JSON.stringify({ role: "employee", data: employee })
          );
        }
      } else {
        alert("Invalid User");
      }
      //   loggedInUserData = user;
    } else alert("Invalid User");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role == "admin" ? (
        <AdminDashboard data={user.data} />
      ) : (
        <EmployeeDashboard data={user.data} />
      )}
      {/* {user && user.role == "admin" ? <AdminDashboard data={user.data} /> : ""}
      {user && user.role == "employee" ? (
        <EmployeeDashboard data={user.data} />
      ) : (
        ""
      )} */}
    </>
  );
};

export default App;
