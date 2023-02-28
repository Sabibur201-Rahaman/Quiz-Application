
import { useState } from "react";
import QuestionCard from "./component/QuestionCard";
import ScoreCard from "./component/ScoreCard";
import shuffle from "./component/utils";

const App=()=> {
  const [quizzes,setQuizzes]=useState(null)
  const[currentQuestionIndex,setCurrentQuestionIndex]=useState(0)
  const[loaded,setLoaded]=useState(false)
  const[StartQuiz,setStartQuiz]=useState(false)
  const[endGame,setEndGame]=useState(false)
  const[currentAnswers,setCurrentAnswers]=useState(null)
  const[totalScore,setTotalScore]=useState(0)
  const[correctAnswer,setCorrectAnswer]=useState(null)
  const[pickedAnswer,setPickedAnswer]=useState(null)
  const pickAnswer=(answer)=>{
    setPickedAnswer(answer)
    if(answer===correctAnswer){
      setTotalScore((prevScore)=>prevScore+1)
    }
console.log(answer)
  }
  const navigateNext=()=>{
    const currentQuizIndex=currentQuestionIndex+1
    const validQuestionIndex=currentQuizIndex<quizzes.length
    if(validQuestionIndex){
      setCurrentQuestionIndex(currentQuizIndex)
      const question=quizzes[currentQuizIndex]
      setCurrentAnswers(shuffle(question));
      setPickedAnswer(null)
      setCorrectAnswer(question.correct_answer)
    }else{
      setEndGame(true)
    }
  }
  const resetQuiz=()=>{
    setQuizzes(null)
    setLoaded(false)
    setCorrectAnswer(null)
    setEndGame(false)
    setStartQuiz(false)
    setPickedAnswer(null)
    setTotalScore(0)
    setCurrentQuestionIndex(0)
  }
  const fetchQuiz=async()=>{
    const res=await fetch('https://opentdb.com/api.php?amount=10')//fetch questions and answers from third party api ,and response is stored in results
    const {results}=await res.json()
    setQuizzes(results)
    //getting all answers
    const initialQuestion=results[currentQuestionIndex]
    setCurrentAnswers(shuffle(initialQuestion));
    setCorrectAnswer(initialQuestion.correct_answer)
    // const answers=[initialQuestionIndex.correct_answer,...initialQuestionIndex.incorrect_answers]
    // console.log(answers)
    
    
    // console.log(shuffle)
    setLoaded(true)
    setStartQuiz(true)
    // console.log(results)
  }
  return(
    <>
    {endGame&&<ScoreCard totalScore={totalScore} resetQuiz={resetQuiz}/>}
     {!StartQuiz && <button onClick={fetchQuiz} style={{display:'block',margin:'200 auto'}}>StartQuiz</button>}
  <div className='container'>
 {loaded && !endGame&&<QuestionCard quiz={quizzes[currentQuestionIndex]} currentAnswers={currentAnswers} currentQuestionIndex={currentQuestionIndex}
 quizzes={quizzes}
 navigateNext={navigateNext}
pickAnswer={pickAnswer}
pickedAnswer={pickedAnswer}
correctAnswer={correctAnswer}
 />}
  </div>
  </>
  )
}
export default App;
