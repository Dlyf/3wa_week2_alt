import React, { useState } from "react"
import TodoForm from "./TodoForm";
import Todoitem from "./Todoitem";
import { v4 as uuidv4 } from "uuid";

function Todolist() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: 'Apprendre JS', isCompleted: true },
    { id: uuidv4(), title: 'Apprendre CSS', isCompleted: true },
    { id: uuidv4(), title: 'Apprendre HTML', isCompleted: true },
    { id: uuidv4(), title: 'Apprendre React', isCompleted: false },
    { id: uuidv4(), title: 'Apprendre Redux', isCompleted: false },
  ]);
  
  const [showCompleted, setShowCompleted] = useState(null);
  // null, true, false

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

  function removeTask(taskToRemove) {
    const taskIndex = tasks.findIndex(task => task.id === taskToRemove.id);
    tasks.splice(taskIndex, 1);
    setTasks([...tasks]);
  }

  const remaining = tasks.filter(task => task.isCompleted).length;
  const total = tasks.length;

  const filteredTasks = tasks.filter(task => {
    if (showCompleted === null) return true;
    return (showCompleted === task.isCompleted);
    // if (showCompleted === false) return task.isCompleted === false;
    // if (showCompleted === true) return task.isCompleted === true;
  });

  return (
    <>
      <TodoForm onTask={addTask} />
      <p>{remaining}/{total} effectuées</p>

      <div>
        <button onClick={() => setShowCompleted(true)}>Effectuées</button>
        <button onClick={() => setShowCompleted(false)}>En cours</button>
        <button onClick={() => setShowCompleted(null)}>Toutes</button>
      </div>

      {filteredTasks.map(task => (
        <Todoitem key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} />
      ))}
    </>
  )
}

export default Todolist