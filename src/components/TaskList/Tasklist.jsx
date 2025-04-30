import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasks"
      className=" h-[45%] overflow-x-auto w-full mt-10 flex items-center flex-nowrap gap-5 justify-start"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={idx} task={task} data={data} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} task={task} data={data} />;
        }
        if (task.newTask) {
          return <NewTask key={idx} task={task} data={data} />;
        }
        if (task.failed) {
          return <FailedTask key={idx} task={task} data={data} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
