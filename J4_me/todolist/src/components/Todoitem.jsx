import React from 'react'

function Todoitem(props) {

  function editTask() {
    // remonter les infos c'est cette étape avec props via le render
    const task = {
      ...props.task,
      isCompleted: !props.task.isCompleted
    };
    props.updateTask(task)
  }

 function deleteTask() {
  // appel de removeTask
  props.removeTask(props.task)
 }

  return (
    <div>
        <input type="checkbox" checked={props.task.isCompleted} onChange={editTask} />
        <span>{props.task.title}</span>
        <span onClick={deleteTask}>❎</span>
    </div>
  )
}

export default Todoitem