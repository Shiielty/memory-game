import Card from './Card';

const Game = ({ onCorrectAnswer, onWrongAnswer }) => {
  const arr = [
    <Card
      key="1"
      color="red"
      text="red"
      onCorrectAnswer={onCorrectAnswer}
      onWrongAnswer={onWrongAnswer}
    />,
    <Card
      key="2"
      color="blue"
      text="blue"
      onCorrectAnswer={onCorrectAnswer}
      onWrongAnswer={onWrongAnswer}
    />,
    <Card
      key="3"
      color="green"
      text="green"
      onCorrectAnswer={onCorrectAnswer}
      onWrongAnswer={onWrongAnswer}
    />,
  ];

  const randomizeComponent = (arr) => {
    const randArr = [];
    while (arr.length !== randArr.length) {
      const randNum = Math.floor(Math.random() * arr.length);
      if (!randArr.some((val) => val.key === arr[randNum].key)) {
        randArr.push(arr[randNum]);
      }
    }
    return randArr;
  };

  const randomComponent = randomizeComponent(arr);

  return (
    <div className="game">{randomComponent.map((component) => component)}</div>
  );
};

export default Game;
