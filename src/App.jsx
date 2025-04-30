import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage,setLocalStorage } from "./utils/localStorage";
// import { setLocalStorage } from "./utils/localStorage";

const App = () => {
//   useEffect(() => {
//     setLocalStorage();
//   });

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
        setLoggedInUserData(admin);
        console.log("This is Admin");
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "admin", data: admin })
        );
      } else if (employee) {
        setLoggedInUserData(employee);
        console.log("employee is", employee);
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else alert("Invalid User");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role == "admin" ? (
        <AdminDashboard data={user.data} changeUser={setUser} />
      ) : (
        <EmployeeDashboard data={user.data} changeUser={setUser} />
      )}
    </>
  );
};

export default App;
