import React from 'react'
import Todolist from './components/Todolist'

function App() {

  /*
    [
      {
        title: 'Liste pour les courses',
        tasks : [
                { id: uuidv4(), title: 'Apprendre JS', isCompleted: true },
                { id: uuidv4(), title: 'Apprendre CSS', isCompleted: true },
                { id: uuidv4(), title: 'Apprendre React', isCompleted: false },
              ]
      }
      ,

      {
        title: 'Liste pour les courses',
        tasks : [
                { id: uuidv4(), title: 'Apprendre JS', isCompleted: true },
                { id: uuidv4(), title: 'Apprendre CSS', isCompleted: true },
                { id: uuidv4(), title: 'Apprendre React', isCompleted: false },
              ]
      }
    ]
  */

  return (
    <div className="container">
      <h1>Application de gestion de tâches</h1>
      <hr />
      <Todolist />
    </div>
  )
}

export default App
