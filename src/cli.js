import readlineSync from 'readline-sync';
import { print } from './helpers.js';
import phrases from './phrases.js';

const getName = () => {
  print(phrases.WELCOME);
  const name = readlineSync.question(phrases.ASK_NAME);

  print(phrases.HELLO(name));

  return name;
};

export default getName;
