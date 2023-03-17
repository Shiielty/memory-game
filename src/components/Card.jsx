import { useState } from 'react';

const Card = ({ color, text, onCorrectAnswer, onWrongAnswer }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    if (isClicked === false) {
      setIsClicked(true);
      onCorrectAnswer();
    } else {
      setIsClicked(false);
      onWrongAnswer();
      console.log('GameOver!');
    }
  };

  return (
    <div
      className="card"
      style={{ background: color, width: '100px', height: '100px' }}
      onClick={handleCardClick}
    >
      {text}
    </div>
  );
};

export default Card;
