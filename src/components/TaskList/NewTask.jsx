const NewTask = ({ task }) => {
  //YELLOW
  return (
    <div
      id="task"
      className="h-[90%] flex-shrink-0 px-3 py-2 w-[20%] bg-yellow-500 rounded-[3%] overflow-y-auto"
    >
      <div className="flex justify-between item-center">
        <h3 className="text-sm bg-red-800 rounded-sm px-2 py-1">
          {task.category}
        </h3>
        <h4 className="text-sm ">{task.date}</h4>
      </div>
      <h2 className="mt-2 text-2xl font-semibold">{task.title}</h2>
      <p className="text-sm wrap mt-2">{task.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-yellow-600 py-1 px-2 text-sm rounded">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
