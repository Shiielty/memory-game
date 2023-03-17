import { useState } from 'react';
import Controller from './Controller';
import Game from './Game';

const Main = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function handleIncreaseScore() {
    setScore(score + 1);
    if (score >= bestScore) {
      setBestScore(bestScore + 1);
    }
  }

  function handleResetScore() {
    setScore(0);
  }

  return (
    <main>
      <Controller
        score={score}
        bestScore={bestScore}
        onIncreaseScoreClick={handleIncreaseScore}
      />
      <Game
        onCorrectAnswer={handleIncreaseScore}
        onWrongAnswer={handleResetScore}
      />
    </main>
  );
};

export default Main;
