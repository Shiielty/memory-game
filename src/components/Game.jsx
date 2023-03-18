import Card from './Card';

const Game = ({ randomCards, onCardClick }) => {
  return (
    <div className="game">
      {randomCards.map((card) => (
        <Card
          key={card.id}
          color={card.color}
          text={card.color}
          onCardClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Game;
