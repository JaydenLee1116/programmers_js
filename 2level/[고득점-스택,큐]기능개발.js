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
