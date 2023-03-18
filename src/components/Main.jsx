import { useState } from 'react';
import Scoreboard from './Scoreboard';
import Game from './Game';
import Ruka from '../assets/icon_hbr_31a_kayamori.png';
import Yuki from '../assets/icon_hbr_31a_izumi.png';
import Megumi from '../assets/icon_hbr_31a_aikawa.png';
import Tsukasa from '../assets/icon_hbr_31a_tojo.png';
import Karen from '../assets/icon_hbr_31a_asakura.png';
import Tama from '../assets/icon_hbr_31a_kunimi.png';
import Aoi from '../assets/icon_hbr_31b_aoi.png';
import Ichigo from '../assets/icon_hbr_31b_minasei.png';
import Sumomo from '../assets/icon_hbr_31b_minases.png';
import Higuchi from '../assets/icon_hbr_31b_higuchi.png';
import Hiiragi from '../assets/icon_hbr_31b_hiiragi.png';
import Byakko from '../assets/icon_hbr_31b_byakko.png';
import Gameover from './Gameover';

const Main = () => {
  const cards = [
    { id: 0, img: Ruka, text: 'Ruka Kayamori' },
    { id: 1, img: Yuki, text: 'Yuki Izumi' },
    { id: 2, img: Megumi, text: 'Megumi Aikawa' },
    { id: 3, img: Tsukasa, text: 'Tsukasa Toujou' },
    { id: 4, img: Karen, text: 'Karen Asakura' },
    { id: 5, img: Tama, text: 'Tama Kunimi' },
    { id: 6, img: Aoi, text: 'Erika Aoi' },
    { id: 7, img: Ichigo, text: 'Ichigo Minase' },
    { id: 8, img: Sumomo, text: 'Sumomo Minase' },
    { id: 9, img: Higuchi, text: 'Seika Higuchi' },
    { id: 10, img: Hiiragi, text: 'Kozue Hiiragi' },
    { id: 11, img: Byakko, text: 'Byakko' },
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

  function playAgain() {
    setScore(0);
    setIsClicked(initialState);
    setIsWin(false);
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
    return (
      <main>
        <Scoreboard
          score={score}
          bestScore={bestScore}
          onIncreaseScore={handleIncreaseScore}
          onResetScore={handleResetScore}
        />
        <Gameover onPlayAgain={playAgain} />
      </main>
    );
  }

  return (
    <main>
      <Scoreboard
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
