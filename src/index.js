import readlineSync from 'readline-sync';
import {
  phrases,
  printCongratulation,
  printGreeting,
  printQuestion,
  printWrongAnswer,
} from './phrases.js';

const runGame = (description, getRound) => {
  console.log(phrases.WELCOME);
  const name = readlineSync.question(phrases.ASK_NAME);
  console.log(printGreeting(name));
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(printQuestion(question));
    const answer = readlineSync.question(phrases.ANSWER);
    if (answer === correctAnswer) {
      console.log(phrases.CORRECT_ANSWER);
    } else {
      console.log(printWrongAnswer(answer, correctAnswer, name));
      return;
    }
  }
  console.log(printCongratulation(name));
};
export default runGame;
