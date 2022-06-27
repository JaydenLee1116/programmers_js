function solution(a, b) {
  let days = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',');
  let temp = 0;
  for (let month = 1; month < a; month++) {
    if (month === 2) {
      temp += 29;
    } else {
      if (month <= 7) {
        if (month % 2 === 0) {
          temp += 30;
        } else {
          temp += 31;
        }
      } else {
        if (month % 2 === 0) {
          temp += 31;
        } else {
          temp += 30;
        }
      }
    }
  }
  let total = temp + b - 1;

  return days[(total + 5) % 7];
}
