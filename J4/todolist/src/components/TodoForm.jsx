import React, { useState } from 'react'

function TodoForm(props) {
  const [taskTitle, setTaskTitle] = useState('');

  function submitForm(event) {
    event.preventDefault();
    props.onTask(taskTitle);
    setTaskTitle('');
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" placeholder="Nouvelle tâche" onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} />
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default TodoForm