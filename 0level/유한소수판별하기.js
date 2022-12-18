const getGCD = (x, y) => (y > 0 ? getGCD(y, x % y) : x);
const divideTwo = (n) => {
  if (n % 2 !== 0) return n;
  return divideTwo(n / 2);
};
const divideFive = (n) => {
  if (n % 5 !== 0) return n;
  return divideFive(n / 5);
};
function solution(a, b) {
  const GCD = getGCD(a, b);
  return divideFive(divideTwo(b / GCD)) === 1 ? 1 : 2;
}
