import readlineSync from 'readline-sync';
import { phrases, printGreeting } from './phrases.js';

const getName = () => {
  console.log(phrases.WELCOME);
  const name = readlineSync.question(phrases.ASK_NAME);

  console.log(printGreeting(name));
};

export default getName;
