function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

/*
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

map에서 첫번째 인자는 배열의 value, 두번째 인자는 배열의 index임을 활용한 풀이
*/
