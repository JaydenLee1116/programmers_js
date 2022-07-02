function solution(arr) {
  let max = Math.max(...arr);
  let n = arr.length;
  let count = 1;
  while (arr.filter((num) => (max * count) % num === 0).length < n) {
    count++;
  }

  let answer = max * count;
  return answer;
}
