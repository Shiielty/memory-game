const Card = ({ cardID, img, text, onCardClick }) => {
  return (
    <div className="card-wrapper" data-id={cardID} onClick={onCardClick}>
      <div className="image-wrapper">
        <img src={img} alt={text}></img>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
