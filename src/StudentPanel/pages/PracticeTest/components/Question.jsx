// src/Question.js
import React from 'react';

const Question = ({ question }) => {
  return (
    <div>
      <h2>{question.text}</h2>
    </div>
  );
};

export default Question;
