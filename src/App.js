import React, { useState } from "react";

const initialTasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Read a book", completed: true },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  // Add task handler
  const addTask = () => {
    if (newTask.trim() === "") return; // validation
    const task = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle complete handler
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Delete task handler
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div
      className="container"
      style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}
    >
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        style={{ padding: "10px", width: "70%" }}
      />
      <button
        onClick={addTask}
        style={{ padding: "10px 15px", marginLeft: "10px" }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ margin: "10px 0", display: "flex", alignItems: "center" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span
              style={{
                marginLeft: "10px",
                textDecoration: task.completed ? "line-through" : "none",
                flexGrow: 1,
              }}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
