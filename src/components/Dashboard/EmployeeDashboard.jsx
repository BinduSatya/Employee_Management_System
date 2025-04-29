import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        {/* <h1>{loggedInUserData.data.id}</h1> */}
        <Header data={data} changeUser={changeUser} />
        <TaskListNumbers data={data} />
        <Tasklist data={data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
