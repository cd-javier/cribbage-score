import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import ButtonPanel from './ButtonPanel';
import Score from './Score';

function WinnerModal({ handleClose, handleRestart }) {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 90,
      colors: ['#debb1b', '#18c337'],
      ticks: 300,
    });
  }, []);
  return (
    <div className="overlay">
      <div className="winner-modal">
        <div className="heading">There's a winner!</div>
        <p>Do you want to restart the game?</p>
        <div className="actions">
          <div className="game-button" onClick={handleClose}>
            CLOSE
          </div>
          <div className="game-button" onClick={handleRestart}>
            RESTART
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scoreDisplay, setScoreDisplay] = useState([0, 0]);
  const [showWinnerOverlay, setShowWinnerOverlay] = useState(true);
  const score = useRef(new Score());

  function updateDisplay() {
    setScoreDisplay(score.current.currentScore);
  }
  function addPoints1(points) {
    const result = score.current.addP1(points);
    if (result === 'winner') setShowWinnerOverlay(true);
    updateDisplay();
  }
  function addPoints2(points) {
    const result = score.current.addP2(points);
    if (result === 'winner') setShowWinnerOverlay(true);
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
      setShowWinnerOverlay(false);
    }
  }

  return (
    <div className="game">
      {showWinnerOverlay && (
        <WinnerModal
          handleClose={() => setShowWinnerOverlay(false)}
          handleRestart={restart}
        />
      )}
      <div className="score">{scoreDisplay[0]}</div>
      <div className="score">{scoreDisplay[1]}</div>
      <ButtonPanel player={'p1'} addPoints={addPoints1} />
      <ButtonPanel player={'p2'} addPoints={addPoints2} />
      <div className="actions">
        <div className="game-button" onClick={undo}>
          UNDO
        </div>
        <div className="game-button" onClick={restart}>
          RESTART
        </div>
      </div>
    </div>
  );
}
