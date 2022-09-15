import { phrases } from '../phrases.js';
import getRandomNum from '../helpers.js';
import runGame from '../index.js';

const generateProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const progressionRound = () => {
  const first = getRandomNum(1, 50);
  const step = getRandomNum(1, 10);
  const length = getRandomNum(5, 10);
  const progression = generateProgression(first, step, length);

  const missingIndex = getRandomNum(0, progression.length - 1);
  const correctAnswer = `${progression[missingIndex]}`;

  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const progressionGame = () => runGame(phrases.DESCRIPTON_PROGRESSION_GAME, progressionRound);

export default progressionGame;
