function solution(denum1, num1, denum2, num2) {
  let denum3 = denum1 * num2 + denum2 * num1;
  let num3 = num1 * num2;
  let small = Math.min(denum3, num3);
  for (let i = small; i > 1; i--) {
    if (denum3 % i === 0 && num3 % i === 0) {
      denum3 /= i;
      num3 /= i;
    }
  }
  return [denum3, num3];
}
