import React, { useReducer, useState } from 'react';
import Quiz from './components/Quiz';
import quizData from './quizData';
import QuizContext from './quizContext';

function App() {
  
  const [userAnswers, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case 'ADD_ANSWER':
        return [...state, payload];
      default:
        return state;
    }
  }, []);

  return (
    <QuizContext.Provider value={{ userAnswers, dispatch }}>
      <div className="App">
        <Quiz title={quizData.title} questions={quizData.questions} />
        <hr />
        Précédentes réponses :
        <ul>
          {userAnswers.map((answer, i) => (
            <li key={i}>
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </QuizContext.Provider>
  );
}

export default App;
