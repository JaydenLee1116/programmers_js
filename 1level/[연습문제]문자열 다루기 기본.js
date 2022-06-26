function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.length === s.split('').filter((x) => !Number.isNaN(+x)).length;
  } else {
    return false;
  }
}
