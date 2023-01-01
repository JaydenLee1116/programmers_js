const NUMBERS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const solution = (numbers) => {
  for (let key in NUMBERS) {
    numbers = numbers.replaceAll(key, NUMBERS[key]);
  }
  return numbers;
  return parseInt(numbers);
};
