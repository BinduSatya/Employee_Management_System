const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1C1c1c] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Complete the CN playlist"
              name=""
              id=""
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></input>
          </div>
          <div>
            <h3>Assign To:</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Employee Name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
              type="text"
              name=""
              placeholder="Design,  Dev, etc"
              id=""
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3>Descrition</h3>
          <textarea
            name=""
            rows="6"
            id=""
            className="text-sm py-1 px-2 w-full  rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
