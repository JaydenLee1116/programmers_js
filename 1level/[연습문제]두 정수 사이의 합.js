function solution(a, b) {
  let max = Math.max(...[a, b]);
  let min = Math.min(...[a, b]);
  return (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
}
