const Card = ({ cardID, color, text, onCardClick }) => {
  return (
    <div
      className="card"
      style={{ background: color, width: '100px', height: '100px' }}
      data-id={cardID}
      onClick={onCardClick}
    >
      {text}
    </div>
  );
};

export default Card;
