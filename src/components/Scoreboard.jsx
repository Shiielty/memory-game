import './Scoreboard.css';

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="score">Score: {score}</div>
      <div className="high-score">Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
