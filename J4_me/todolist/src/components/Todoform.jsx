import React, { useState } from 'react'

    function Todoform(props) {
    const [taskTitle, setTaskTitle] = useState('')

    function onFormSubmit(event) {
        event.preventDefault();
        if (taskTitle.trim() !== ' ') {
            props.onTask(taskTitle)
            setTaskTitle('');
        }
        // props.onSubmit(taskTitle);
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" name="task" placeholder="Nouvelle tâche" onChange={e => setTaskTitle(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default Todoform