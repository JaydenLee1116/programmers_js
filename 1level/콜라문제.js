const solution = (a, b, n) => {
  // a개를 가져다주면 b개를 주는 마트. n개를 가져간다면 총 얻게 되는 갯수는?
  if (n / a < 1) return 0;
  const gain = Math.floor(n / a) * b;
  const remain = n % a;
  return gain + solution(a, b, gain + remain);
};
