const phrases = {
  ANSWER: 'Your answer: ',
  ASK_NAME: 'May I have your name?',
  CORRECT_ANSWER: 'Correct!',
  DESCRIPTON_EVEN_GAME:
    'Answer "yes" if the number is even, otherwise answer "no".',
  DESCRIPTON_CALC_GAME: 'What is the result of the expression?',
  DESCRIPTON_GCD_GAME: 'Find the greatest common divisor of given numbers.',
  DESCRIPTON_PRIME_GAME: 'What number is missing in the progression?',
  DESCRIPTON_PROGRESSION_GAME:
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  NO: 'no',
  WELCOME: 'Welcome to the Brain Games!',
  YES: 'yes',
  CONGRATULATION: (name) => `Congratulations, ${name}`,
  INCORRECT_ANSWER: (answer, correctAnswer) =>
    `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`,
  HELLO: (name) => `Hello, ${name}`,
  TRY_AGAIN: (name) => `Let's try again, ${name}`,
  QUESTION: (question) => `Question: ${question}`,
};

export default phrases;
