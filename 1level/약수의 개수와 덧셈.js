function solution(left, right) {
  let answer = 0;
  for (let number = left; number <= right; number++) {
    number ** (1 / 2) === Math.floor(number ** (1 / 2))
      ? (answer -= number)
      : (answer += number);
  }
  return answer;
}
