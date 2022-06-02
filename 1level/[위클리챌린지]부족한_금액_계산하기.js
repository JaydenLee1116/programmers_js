function solution(price, money, count) {
  let answer;
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  if (total > money) {
    answer = total - money;
  } else {
    return 0;
  }
  return answer;
}
