import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

import ButtonPanel from './ButtonPanel';
import Score from './Score';

export default function App() {
  const [scoreDisplay, setScoreDisplay] = useState([0, 0]);
  const score = useRef(new Score());

  function updateDisplay() {
    setScoreDisplay(score.current.currentScore);
  }
  function addPoints1(points) {
    score.current.addP1(points);
    updateDisplay();
  }
  function addPoints2(points) {
    score.current.addP2(points);
    updateDisplay();
  }

  function undo() {
    score.current.undo();
    updateDisplay();
  }

  function restart() {
    if (confirm('Are you sure you want to restart the score?')) {
      score.current.restart();
      updateDisplay();
    }
  }

  return (
    <div className="game">
      <div className="score">{scoreDisplay[0]}</div>
      <div className="score">{scoreDisplay[1]}</div>
      <ButtonPanel player={'p1'} addPoints={addPoints1} />
      <ButtonPanel player={'p2'} addPoints={addPoints2} />
      <div className="game-button" onClick={undo}>
        UNDO
      </div>
      <div className="game-button" onClick={restart}>
        RESTART
      </div>
    </div>
  );
}
