import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)} //ACTIONS GO UP THE CHAIN, STATES GO DOWN, This ondelte is an action, you send the params up to app, state of things comes from app
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
