import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Question.css'
const Question = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Replaces useHistory
  const { questions } = location.state;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option); // Handle answer selection
  };
  const handleAnswerSubmit = async () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctOption;
    try {
      // Submit the selected answer to the server via API
      const response = await fetch('http://localhost:5001/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questionId: currentQuestion.questionId,
        selectedOption: selectedAnswer,
        isCorrect:isCorrect,
        timeTaken: 30
      }),
    });
      const data = await response.json();

      // Check if the response was correct
      if (data.correct) {
        setCorrectAnswers(correctAnswers + 1);
      }

      // Move to the next question or finish quiz
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);  // Reset selected answer for the next question
      } else {
        // Finish the quiz and navigate to the report page
        navigate('/report', { state: { correctAnswers, totalQuestions: questions.length } });
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };
 
const calculateProgress = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };
return (     
        <div className="question-container">
          <div className="progress-header">
            <svg className="progress-circle" viewBox="0 0 36 36">
              <path
                className="circle-bg"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${calculateProgress()}, 100`}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="progress-text">{currentQuestionIndex + 1}/{questions.length}</text>
            </svg>
          </div>
          <h2 className="question-text">{questions[currentQuestionIndex].question}</h2>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`option-box ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(option)}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selectedAnswer === option}
                  readOnly
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleAnswerSubmit} disabled={!selectedAnswer}>
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
  );
};

export default Question;
