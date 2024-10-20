import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import logo from '../../logo.png'
const Home = () => {
  const navigate = useNavigate();

  const startQuiz = async () => {
    const response = await fetch('https://076561ff-b563-4c81-ab13-0e052f2b595b.mock.pstmn.io/'); // Fetch quiz questions
    const data = await response.json();

    navigate('/quiz', { state: { questions: data.quiz } }); // Pass questions via navigate state
  };
  return (
      <>
      
    <div className="home-container">
    <div className="logo">
        <img src={logo} alt="upraised logo" /> {/* Replace with your actual logo path */}
      </div>
      <div className="quiz-circle">
        <h1 className="quiz-text">Quiz</h1>
      </div>
      <button className="start-button" onClick={startQuiz}>
        Start
      </button>
    </div>
    </>
  );
};

export default Home;
