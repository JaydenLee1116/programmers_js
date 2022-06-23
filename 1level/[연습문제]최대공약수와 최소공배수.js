function solution(n, m) {
  let answer = [];

  let min = Math.min(n, m);
  let max = Math.max(n, m);

  if (max % min === 0) {
    answer.push(min);
    answer.push(max);
  } else {
    for (let i = Math.floor(min / 2); i >= 1; i--) {
      if (min % i === 0 && max % i === 0) {
        answer.push(i);
        break;
      }
    }
    for (let j = 2; j < max; j++) {
      if ((max * j) % min === 0) {
        answer.push(max * j);
        break;
      }
    }
  }
  return answer;
}
