function solution(num, total) {
  let first = (total - ((num - 1) * num) / 2) / num;
  let answer = new Array(num).fill(first).map((value, index) => value + index);
  return answer;
}
