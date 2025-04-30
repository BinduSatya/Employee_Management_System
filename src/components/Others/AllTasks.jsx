import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);
  //   console.log(authData.employees);

  return (
    <>
      <div
        id="tasklis"
        className="bg-[#1c1c1c] p-1 rounded mt-5 h-30 admin_tasks"
      >
        <div className="bg-pink-600 mb-1 py-1 px-4 flex justify-between rounded">
          <h2 className="w-1/5">Employee Name</h2>
          <h2 className="w-1/5">New Task</h2>
          <h2 className="w-1/5">Active Task</h2>
          <h2 className="w-1/5">Completed Task</h2>
          <h2 className="w-1/5">Failed Task</h2>
        </div>
        
        <div className="overflow-auto">
          {authData.employees.map((emp, idx) => {
            return (
              <div
                key={idx}
                className="bg-emerald-400 py-1 px-4 mb-2 flex justify-between rounded"
              >
                <h2 className="w-1/5 text-red-600">{emp.firstname}</h2>
                <h3 className="w-1/5 text-blue-600">
                  {emp.taskCounts.newTask}
                </h3>
                <h3 className="w-1/5 text-yellow-600">
                  {emp.taskCounts.active}
                </h3>
                <h3 className="w-1/5 text-green-600">
                  {emp.taskCounts.completed}
                </h3>
                <h3 className="w-1/5 text-red-600">{emp.taskCounts.failed}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTasks;
