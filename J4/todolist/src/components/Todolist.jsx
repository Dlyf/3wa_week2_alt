import React, { useState } from "react"
import TodoForm from "./TodoForm";
import Todoitem from "./Todoitem";

function Todolist() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Apprendre JS', isCompleted: true },
    { id: 2, title: 'Apprendre CSS', isCompleted: true },
    { id: 3, title: 'Apprendre React', isCompleted: false },
  ]);

  return (
    <>
      <TodoForm />
      {tasks.map(task => (
        <Todoitem key={task.id} task={task} />
      ))}
    </>
  )
}

export default Todolist