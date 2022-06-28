function solution(d, budget) {
  let dSort = d.sort((a, b) => a - b);
  let count = 0;
  for (let money of dSort) {
    if (budget >= money) {
      count++;
      budget -= money;
    }
  }
  return count;
}
