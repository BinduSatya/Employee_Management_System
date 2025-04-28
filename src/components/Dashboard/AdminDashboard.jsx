import AllTasks from "../Others/AllTasks";
import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";

const AdminDashboard = ({ data }) => {
  return (
    <div className="h-screen p-7 w-full">
      <Header data={data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
