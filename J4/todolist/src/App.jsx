import React, { useState } from 'react'
import Todolist from './components/Todolist'
import { v4 as uuidv4 } from "uuid";
import TodoForm from './components/TodoForm';
import TodoContext from './TodoContext';

function App() {

  const [todolists, setTodolists] = useState([
    {
      id: uuidv4(),
      title: 'Cours',
      tasks: [
        { id: uuidv4(), title: 'Apprendre JS', isCompleted: true },
        { id: uuidv4(), title: 'Apprendre CSS', isCompleted: true },
        { id: uuidv4(), title: 'Apprendre HTML', isCompleted: true },
        { id: uuidv4(), title: 'Apprendre React', isCompleted: false },
        { id: uuidv4(), title: 'Apprendre Redux', isCompleted: false },
      ]
    },
    {
      id: uuidv4(),
      title: 'Liste de courses',
      tasks: [
        { id: uuidv4(), title: 'Acheter du pain', isCompleted: true },
        { id: uuidv4(), title: 'Nourrir le chat', isCompleted: true },
      ]
    },
  ]);

  function addTodolist(title) {
    const newTodo = {
      id: uuidv4(),
      title: title,
      tasks: []
    };
    setTodolists([...todolists, newTodo]);
  }

  function deleteList(id) {
    const listIndex = todolists.findIndex(list => list.id === id);
    todolists.splice(listIndex, 1);
    setTodolists([...todolists]);
  }

  const [state, setState] = useState({ name: 'coco' });

  return (
    <TodoContext.Provider value={{state, setState}}>
      <div className="container">
        <h1>Application de gestion de tâches</h1>
        <hr />
        <TodoForm onTask={addTodolist} />
        {todolists.map(todolist => (
          <Todolist key={todolist.id} tasks={todolist.tasks} title={todolist.title} listId={todolist.id} onDeleteList={deleteList} />
        ))}
      </div>
    </TodoContext.Provider>
  )
}

export default App
