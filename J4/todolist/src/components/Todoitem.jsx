import React from 'react';

function Todoitem(props) {
  // (exemple)
  // props.task =  { id: uuidv4(), title: 'Apprendre JS', isCompleted: true }
  // props.updateTask =  function updateTask(updatedTask) { … }
  // props.removeTask =  function removeTask(taskToRemove) {
    
  function editTask() {
    const task = {
      ...props.task,
      isCompleted : !props.task.isCompleted
    };
    props.updateTask(task);
  }

  function deleteTask() {
    props.removeTask(props.task);
  }

  return (
    <div>
      <input type="checkbox" checked={props.task.isCompleted} onChange={editTask} />
      <span>{props.task.title}</span>
      <a href="#" onClick={deleteTask}>✖</a>
    </div>
  );
}

export default Todoitem;
