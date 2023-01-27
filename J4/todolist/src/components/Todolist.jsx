import React, { useState } from "react"
import TodoForm from "./TodoForm";
import Todoitem from "./Todoitem";
import { v4 as uuidv4 } from "uuid";

function Todolist(props) {
  const [tasks, setTasks] = useState(props.tasks);
  
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
    <div className="Todolist">
      <h1>{props.title}</h1>
      <a href="#" onClick={() => props.onDeleteList(props.listId)}>❌</a>
      
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
    </div>
  )
}

export default Todolist