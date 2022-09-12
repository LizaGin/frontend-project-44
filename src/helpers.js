export function print(text) {
  console.log(text);
}
export function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

export default { print, getRandomNum };
