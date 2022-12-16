function solution(n) {
  let xArr = new Array(300)
    .fill(0)
    .map((value, index) => index + 1)
    .filter((value) => value % 3 !== 0 && !String(value).includes('3'));
  return xArr[n - 1];
}
