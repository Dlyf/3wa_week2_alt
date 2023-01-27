import React from 'react';
import { useContext } from 'react';
import TodoContext from '../TodoContext'

function Todoitem(props) {
  // (exemple)
  // props.task =  { id: uuidv4(), title: 'Apprendre JS', isCompleted: true }
  // props.updateTask =  function updateTask(updatedTask) { … }
  // props.removeTask =  function removeTask(taskToRemove) {

  const {state, setState} = useContext(TodoContext);

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
      contexte = {state.name}
      <button onClick={() => setState({ name: 'Jean-Marie' })}>change name</button>
      <input type="checkbox" checked={props.task.isCompleted} onChange={editTask} />
      <span>{props.task.title}</span>
      <a href="#" onClick={deleteTask}>✖</a>
    </div>
  );
}

export default Todoitem;
