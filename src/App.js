import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Sreens/HomeScreen';
import MatchScreen from './Screens/MatchScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/matches" element={<MatchScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
