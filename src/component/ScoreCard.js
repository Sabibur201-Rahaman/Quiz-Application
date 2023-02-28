import React from 'react'

function ScoreCard({totalScore,resetQuiz}) {
  return (
    <div className='result'>
        <h3>ResultPage</h3>
        <p>Score:{totalScore}</p>
      <button onClick={resetQuiz}className='btn reset-btn'>Reset Quiz</button>
    </div>
  )
}

export default ScoreCard
