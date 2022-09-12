import readlineSync from 'readline-sync';
import getName from './cli.js';
import { print } from './helpers.js';
import phrases from './phrases.js';

const runGame = (description, getRound) => {
  const name = getName();
  print(description);
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getRound();
    print(phrases.QUESTION(question));
    const answer = readlineSync.question(phrases.ANSWER);
    if (answer === correctAnswer) {
      print(phrases.CORRECT_ANSWER);
    } else {
      print(phrases.INCORRECT_ANSWER(answer, correctAnswer));
      print(phrases.TRY_AGAIN(name));
      return;
    }
  }
  print(phrases.CONGRATULATION(name));
};
export default runGame;
