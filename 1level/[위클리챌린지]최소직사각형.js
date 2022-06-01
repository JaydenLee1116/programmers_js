function solution(sizes) {
  let arrMax = [];
  let arrMin = [];
  for (let size of sizes) {
    arrMax.push(Math.max(...size));
    arrMin.push(Math.min(...size));
  }
  let answerFirst = Math.max(...arrMax);
  let answerSecond = Math.max(...arrMin);
  let answer = answerFirst * answerSecond;
  return answer;
}
