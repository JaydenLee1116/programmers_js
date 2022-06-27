function solution(dartResult) {
  let answer = 0;
  const re = /[SDT*#]/g;
  let numbers = dartResult
    .replace(re, '?')
    .split('?')
    .filter((x) => x !== '')
    .map((x) => Number(x));
  let calculations = dartResult
    .replace(/[0123456789]/g, '!')
    .split('!')
    .filter((x) => x !== '');

  let temp;
  for (let i = 0; i < 3; i++) {
    if (calculations[i].includes('D')) {
      numbers[i] **= 2;
    } else if (calculations[i].includes('T')) {
      numbers[i] **= 3;
    }

    if (calculations[i].includes('#')) {
      numbers[i] *= -1;
    } else if (calculations[i].includes('*')) {
      numbers[i - 1] *= 2;
      numbers[i] *= 2;
    }
  }

  answer = numbers.reduce((acc, cur) => acc + cur);
  return answer;
}
