function solution(a, b) {
  return a.map((x, i) => x * b[i]).reduce((acc, cur) => acc + cur);
}
