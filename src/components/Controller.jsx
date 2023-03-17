const Controller = ({ score, bestScore, onIncreaseScoreClick }) => {
  return (
    <div className="controller">
      <p>Your score is: {score}</p>
      <p>Your best score is: {bestScore}</p>
      <button onClick={onIncreaseScoreClick}>Increase Score</button>
    </div>
  );
};

export default Controller;
