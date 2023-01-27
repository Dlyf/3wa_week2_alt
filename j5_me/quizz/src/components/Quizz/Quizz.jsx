// Créez un composant Quiz qui affiche le titre du quiz, une question et une liste de réponses possibles. Utilisez des props pour passer les informations de titre, question et réponses à ce composant.

{/* <Quiz />
  |- title (props)
  |- questions (props)
  |- currentIndex (state)
  |- selectedAnswer (state) */}

import React from 'react'
import QuizzStore from '../../QuizzStore';

function Quizz() {
 console.log(QuizzStore)
  function Title(props) {
    return <h1>{props.name.toUpperCase()}</h1>
  }
  
  function Question() {
    return <p>Quel pays a remporté la coupe de monde en 2022 ?</p>
  }

  function Answer() {
    
    return (
      <div>
        <h2>Liste des réponses: </h2>
        <ol>{answers.map((reponse, index) => (
          <li key={index+reponse}>{answers.reponse}</li>
            ))}
        </ol>
      </div>
    )
  }
  return (
    <div>
      <Title name="Quizz App reactjs"/>
      <Question />
      <Answer />
    </div>
  )
}

export default Quizz