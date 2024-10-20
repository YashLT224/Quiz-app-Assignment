import React,{useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './report.css'; // Link to the CSS file

const Report = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalQuestions,correctAnswers } = location.state;
const [result,setResult]=useState({correct:0, incorrect:0, percentage:0})
  useEffect(() => {
 
    setResult({
      correct:correctAnswers,
      percentage: Math.round((correctAnswers / totalQuestions) * 100),
      incorrect:totalQuestions-correctAnswers
  })
     
  }, []);
 

  const handleRestart =  () => {
   
     
      // Navigate back to the home page after clearing the responses
      navigate('/');
     
  };
  

  return (
    <div className="report-container">
      <h2>Your result</h2>

      {/* Gauge-like Circular Progress */}
      <div className="gauge-container">
        <div className="gauge">
          <div className="gauge-arc"></div>
          <div className="gauge-arrow" style={{ transform: `rotate(${(result.percentage / 100) * 180}deg)` }}></div>
          <div className="gauge-percentage">
            <span>{result.percentage}%</span>
          </div>
        </div>
      </div>

      <div className="result-details">
        <div className="result-correct">
          <span className="result-icon correct"></span>
          <p><span>{result.correct}</span> Correct</p>
        </div>
        <div className="result-incorrect">
          <span className="result-icon incorrect"></span>
          <p><span>{result.incorrect}</span> Incorrect</p>
        </div>
      </div>
      <button className="restart-button" onClick={handleRestart}>Start Again</button>
    </div>
  );
};

export default Report;
