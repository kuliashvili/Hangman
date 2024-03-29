import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import Lost from './components/Lost'
import Win from './components/Win'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/Hangman" element={<Home />} />
          <Route path="/Hangman/game" element={<Game />} />
          <Route path="/Hangman/lost" element={<Lost />} />
          <Route path="/Hangman/win" element={<Win />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
