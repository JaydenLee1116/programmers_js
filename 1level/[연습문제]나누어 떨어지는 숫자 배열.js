function solution(arr, divisor) {
  let arrDivided = arr.filter((num) => num % divisor === 0);
  return arrDivided.length ? arrDivided.sort((a, b) => a - b) : [-1];
}
