function solution(num) {
  let answer;
  let count = 0;

  if (num === 1) {
    answer = 0;
  } else {
    while (num !== 1 && count < 500) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      count++;
    }
    answer = count !== 500 ? count : -1;
  }
  return answer;
}
