function solution(n) {
  let sqrtNum = n ** (1 / 2);
  if (sqrtNum % 1 === 0) {
    return (sqrtNum + 1) ** 2;
  } else {
    return -1;
  }
}
