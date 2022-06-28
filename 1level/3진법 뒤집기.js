function solution(n) {
  let lengthThree = n.toString(3).length;
  return n
    .toString(3)
    .split('')
    .map((x, i) => Number(x) * 3 ** i)
    .reduce((acc, cur) => acc + cur);
}
