function solution(begin, end) {
  let answer = [];

  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      answer.push(0);
      continue;
    }

    let temp = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0 && i / j <= 1e7) {
        temp = i / j;
        break;
      }
    }
    answer.push(temp);
  }
  return answer;
}
