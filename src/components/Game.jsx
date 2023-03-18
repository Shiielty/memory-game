import Card from './Card';
import './Game.css';

const Game = ({ randomCards, onCardClick }) => {
  return (
    <div className="game">
      {randomCards.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          text={card.text}
          onCardClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Game;
