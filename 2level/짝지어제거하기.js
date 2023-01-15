const solution = (s) => {
  const sArr = [...s];
  const stack = [];
  for (let i = 0; i < sArr.length; i++) {
    stack.push(sArr[i]);
    if (stack[stack.length - 2] === stack[stack.length - 1]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.join('') === '' ? 1 : 0;
};
