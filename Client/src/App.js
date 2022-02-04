import React, {useState} from 'react'
import Topbar from './components/Topbar/Topbar'
import QuestionCard from './components/QuestionCard/QuestionCard';
import QuestionForm from './components/QuestionForm/QuestionForm';
import './app.css'

function App() {
  const [questionOne, setQuestionOne] = useState({
    Q1:"",
    Q1correct:"",
    Q1Wrong1:"",
    Q1Wrong2:"",
    Q1Wrong3:"",
   
  })

  return (
    <>
    <Topbar />
    <div className="App">
      <QuestionForm 
        questionOne={questionOne}
        setQuestionOne={setQuestionOne}
      />
      <QuestionCard 
      questionOne={questionOne}
      setQuestionOne={setQuestionOne}
      />
    </div>
    </>
  );
}

export default App;
