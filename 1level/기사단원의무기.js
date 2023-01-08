const calculateDivisorCount = (number) => {
  let count = 0;
  let halfSquare = number ** (1 / 2);
  for (let i = 1; i < halfSquare; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  count *= 2;
  if (Math.floor(halfSquare) === halfSquare) {
    count++;
  }
  return count;
};

const solution = (number, limit, power) => {
  let weapons = new Array(number + 1).fill(0);
  weapons = weapons
    .map((_, index) => {
      let divisorCount = calculateDivisorCount(index);
      return divisorCount > limit ? power : divisorCount;
    })
    .slice(1, number + 1);
  console.log(weapons);
  return weapons.reduce((acc, cur) => acc + cur, 0);
};
