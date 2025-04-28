import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header />
        <TaskListNumbers />
        <Tasklist />
      </div>
    </>
  );
};

export default EmployeeDashboard;
