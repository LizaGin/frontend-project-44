import phrases from '../phrases.js';
import { getRandomNum } from '../helpers.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const evenRound = () => {
  const question = getRandomNum(1, 10);
  const correctAnswer = isEven(question) ? phrases.YES : phrases.NO;

  return [question, correctAnswer];
};

const evenGame = () => runGame(phrases.DESCRIPTON_EVEN_GAME, evenRound);

export default evenGame;
