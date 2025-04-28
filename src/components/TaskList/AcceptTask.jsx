const AcceptTask = () => {
  return (
    <div
      id="task"
      className="h-[90%] flex-shrink-0 px-3 py-2 w-[20%] bg-pink-500 rounded-[3%] overflow-y-auto"
    >
      <div className="flex justify-between item-center">
        <h3 className="text-sm bg-red-800 rounded-sm px-2 py-1">Category</h3>
        <h4 className="text-sm">28 April 2025</h4>
      </div>
      <h2 className="mt-2 text-2xl font-semibold">Complete CN and OS</h2>
      <p className="text-sm wrap mt-2">
        Lorem ipsum dolor siadfadsf;adsfja; adf asdfjadf; iadhfiuurovn t amet
        consectetur adipisicing elit. Quidem, iste!
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">
          Completed
        </button>
        <button className="bg-blue-500 py-1 px-2 text-sm rounded">
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
