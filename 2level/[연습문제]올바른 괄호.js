function solution(s) {
  let n = s.length;

  let sum = 0;

  if (n % 2 === 1) {
    return false;
  } else {
    s = s.split('').map((bracket) => (bracket === '(' ? 1 : -1));
    for (let num of s) {
      sum += num;
      if (sum < 0) {
        return false;
      }
    }
    let answer = sum === 0 ? true : false;
    return answer;
  }
}
