function solution(n) {
  // n을 이진수로 바꾸고 1의 갯수를 변수로 선언 및 할당
  // 1씩 더하면서 이진수로 바꾼 값의 1갯수가 위에서 구한 변수와 같을 때, 그 값을 리턴한다.
  let countFirst = n
    .toString(2)
    .split('')
    .filter((x) => x === '1').length;
  let answer = false;
  while (!answer) {
    n++;
    let countSecond = n
      .toString(2)
      .split('')
      .filter((x) => x === '1').length;
    if (countFirst === countSecond) {
      answer = n;
    }
  }
  return answer;
}
