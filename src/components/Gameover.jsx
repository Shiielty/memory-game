import './Gameover.css';
import Circle from '../assets/circle.png';

const Gameover = ({ onPlayAgain }) => {
  return (
    <div className="game-over">
      <div>Congratulations!</div>
      <div>You Get Maximum Scores!</div>
      <div className="play-again">
        <button onClick={onPlayAgain}>Play Again</button>
        <img src={Circle} className="rotate"></img>
      </div>
    </div>
  );
};

export default Gameover;
