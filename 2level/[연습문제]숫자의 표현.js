function solution(n) {
  let answer = 1;

  for (let num = 1; num <= n / 2; num++) {
    let max = n;
    let start = num;
    while (max > 0) {
      max -= start;
      start++;
    }
    if (max === 0) {
      answer++;
    }
  }
  return answer;
}
