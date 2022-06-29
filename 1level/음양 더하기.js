function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => acc + cur * signs.map((x) => (x ? 1 : -1))[idx],
    0
  );
}
