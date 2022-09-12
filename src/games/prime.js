import phrases from '../phrases.js';
import { getRandomNum } from '../helpers.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeRound = () => {
  const question = getRandomNum(1, 20);
  const correctAnswer = isPrime(question) ? phrases.YES : phrases.NO;

  return [question, correctAnswer];
};

const primeGame = () => runGame(phrases.DESCRIPTON_EVEN_GAME, primeRound);

export default primeGame;
