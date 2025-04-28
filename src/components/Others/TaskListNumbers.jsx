const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="py-6 px-9 rounded-xl  w-[45%] bg-blue-400">
        <h2 className="font-semibold text-3xl">{data.taskCounts.newTask}</h2>
        <h3 className="font-medium text-xl">New Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl  w-[45%] bg-green-400">
        <h2 className="font-semibold text-3xl">{data.taskCounts.completed}</h2>
        <h3 className="font-medium text-xl">Completed Tasks</h3>
      </div>
      <div className="py-6 px-9 rounded-xl  w-[45%] bg-red-400">
        <h2 className="font-semibold text-3xl">{data.taskCounts.failed}</h2>
        <h3 className="font-medium text-xl">Failed Tasks</h3>
      </div>
      <div className="py-6 px-9 rounded-xl  w-[45%] bg-yellow-600">
        <h2 className="font-semibold text-3xl">{data.taskCounts.active}</h2>
        <h3 className="font-medium text-xl">Active Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
