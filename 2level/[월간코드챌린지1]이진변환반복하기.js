function solution(s) {
  var answer = [];
  let count = 0;
  let zeroCount = 0;
  function changeBinary(s) {
    if (s === '1') return;
    let beforeLength = s.length;
    s = s.replaceAll('0', '');
    let afterLength = s.length;
    zeroCount += beforeLength - afterLength;
    s = afterLength.toString(2);
    count++;
    changeBinary(s);
  }
  changeBinary(s);
  answer.push(count);
  answer.push(zeroCount);
  return answer;
}
