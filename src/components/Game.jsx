import { useState, useEffect } from "react";
import axios from "axios";
import Result from './Result'
import Question from './Question'
import Options from './Options'

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the backend API
    axios.get(`${import.meta.env.VITE_APP_URL}/api/questions`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const checkAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].answers.find(answer => answer.isCorrect);
    if (selectedAnswer === correctAnswer.text) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="game">
      {showResult ? (
        <Result score={score} restartGame={restartGame} />
      ) : (
        <>
          {questions.length > 0 && (
            <>
              <Question question={questions[currentQuestion].question} />
              <Options
                options={questions[currentQuestion].answers.map(answer => answer.text)}
                checkAnswer={checkAnswer}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Game;