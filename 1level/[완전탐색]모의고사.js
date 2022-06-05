function solution(answers) {
  const lengthAns = answers.length;
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const firstAns = new Array(Math.ceil(lengthAns / first.length))
    .fill(first)
    .flat();
  const secondAns = new Array(Math.ceil(lengthAns / second.length))
    .fill(second)
    .flat();
  const thirdAns = new Array(Math.ceil(lengthAns / third.length))
    .fill(third)
    .flat();
  let countFirst = 0;
  let countSecond = 0;
  let countThird = 0;
  for (let i = 0; i < lengthAns; i++) {
    if (answers[i] === firstAns[i]) {
      countFirst++;
    }
    if (answers[i] === secondAns[i]) {
      countSecond++;
    }
    if (answers[i] === thirdAns[i]) {
      countThird++;
    }
  }
  let answer = [];
  let temp = [countFirst, countSecond, countThird];
  let countMax = Math.max(...temp);
  for (let i = 0; i < 3; i++) {
    if (temp[i] === countMax) {
      answer.push(i + 1);
    }
  }
  return answer;
}
