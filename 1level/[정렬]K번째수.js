function solution(array, commands) {
  let answer = [];
  for (let command of commands) {
    let arr = new Array(...array);
    let i = command[0];
    let j = command[1];
    let k = command[2];
    let tempArr = arr.splice(i - 1, j - i + 1);
    tempArr.sort((a, b) => a - b);
    let num = tempArr[k - 1];
    answer.push(num);
  }
  return answer;
}
