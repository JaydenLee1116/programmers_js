function solution(x) {
  let answer = true;
  let stringX = String(x);
  let sum = [...stringX]
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur);
  if (x % sum !== 0) {
    answer = false;
  }
  console.log(sum);
  return answer;
}
