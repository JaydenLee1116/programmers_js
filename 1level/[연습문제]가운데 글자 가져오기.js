function solution(s) {
  let n = s.length;
  return n % 2 ? s[Math.floor(n / 2)] : s[n / 2 - 1] + s[n / 2];
}
