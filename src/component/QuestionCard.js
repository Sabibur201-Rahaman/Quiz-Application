import React from 'react'
import AnswerCard from './AnswerCard'
function QuestionCard({quiz,currentAnswers,currentQuestionIndex,quizzes,navigateNext,pickAnswer,correctAnswer,pickedAnswer}) {
    // console.log(quiz)
  return (
    <div className='question-card'>
      <p>Questions:{currentQuestionIndex+1}/{quizzes.length}</p>
      <button onClick={navigateNext}>Next</button>
     <h3>{quiz.question}</h3>
     {currentAnswers.map((answer,i)=><AnswerCard Key={i} answer={answer} pickAnswer={pickAnswer} correctAnswer={correctAnswer} pickedAnswer={pickedAnswer}/>)}
    </div>
  )
}
export default QuestionCard
