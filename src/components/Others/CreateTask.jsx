import { useState } from "react";
import handleReplacement from "./handleReplacement";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHnadler = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(title, date, assign, category, description);
    let task = {
      title,
      date,
      assign,
      category,
      description,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    };

    let emps = JSON.parse(localStorage.getItem("employees"));
    console.log("task assigned", task);
    console.log("emps", emps);

    for (let i = 0; i < emps.length; i++) {
      if (assign == emps[i].firstname) {
        emps[i].tasks.push(task);
        emps[i].taskCounts.newTask++;
        setTitle("");
        setDate("");
        setAssign("");
        setCategory("");
        setDescription("");
        task = {};
        localStorage.removeItem("employees");
        localStorage.setItem("employees", JSON.stringify(emps));
        // handleReplacement(emps);
        console.log(emps[i]);
      }
    }

    if (task != {} && title != "" && date != "") {
      alert(`There is no existing user with name ${assign}`);
    }
  };

  return (
    <div className="p-5 bg-[#1C1c1c] mt-7 rounded">
      <form
        className="flex flex-wrap w-full items-start justify-between"
        onSubmit={(e) => submitHnadler(e)}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></input>
          </div>
          <div>
            <h3>Assign To:</h3>
            <input
              value={assign}
              onChange={(e) => {
                setAssign(e.target.value);
              }}
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
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Design,  Dev, etc"
              id=""
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3>Descrition</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
