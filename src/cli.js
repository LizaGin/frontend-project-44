import readlineSync from "readline-sync";
import { phrases } from "./phrases.js";
import { print } from "./helpers.js";

export const getName = () => {
  print(phrases.WELCOME_PHRASE);
  const name = readlineSync.question(phrases.ASK_NAME_PHRASE);

  print(`${phrases.HELLO_PHRASE}${name}`);

  return name;
};
