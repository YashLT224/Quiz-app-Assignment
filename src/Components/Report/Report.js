import React,{useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './report.css'; // Link to the CSS file

const Report = () => {
  const navigate = useNavigate();
  
const [result,setResult]=useState({correct:0, incorrect:0, percentage:0})
  useEffect(() => {
    // Fetching data from mock API
    const fetchReportData = async () => {
      try {
        const response = await fetch('http://localhost:5001/responses', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
           
          });

        const data = await response.json();
      let correct=0;
       let total=data.length;
       for(let i=0;i<data.length;i++){
            if(data[i].isCorrect){
                correct++; 
            }
       }

       setResult({
           correct:correct,
           scorePercentage: Math.round((correct / total) * 100),
           incorrect:total-correct
       })
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData(); // Trigger the fetch when the component mounts
  }, []);
 

  const handleRestart = async () => {
    try {
      // Send a request to clear the responses array
      await fetch('http://localhost:5001/responses', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([]), // Replace the responses array with an empty array
    });
      // Navigate back to the home page after clearing the responses
      navigate('/');
    } catch (error) {
      console.error('Error clearing responses:', error);
    }
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
