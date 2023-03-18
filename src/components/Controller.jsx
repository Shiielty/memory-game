const Controller = ({ score, bestScore, onIncreaseScore, onResetScore }) => {
  return (
    <div className="controller">
      <p>Your score is: {score}</p>
      <p>Your best score is: {bestScore}</p>
      <button onClick={onIncreaseScore}>Increase Score</button>
      <button onClick={onResetScore}>Reset Score</button>
    </div>
  );
};

export default Controller;
