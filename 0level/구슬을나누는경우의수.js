const factorial = (number) => {
  if (number === 0) return BigInt(1);
  return BigInt(number) * factorial(number - 1);
};
function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
