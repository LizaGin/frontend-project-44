import phrases from '../phrases.js';
import { getRandomNum } from '../helpers.js';
import runGame from '../index.js';

const findGCD = (num1, num2) => (!num2 ? num1 : findGCD(num2, num1 % num2));

const GCDRound = () => {
  const num1 = getRandomNum(1, 50);
  const num2 = getRandomNum(1, 50);

  const question = `${num1} ${num2}`;
  const correctAnswer = `${findGCD(num1, num2)}`;

  return [question, correctAnswer];
};

const GCDGame = () => runGame(phrases.DESCRIPTON_GCD_GAME, GCDRound);

export default GCDGame;
