import AllTasks from "../Others/AllTasks";
import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen p-7 w-full">
      <Header />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
