import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const About: React.FC = () => {
  return (
    <div>
      About
    </div>
  )

}

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
