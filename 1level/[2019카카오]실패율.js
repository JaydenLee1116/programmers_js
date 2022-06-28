function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    let failure = stages.filter((x) => x === i).length;
    let challenger = stages.filter((x) => x >= i).length;
    let percent = failure / challenger;
    answer.push([i, percent]);
  }

  return answer.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}
