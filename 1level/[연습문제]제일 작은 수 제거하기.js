function solution(arr) {
  let answer = arr.filter((x) => x !== Math.min(...arr));
  return answer.length ? answer : [-1];
}
