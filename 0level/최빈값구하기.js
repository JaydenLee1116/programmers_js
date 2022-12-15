function solution(array) {
  array.sort((a, b) => a - b);
  let numbers = [...new Set(array)];
  let counts = [];
  numbers.forEach((number) => {
    counts.push(array.filter((num) => num === number).length);
  });
  return counts.filter((count) => count === Math.max(...counts)).length === 1
    ? numbers[counts.indexOf(Math.max(...counts))]
    : -1;
}
