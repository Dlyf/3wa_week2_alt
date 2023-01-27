import React, { useState } from 'react'
import Todoform from './Todoform';
import Todoitem from './Todoitem';
import { v4 as uuidv4 } from "uuid"

function Todolist(props) {

    const [tasks, setTasks] = useState(props.tasks);

    // TODO: d'écouter l'evenement , ajouter la tâche : remontée des props
        // Lorsqu'on clique sur une croix, on supprime la tache.
        // Sauvegarde de localStorage,  une seul todolist, faire un agrégateur de todolist pour les vacances, ajouter du style
    const [showCompleted, setShowCompleted] = useState(null);

    function create(taskTitle) {
        const newTask = {
            id: uuidv4(),
            title: taskTitle,
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
    // préparer des jsx via des constantes 

    const filteredTask = tasks.filter(task => {
        if (showCompleted === null) return true;
        return (showCompleted === task.isCompleted);
        // if (showCompleted === null) return true;
        // if (showCompleted === false) return (task.isCompleted === false);
        // if (showCompleted === true) return task.isCompleted === true;
    })

    // déclare la prop removeTask dans le return
  return (
    <div className="Todolist">
        <h1>{props.title}</h1>
        <a href="#" onClick={() => props.onDeleteList(props.listId)}>❌</a>

        <Todoform onTask={create} onSubmit={create}/>
        <p>{remaining}/{total} effectuées</p>

        <div>
            <button onClick={() => setShowCompleted(true)}>Afficher tâches effectuées</button>
            <button onClick={() => setShowCompleted(false)}>Afficher tâches à faire</button>
            <button onClick={() => setShowCompleted(null)}>Toutes</button>
        </div>
        {filteredTask.map(task => (
            <Todoitem  key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} />
        ))}
    </div>
  )
}


export default Todolist