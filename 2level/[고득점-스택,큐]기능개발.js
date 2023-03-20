function solution(progresses, speeds) {
  let answer = [];
  let stack = [];
  for (let i = progresses.length - 1; i >= 0; i--) {
    stack.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 0;
  let standard = stack.pop();
  count++;

  while (stack.length > 0) {
    if (standard >= stack[stack.length - 1]) {
      count++;
      stack.pop();
    } else if (standard < stack[stack.length - 1]) {
      answer.push(count);
      standard = stack.pop();
      count = 1;
    }

    if (stack.length === 0) {
      answer.push(count);
    }
  }

  return answer;
}

// 새로 푼 방식

const solution = (progresses, speeds) => {
  let answer = [];
  let stack = [];
  const publishingDays = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  publishingDays.reduce((pre, cur) => {
    if (pre >= cur) {
      stack.push(cur);
      return pre;
    }
    answer.push(++stack.length);
    stack = [];
    return cur;
  });
  answer.push(++stack.length);
  return answer;
};
