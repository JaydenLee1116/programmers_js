function solution(s) {
  return s
    .split(' ')
    .map((v, i, arr) => {
      return v === 'Z' ? -1 * Number(arr[i - 1]) : Number(v);
    })
    .reduce((acc, cur) => acc + cur, 0);
}
