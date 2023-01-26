import React, { useState } from "react"
import TodoForm from "./TodoForm";
import Todoitem from "./Todoitem";
import { v4 as uuidv4 } from "uuid";

function Todolist() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: 'Apprendre JS', isCompleted: true },
    { id: uuidv4(), title: 'Apprendre CSS', isCompleted: true },
    { id: uuidv4(), title: 'Apprendre React', isCompleted: false },
  ]);

  function addTask(title) {
    const newTask = {
      id: uuidv4(),
      title: title,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  }

  function updateTask(updatedTask) {
    const taskIndex = tasks.findIndex(task => task.id === updatedTask.id);
    tasks.splice(taskIndex, 1, updatedTask);
    setTasks([...tasks]);
  }

  const remaining = tasks.filter(task => task.isCompleted).length;
  const total = tasks.length;

  return (
    <>
      <TodoForm onTask={addTask} />
      <p>{remaining}/{total} effectuées</p>
      {tasks.map(task => (
        <Todoitem key={task.id} task={task} updateTask={updateTask} />
      ))}
    </>
  )
}

export default Todolist