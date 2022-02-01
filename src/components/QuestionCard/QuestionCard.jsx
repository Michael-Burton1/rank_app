import React from 'react';
import './questionCard.css';

export default function QuestionCard() {
  return ( 
    <div className="questionCard">
      <div className="question">
        HELLO THIS IS A TEST QUESTION?
      </div>
      <div className="choiceCard">
        <div className='topChoices'>
          <div className="choice-one">ONE</div>
          <div className="choice-two">TWO</div>
        </div>
        <div className='bottomChoices'>
          <div className="choice-three">THREE</div>
          <div className="choice-four">FOUR</div>
        </div>
      </div>
    </div>  
  )
}
