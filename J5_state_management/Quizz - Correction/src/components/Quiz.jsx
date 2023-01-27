import React, { useContext, useEffect, useReducer, useState } from 'react';
import Question from './Question';
import quizContext from '../quizContext';

function Quiz({ title, questions }) {
  const initialState = {
    score: 0,
    currentQuestionIndex: 0,
    isFinished: false,
  };
  const [quiz, setQuiz] = useReducer(
    (state, partialState) => ({
      ...state,
      ...partialState,
    }),
    initialState
  );
  const currentQuestion = questions[quiz.currentQuestionIndex];

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { dispatch } = useContext(quizContext);

  useEffect(() => {
    if (selectedAnswer?.id === currentQuestion.correctAnswer) {
      setQuiz({ score: quiz.score + 1 });
    }

    if (quiz.currentQuestionIndex + 1 === questions.length) {
      setQuiz({ isFinished: true });
      return;
    }

    setQuiz({ currentQuestionIndex: quiz.currentQuestionIndex + 1 });
  }, [selectedAnswer]);

  function onAnswer(answer) {
    setSelectedAnswer(answer);

    const goodAnswerText = currentQuestion.answers.find((a) => a.id === currentQuestion.correctAnswer).text;
    console.log(goodAnswerText);
    console.log(answer.id === currentQuestion.correctAnswer);
    const report = (
      <>
        « {currentQuestion.question} »<br />
        Votre réponse : « {answer.text} »<br />
        {answer.id === currentQuestion.correctAnswer ? (
          <>Bonne réponse !</>
        ) : (
          <>Mauvaise réponse ! La bonne réponse était « {goodAnswerText} »</>
        )}
      </>
    );

    dispatch({ type: 'ADD_ANSWER', payload: report });
  }

  const questionNumber = quiz.currentQuestionIndex + 1;
  const nbQuestions = questions.length;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>
        <h1>{title}</h1>
      </div>

      {!quiz.isFinished && (
        <>
          <div>
            Progression : <progress max={nbQuestions} value={questionNumber} />
            <br />
            Score : {quiz.score}
          </div>
          <Question question={currentQuestion.question} answers={currentQuestion.answers} onAnswer={onAnswer} />
        </>
      )}

      {quiz.isFinished && (
        <>
          <h2>Fin du quizz</h2>
          <p>
            <strong>Score final :</strong> {quiz.score}/{nbQuestions}
          </p>
          <button onClick={() => setQuiz({ ...initialState })}>Recommencer</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
