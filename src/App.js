import { useState } from "react"; //use state to import a dynamic list of tasks
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    //tasks is hardcoded currently, set tasks is going to be a func that adds a task
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping",
      day: "Feb 7th at 2:30pm",
      reminder: true,
    },
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks here"
      )}
    </div>
  ); // this is the ui page so we are bringing in our header and tasks components
}

export default App;
