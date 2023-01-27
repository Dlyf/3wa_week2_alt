import React from 'react';

function Question({ question, answers, onAnswer }) {
  return (
    <div>
      <p>{question}</p>
      {answers.map((answer, index) => (
        <button key={index} onClick={() => onAnswer(answer)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
