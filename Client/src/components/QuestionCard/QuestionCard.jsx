import React from 'react';
import Questionform from '../QuestionForm/QuestionForm';
import './questionCard.css';

export default function QuestionCard({ questionOne, setQuestionOne}) {
  return ( 
    <div className="questionCard">
      <div className="question">
        {questionOne.Q1}
      </div>
      <div className="choiceCard">
        <div className='topChoices'>
          <div className="choice-one">{questionOne.Q1correct}</div>
          <div className="choice-two">{questionOne.Q1Wrong1}</div>
        </div>
        <div className='bottomChoices'>
          <div className="choice-three">{questionOne.Q1Wrong2}</div>
          <div className="choice-four">{questionOne.Q1Wrong3}</div>
        </div>
      </div>
    </div>  
  )
}
