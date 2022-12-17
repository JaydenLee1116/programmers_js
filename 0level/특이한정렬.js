function solution(numlist, n) {
  numlist.sort((a, b) => b - a);
  let newNumlist = numlist.map((value) => value - n);
  newNumlist.sort((a, b) => Math.abs(a) - Math.abs(b));
  return newNumlist.map((value) => value + n);
}
