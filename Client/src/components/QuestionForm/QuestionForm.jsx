import React, {useState} from 'react';
import './questionForm.css';

const Questionform = ({questionOne, setQuestionOne}) => {
  // const [questionOne, setQuestionOne] = useState({
  //   Q1:"",
  //   Q1correct:"",
  //   Q1Wrong1:"",
  //   Q1Wrong2:"",
  //   Q1Wrong3:"",
   
  // })

  const onHandleSubmit = (e) =>{
    e.preventDefault();
    console.log(questionOne)
  
  }

  return (
    <div className='mainQuestionForm'>
        <h1>Question Form:</h1>
        <form className='questionForm'>
          <div className='formContainer'>
            <div className='singleQuestion 1'>
              <label>Question 1:</label> 
                <input 
                  type="textarea" 
                  name="Question1" 
                  onChange={(e) => setQuestionOne({...questionOne, Q1: e.target.value})}/>
              <label>Correct Answer:</label>
                <input 
                  type="textarea" 
                  name="Correct Answer" 
                  onChange={(e) => setQuestionOne({...questionOne, Q1correct: e.target.value})}/>
              <label> Wrong Answer 1:</label>
                <input 
                  type="textarea" 
                  name="Wrong Answer 1" 
                  onChange={(e) => setQuestionOne({...questionOne, Q1Wrong1: e.target.value})}/>
              <label>Wrong Answer 2:</label>
                <input 
                  type="textarea" 
                  name="Wrong Answer2" 
                  onChange={(e) => setQuestionOne({...questionOne, Q1Wrong2: e.target.value})}/>
              <label> Wrong Answer 3:</label>
                <input 
                  type="textarea" 
                  name="Wrong Answer3" 
                  onChange={(e) => setQuestionOne({...questionOne, Q1Wrong3: e.target.value})}/>/>
            </div>
          </div>
            <button 
              type="submit" 
              value="Submit" 
              onClick={onHandleSubmit}> submit </button> 
        </form>
    </div>
  );
}

export default Questionform;

{/* <div className='singleQuestion 2'>
  <label>Question 2:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 3'>
  <label>Question 3:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 4'>
  <label>Question 4:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 5'>
  <label>Question 5:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 6'>
  <label>Question 6:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 7'>
  <label>Question 7:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 8'>
  <label>Question 8:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 9'>
  <label>Question 9:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 10'>
  <label>Question 10:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 11'>
  <label>Question 11:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 12'>
  <label>Question 12:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 13'>
  <label>Question 13:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 14'>
  <label>Question 14:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 15'>
  <label>Question 15:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 16'>
  <label>Question 16:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 17'>
  <label>Question 17:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 18'>
  <label>Question 18:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 19'>
  <label>Question 19:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 20'>
  <label>Question 20:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div>
<div className='singleQuestion 21'>
  <label>Question 21:</label> 
    <input type="textarea" name="Question1"/>
  <label>Correct Answer:</label>
    <input type="textarea" name="Correct Answer"/>
  <label> Wrong Answer 1:</label>
    <input type="textarea" name="Wrong Answer 1"/>
  <label>Wrong Answer 2:</label>
    <input type="textarea" name="Wrong Answer2"/>
  <label> Wrong Answer 3:</label>
    <input type="textarea" name="Wrong Answer3"/>
</div> */}