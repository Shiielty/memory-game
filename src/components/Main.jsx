import { useState } from 'react';
import Controller from './Controller';
import Game from './Game';

const Main = () => {
  const cards = [
    { id: 0, color: 'red' },
    { id: 1, color: 'green' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'black' },
    { id: 4, color: 'aqua' },
    { id: 5, color: 'lightgreen' },
  ];

  const maxScore = cards.length;
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const initialState = Array(cards.length).fill(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isWin, setIsWin] = useState(false);

  function handleIncreaseScore() {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(bestScore + 1);
    }
    if (newScore === maxScore) handleWin();
  }

  function handleResetScore() {
    setScore(0);
  }

  function handleWin() {
    setIsWin(true);
  }

  function cardStateToTrue(index) {
    const nextState = isClicked.map((val, i) => {
      if (i === index) {
        return true;
      } else {
        return val;
      }
    });
    setIsClicked(nextState);
  }

  function handleCardClick(index) {
    if (!isClicked[index]) {
      cardStateToTrue(index);
      handleIncreaseScore();
    } else {
      setIsClicked(initialState);
      handleResetScore();
    }
  }

  const randomizeCards = (cards) => {
    const randomCards = [];
    while (cards.length !== randomCards.length) {
      const randNum = Math.floor(Math.random() * cards.length);
      if (!randomCards.some((card) => card.id === cards[randNum].id)) {
        randomCards.push(cards[randNum]);
      }
    }
    return randomCards;
  };

  const randomCards = randomizeCards(cards);

  if (isWin) {
    return <div>You reach the max score!</div>;
  }

  return (
    <main>
      <Controller
        score={score}
        bestScore={bestScore}
        onIncreaseScore={handleIncreaseScore}
        onResetScore={handleResetScore}
      />
      <Game
        onCorrectAnswer={handleIncreaseScore}
        onWrongAnswer={handleResetScore}
        randomCards={randomCards}
        onCardClick={handleCardClick}
      />
    </main>
  );
};

export default Main;
