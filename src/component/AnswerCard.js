import React from 'react'

function AnswerCard({answer,pickAnswer,correctAnswer,pickedAnswer}) {
  const isRightAnswer=pickedAnswer && answer===correctAnswer
  const isWrongAnswer =
    pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer
  const correctClass=isRightAnswer?'correct-answer':''
  const wrongClass = isWrongAnswer ? 'incorrect-answer' : ''
  const disabledClass=pickedAnswer&&'disabled-answer'
  // console.log(answer)
  return (
 
    <div className={`quiz-answer  ${correctClass} ${wrongClass} ${disabledClass}`}
    onClick={()=>pickAnswer(answer)}>
      {answer}
    </div>
  )
}
export default AnswerCard
