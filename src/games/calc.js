import { phrases } from '../phrases.js';
import getRandomNum from '../helpers.js';
import runGame from '../index.js';

const value = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const calcRound = () => {
  const num1 = getRandomNum(1, 10);
  const num2 = getRandomNum(1, 10);
  const operator = ['+', '-', '*'][getRandomNum(0, 2)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = `${value[operator](num1, num2)}`;

  return [question, correctAnswer];
};

const calcGame = () => runGame(phrases.DESCRIPTON_CALC_GAME, calcRound);

export default calcGame;
