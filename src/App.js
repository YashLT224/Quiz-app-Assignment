 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Question from './Components/Question/Question';
import Report from './Components/Report/Report';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Question />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
