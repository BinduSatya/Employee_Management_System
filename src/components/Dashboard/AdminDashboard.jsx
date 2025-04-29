import AllTasks from "../Others/AllTasks";
import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";

const AdminDashboard = ({ data, changeUser }) => {
  return (
    <div className="h-screen p-7 w-full">
      <Header data={data} changeUser={changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
